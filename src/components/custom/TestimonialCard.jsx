import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import Image from "next/image";

// import { CldImage } from "next-cloudinary";

const TestimonialCard = ({ remark, image, name, designation }) => {
    return (
        <Card className='flex flex-col items-center justify-center mx-auto w-4/5 lg:w-1/2 relative mt-10 pt-11 bg-zinc-800 text-zinc-300'>
            {/* <CldImage
                src={image} // Use this sample image or upload your own via the Media Explorer
                width="100" // Transform the image: auto-crop to square aspect_ratio
                height="100"
                crop={{
                    type: 'auto',
                    source: true
                }}
                className='rounded-full absolute -top-11 z-20'
            /> */}
            <Image src={image} width={100} height={100} className='rounded-full absolute -top-10 z-20 border-black border' alt="headshots" />
            <CardContent className='mt-5 text-justify'>
               <p>
                {remark}
               </p>
            </CardContent>
            <CardFooter className='flex flex-col items-center justify-center mt-4'>
                <span className='text-lg font-bold'>{name}</span>
                <span className='text-md text-center'>{designation}</span>
            </CardFooter>
        </Card>
    )
}

export default TestimonialCard;