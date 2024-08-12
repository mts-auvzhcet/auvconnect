
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        apple:['SF Pro Display','Poppins','sans-serif'],
        apple2:['SF Pro Text','Poppins','sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        primary:['Oswald','sans-serif'],
        secondary:['Protest Riot','sans-serif'],
      },
      colors: {
        primary: "#ffffffcc",
        secondary: "#aaa6c3",
        tertiary: "#151030",
      },
       screens: {
         'sm': '560px',
         'md': '790px',
         'lg': '1024px',
         'xl': '1280px',
       },
    },
  },
  plugins: [],
}
