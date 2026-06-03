import os
import sys
from PIL import Image

def main():
    # 1. Define the directory containing team pictures
    target_dir = os.path.join(os.getcwd(), 'public', 'Team')
    if not os.path.isdir(target_dir):
        print(f"Error: Target directory {target_dir} does not exist.")
        sys.exit(1)
        
    print(f"Scanning directory: {target_dir}")
    
    # 2. Find all PNG files in target_dir
    png_files = []
    for root, _, files in os.walk(target_dir):
        for file in files:
            if file.lower().endswith('.png'):
                png_files.append(os.path.join(root, file))
                
    if not png_files:
        print("No PNG files found in the target directory.")
        return
        
    print(f"Found {len(png_files)} PNG files to convert:")
    for path in png_files:
        print(f"  - {os.path.relpath(path)}")
        
    # 3. Convert PNG files to JPG
    conversion_map = {}
    for png_path in png_files:
        # Define output jpg path
        base, _ = os.path.splitext(png_path)
        jpg_path = base + '.jpg'
        
        # Save relative/base names for mapping replacement in code
        png_basename = os.path.basename(png_path)
        jpg_basename = os.path.basename(jpg_path)
        
        print(f"Converting {png_basename} -> {jpg_basename}...")
        try:
            with Image.open(png_path) as img:
                # Handle alpha channel (transparency) for JPEG conversion
                if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
                    bg = Image.new('RGB', img.size, (255, 255, 255))
                    rgba_img = img.convert('RGBA')
                    bg.paste(rgba_img, (0, 0), rgba_img)
                    bg.save(jpg_path, 'JPEG', quality=90)
                else:
                    rgb_img = img.convert('RGB')
                    rgb_img.save(jpg_path, 'JPEG', quality=90)
                    
            # Verify the converted file was created successfully before deleting the original
            if os.path.exists(jpg_path) and os.path.getsize(jpg_path) > 0:
                os.remove(png_path)
                conversion_map[png_basename] = jpg_basename
                # Also handle lowercase/uppercase key matching if references in code differ
                # (e.g. if the file is Sidra.png but referenced as Sidra.png, we map Sidra.png -> Sidra.jpg)
                # We will map both the exact case and check for potential variations if needed, 
                # but standard exact case matching is safest.
                conversion_map[png_basename] = jpg_basename
                print(f"  [Success] Converted and removed original PNG.")
            else:
                print(f"  [Error] Failed to verify JPG file {jpg_path} creation.")
        except Exception as e:
            print(f"  [Error] Failed to convert {png_basename}: {e}")
            
    if not conversion_map:
        print("No files were successfully converted. Exiting.")
        return
        
    # 4. Search and replace occurrences of converted filenames in source files
    print("\nUpdating references in source files...")
    
    # Files and directories to exclude from text search/replace
    exclude_dirs = {'.git', '.next', 'node_modules'}
    exclude_files = {'convert_png_to_jpg.py'}
    
    # File extensions to scan for references
    text_extensions = {'.js', '.jsx', '.ts', '.tsx', '.css', '.json', '.html', '.md', '.scss'}
    
    # Sort conversion_map by old filename length descending to prevent partial replacements
    sorted_conversions = sorted(conversion_map.items(), key=lambda x: len(x[0]), reverse=True)
    
    updated_files_count = 0
    
    # Walk the whole workspace to update references
    for root, dirs, files in os.walk(os.getcwd()):
        # Modify dirs in-place to avoid walking excluded directories
        dirs[:] = [d for d in dirs if d not in exclude_dirs]
        
        for file in files:
            if file in exclude_files:
                continue
                
            _, ext = os.path.splitext(file)
            if ext.lower() not in text_extensions:
                continue
                
            file_path = os.path.join(root, file)
            
            try:
                with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                    content = f.read()
                    
                modified = False
                new_content = content
                
                for old_name, new_name in sorted_conversions:
                    if old_name in new_content:
                        new_content = new_content.replace(old_name, new_name)
                        modified = True
                        print(f"  Replacing {old_name} -> {new_name} in {os.path.relpath(file_path)}")
                        
                if modified:
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    updated_files_count += 1
                    
            except Exception as e:
                print(f"  [Error] Failed to process reference updates in {file}: {e}")
                
    print(f"\nCompleted! {len(conversion_map)} files converted. References updated in {updated_files_count} files.")

if __name__ == '__main__':
    main()
