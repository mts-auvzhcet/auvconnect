'use client'

import React from 'react';
import Image from 'next/image';

const TeamCard = ({ photo, name, position, department }) => {
  const isRemote = photo && (photo.startsWith('http://') || photo.startsWith('https://'));

  return (
    <div className='group flex flex-col gap-2 font-poppins w-[140px] sm:w-[170px] md:w-[190px] mb-8 transition-all duration-300 text-center'>
      {/* Image container with overflow hidden and hover zoom */}
      <div className='overflow-hidden rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300 aspect-square w-full'>
        {isRemote ? (
          <img 
            src={photo} 
            alt={name} 
            className='object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out' 
          />
        ) : (
          <Image 
            src={photo} 
            alt={name} 
            height={200} 
            width={200} 
            className='object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out' 
          />
        )}
      </div>

      {/* Info container */}
      <div className='flex flex-col gap-1 px-1'>
        <div className='tracking-wider font-semibold text-[13px] sm:text-[14px] md:text-[15px] text-zinc-800 transition-colors duration-300 group-hover:text-zinc-950 mt-1 leading-snug'>
          {name}
        </div>
        <div className='font-light text-[11px] sm:text-[12px] md:text-[13px] tracking-wide text-zinc-500 leading-snug'>
          {position}
        </div>
        {department && (
          <div className='font-normal text-[9px] sm:text-[10px] md:text-[11px] text-zinc-400 tracking-normal leading-tight mt-0.5'>
            {department}
          </div>
        )}
      </div>
    </div>
  )
}

export default TeamCard;
