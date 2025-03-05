'use client'

import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TeamCard from '@/components/custom/TeamCard'
import leadsData from '@/components/custom/leadsData'



gsap.registerPlugin(ScrollTrigger)

const page = () => {

	return (
		<div className='bg-white w-[95%] mx-auto mt-[7vh] font-poppins '>

			<div className='w-[60%] mx-auto flex flex-col'>
				<div className=' w-[100%] flex flex-col gap-6'>
					<div className='text-zinc-600 font-thin text-[30px] sm:text-[60px] text-center'>
						Coming onboard means joining the family
					</div>
					<div className='font-apple tracking-widest font-thin flex flex-col gap-4 text-center'>
					</div>
				</div>

				<div className='font-poppins w-[100%] mx-auto text-center flex flex-col-reverse text-zinc-500 gap-4'>
					<div className='  font-normal w-[80%] font-wide text-[30px] sm:text-[60px] mx-auto text-center'>
						The Team
					</div>
					<div className='font-apple tracking-widest flex flex-col gap-4 font-light'>
						MEET
					</div>
				</div>

			</div>
			{/* <div className='flex flex-wrap mx-auto bg-white justify-between mt-[20px]'>
				<TeamCard photo="/Team/Ammar.jpeg" name="Mohd. Ammar" position="Chairperson" />
				<TeamCard photo="/Team/Falak.png" name="Falak Fatima" position="Mentor" />
				<TeamCard photo="/Team/Anas.png" name="Mohd. Anas" position="Treasurer" />
				<TeamCard photo="/Team/Haadi.png" name="Haadi Akhtar" position="R&D Lead" />
				<TeamCard photo="/Team/yusuf.png" name="Yusuf hasan" position="Computer Lead " />
				<TeamCard photo="/Team/priyanshu.jpeg" name="Priyanshu Singh" position="Web Developer" />
			</div> */}

			<div className='flex flex-col sm:flex-row flex-wrap mx-[10px] sm:mx-[25px] bg-white justify-between mt-[20px]'>

				<div className='w-full'>
					{/* <h2 className='text-xl font-bold mb-4 text-center'>Leads</h2> */}
					<div className='flex flex-col sm:flex-row flex-wrap justify-around'>
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
				{/* <div className='w-full'>
					<h2 className='text-xl font-bold mb-4'>Computer Team Team</h2>
					<div className='flex flex-col sm:flex-row flex-wrap justify-between'>
						{compTeamData.map((member, index) => (
							<TeamCard
								key={index}
								photo={member.photo}
								name={member.name}
								position={member.position}
							/>
						))}
					</div>
				</div> */}
			</div>
		</div>

	)
}

export default page