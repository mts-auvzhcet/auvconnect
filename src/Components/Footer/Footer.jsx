'use client'
import React from 'react'
import { items, handles } from './data'
import Image from 'next/image'
import logo from '../../../public/auv1.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';


const Footer = () => {
  return (
  

      <footer className='h-full sm:h-[400px] bg-[#07131e] border-t-[0.3px] border-gray-700 overflow-x-hidden'>

        <div className={`flex flex-col p-[10px] pt-[40px] sm:pb-[0px] w-[98%] font-apple border-slate-700 mx-auto h-[100%]`}>

          <div className='flex flex-col sm:flex-row h-[100%] justify-center sm:justify-around items-center gap-[10vw]'>

            <div className='flex flex-col gap-6 justify-center items-center w-full sm:w-auto'>
              <Image src={logo} alt="logo" className='min-w-[70px] max-w-[120px] sm:w-[12vw]  lg:w-[12.5vw]' />
              <div className='flex flex-row text-gray-400 gap-1 w-full justify-center '>
                <LocationOnIcon className="w-[15px] h-[15px] mt-[2px]" />
                <div className=' text-[13px] '>
                  Main Building,<br />
                  ZHCET,AMU,<br />
                  Aligarh,202002
                </div>
              </div>
            </div>


          <div className='flex flex-row gap-[12vw] sm:gap-[9vw] md:gap-[15vw] '>

            <div className='flex flex-col flex-wrap h-[100%] items-center justify-center'>
              <div className='text-white text-[15px] sm:text-[18px] font-bold'>
                Explore
              </div>
              {items.map((footerLink, index) => (
                <a key={index} href={footerLink.link} target="_blank" rel="noopener noreferrer" className='hover:scale-110 transition-all duration-300 ease-in text-center  mt-[1px] sm:mt-[3px]'>
                  <span className='text-gray-400 text-[11px] sm:text-[13px] hover:text-blue-400 cursor-pointer '>
                    {footerLink.name}
                  </span>
                </a>
              ))}
            </div>

            <div className='flex flex-col flex-wrap h-[100%] items-center justify-center'>
              <div className='text-white text-[15px] sm:text-[18px] font-bold'>
                QuickLinks
              </div>
              {items.map((footerLink, index) => (
                <a key={index} href={footerLink.link} target="_blank" rel="noopener noreferrer" className='hover:scale-110 transition-all duration-300 ease-in text-center  mt-[1px] sm:mt-[3px]'>
                  <span className='text-gray-400 text-[11px] sm:text-[13px] hover:text-blue-400 cursor-pointer '>
                    {footerLink.name}
                  </span>
                </a>
              ))}
            </div>
          </div>


            <div className='flex flex-col justify-around items-center gap-10 font-poppins'>

              <div className='flex flex-col justify-center items-center gap-2 '>
                <div className='text-white text-[17px] tracking-widest font-light'>
                  Follow Us
                </div>
                <div className='flex flex-row h-[100%] items-center justify-center'>
                  {handles.map((social, index) => (
                    <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
                      <Image key={index} src={social.icon} alt={social.name} className={`${index !== handles.length - 1 ? "mr-5" : "mr-2"} sm:h-[17px] sm:w-[17px]  md:h-[20px] md:w-[20px] items-center hover:scale-110`} />
                    </a>
                  ))}
                </div>
              </div>

              <div className='flex flex-col items-center text-center tracking-tighter justify-center text-white text-[12px] sm:text-[15px] gap-1'>
                <div className='text-[17px] font-light tracking-widest'>
                  Contact us
                </div>
                <div className='text-center text-gray-400'>
                  <LocalPhoneIcon className='w-[18px] h-[18px] mr-[5px] text-gray-400'/>+91 9837264374, +91 8372537493
                </div>
                <div className='text-center text-gray-400'>
                  <MailIcon className='w-[18px] h-[18px] mr-[5px] text-gray-400'/> auvzhcet@gmail.com
                </div>
              </div>
            </div>
          </div>



        <div className=' flex border-t-[1px] border-slate-700 pt-[10px] my-[15px] justify-center items-center '>
  <p className=' font-medium text-gray-400 text-[14px] sm:text-[16px] cursor-pointer flex flex-row justify-center items-center'>
Developed by Priyanshu Singh 

<a href='https://github.com/priyanshu082' target="_blank" rel="noopener noreferrer" className='ml-[10px] pb-[4px]'>
  <GitHubIcon className=' w-[17px] h-[17px] sm:w-[20px] sm:h-[20px] text-blue-500'/>
</a> 

<a href='https://www.linkedin.com/in/priyanshu-singh-a81975253/' target="_blank" rel="noopener noreferrer" className='ml-[10px] pb-[4px]'>
  <LinkedInIcon className=' w-[17px] h-[17px] sm:w-[20px] sm:h-[20px] text-blue-500'/>
  </a>
  </p>
</div>  
        </div>
      </footer>
   
  )
}

export default Footer