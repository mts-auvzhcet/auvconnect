"use client"
import React from 'react'
import Image from 'next/image'

const benefactors = [
    {
        id: 1,
        name: "Aligarh Muslim University",
        image: "/benefactors/amu.png",
    },
    {
        id: 2,
        name: "AMU Old Boys Association",
        image: "/benefactors/amuoldboysassociation.png",
    },
]

const sponsors = [
    {
        id: 1,
        name: "Designing Printing Innovation",
        image: "/benefactors/depi.png",
    },
    {
        id: 2,
        name: "KTM",
        image: "/benefactors/KTM logo.png",
    },
    {
        id: 3,
        name: "Shiva Group",
        image: "/benefactors/SG.png",
    },
    {
        id: 4,
        name: "Triumph",
        image: "/benefactors/TRIUMPH.png",
    },
]

const SupporterCard = ({ item }) => (
    <div className="group rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition-all duration-300 overflow-hidden">
        <div className="p-6 h-44 flex items-center justify-center bg-zinc-800/30">
            <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-300">
                <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    style={{ objectFit: 'contain' }}
                />
            </div>
        </div>
        <div className="py-4 px-4 text-center border-t border-zinc-800">
            <p className="text-sm font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors duration-300">
                {item.name}
            </p>
        </div>
    </div>
)

const Section = ({ title, items }) => (
    <div className="w-full mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10 font-poppins">
            {title}
        </h2>
        <div className={`grid gap-6 px-4 md:px-8 mx-auto max-w-4xl ${items.length <= 2 ? 'grid-cols-1 sm:grid-cols-2 max-w-lg' : 'grid-cols-2 lg:grid-cols-4'}`}>
            {items.map((item) => (
                <SupporterCard key={item.id} item={item} />
            ))}
        </div>
    </div>
)

export default function BenefactorsPage() {
    return (
        <div className="min-h-screen bg-black pt-[100px] pb-20">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center mb-16 px-4">
                    <h1 className="text-5xl md:text-7xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mb-6 font-poppins">
                        Our Supporters
                    </h1>
                    <p className="text-zinc-500 text-lg md:text-xl text-center max-w-2xl">
                        We are grateful for the generous support from our benefactors and sponsors who make our innovations possible.
                    </p>
                </div>

                <Section title="Benefactors" items={benefactors} />
                <Section title="Sponsors" items={sponsors} />
            </div>
        </div>
    )
}
