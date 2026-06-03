'use client'

import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TeamCard from '@/components/custom/TeamCard'
import leadsData from '@/components/custom/leadsData'
import facultyData from '@/components/custom/facultyData'

gsap.registerPlugin(ScrollTrigger)

const LeadershipPage = () => {
	// Separate the councilor from other advisors
	const facultyCouncilor = facultyData.find(member => member.position === "Faculty Councilor");
	const facultyAdvisors = facultyData.filter(member => member.position !== "Faculty Councilor");

	return (
		<div className='bg-white w-[95%] mx-auto mt-[7vh] font-poppins '>

			<div className='w-[80%] sm:w-[60%] mx-auto flex flex-col pt-12 pb-8'>
				<div className=' w-[100%] flex flex-col gap-4 sm:gap-6'>
					<div className='text-zinc-600 font-thin text-[28px] sm:text-[50px] md:text-[60px] text-center leading-tight'>
						Coming onboard means joining the family
					</div>
				</div>

				<div className='font-poppins w-[100%] mx-auto text-center flex flex-col-reverse text-zinc-500 gap-2 sm:gap-4 mt-6'>
					<div className=' font-normal w-[80%] font-wide text-[28px] sm:text-[50px] md:text-[60px] mx-auto text-center'>
						Leadership
					</div>
					<div className='font-apple tracking-widest flex flex-col gap-2 font-light text-[12px] sm:text-[14px]'>
						MEET OUR
					</div>
				</div>
			</div>

			<div className='flex flex-col mx-[10px] sm:mx-[25px] bg-white gap-16 mt-[20px] pb-16'>
				
				{/* Faculty Section Container (Side-by-side on desktop, stacked on mobile) */}
				<div className='flex flex-col md:flex-row gap-12 md:gap-16 w-full items-start justify-center'>
					
					{/* Faculty Councilor Section */}
					{facultyCouncilor && (
						<div className='w-full md:w-auto flex flex-col items-center md:sticky md:top-[12vh]'>
							<h2 className='text-center text-zinc-500 font-poppins tracking-[3px] text-[18px] sm:text-[22px] font-medium border-b border-zinc-200 pb-2 mb-8 w-fit px-8 whitespace-nowrap'>
								FACULTY COUNCILOR
							</h2>
							<div className='flex justify-center w-full'>
								<TeamCard
									photo={facultyCouncilor.photo}
									name={facultyCouncilor.name}
									position={facultyCouncilor.position}
									department={facultyCouncilor.department}
								/>
							</div>
						</div>
					)}

					{/* Faculty Advisors Section */}
					<div className='w-full md:flex-1 flex flex-col items-center'>
						<h2 className='text-center text-zinc-500 font-poppins tracking-[3px] text-[18px] sm:text-[22px] font-medium border-b border-zinc-200 pb-2 mb-8 w-fit px-8'>
							FACULTY ADVISORS / ORGANISING SECRETARIES
						</h2>
						<div className='flex flex-wrap justify-center gap-6 sm:gap-8 w-full'>
							{facultyAdvisors.map((member, index) => (
								<TeamCard
									key={index}
									photo={member.photo}
									name={member.name}
									position={member.position}
									department={member.department}
								/>
							))}
						</div>
					</div>

				</div>

				{/* Student Leads Section */}
				<div className='w-full flex flex-col items-center'>
					<h2 className='text-center text-zinc-500 font-poppins tracking-[3px] text-[18px] sm:text-[22px] font-medium border-b border-zinc-200 pb-2 mb-8 w-fit px-8'>
						STUDENT LEADS
					</h2>
					<div className='flex flex-wrap justify-center gap-6 sm:gap-8 w-full'>
						{leadsData.map((member, index) => (
							<TeamCard
								key={index}
								photo={member.photo}
								name={member.name}
								position={member.position}
							/>
						))}
					</div>
				</div>

			</div>
		</div>
	)
}

export default LeadershipPage
