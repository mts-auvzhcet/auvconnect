"use client"
import * as React from "react"
import { TrendingUp } from "lucide-react"
import Link from "next/link"
import { Label, Pie, PieChart } from "recharts"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
    { money: "contributions", value: 68044, fill: "white" }, // fill black color
    { money: "remaining", value: 631956, fill: "gray" },
]

const chartConfig = {
    visitors: {
        label: "Visitors",
    },
    contributions: {
        label: "Contributions",
        color: "hsl(var(--chart-1))",
    },
    remaining: {
        label: "Remaining",
        color: "hsl(var(--chart-2))",
    },
}

function Component() {

    const totalPercentageRaised = React.useMemo(() => {
        return (chartData[0].value / (chartData[0].value + chartData[1].value)) * 100
    }, [])

    return (
        <div className='bg-black pt-[20px]'>
            <div className='sm:w-[90vw] w-[100vw] mx-auto'>
                {/* heading and video */}
                <div className='w-[100%]'>
                    <div className='w-[100%] flex flex-col justify-center items-center font-poppins font-medium pt-[70px]'>
                        <div className='text-primary mx-auto text-center text-[12vw] md:text-[6vw] '>
                            SAUVC 2025
                        </div>
                        <div className='text-gray-400 text-[5vw] md:text-[1.6vw] w-[70%] text-center mx-auto font-light'>
                            Help us reach the Singapore Autonomous Underwater Vehicle Challenge 2025
                        </div>
                        {/* <div> */}
                            <Card className="flex flex-col bg-black border-none shadow-none text-white">
                                <CardHeader className="items-center pb-0">
                                    <CardTitle>
                                        {/* button  */}
                                        <Button className="bg-primary text-white">
                                            <Link href="https://milaap.org/fundraisers/support-us-to-participate-in-singapore-auv-challenge-2025"
                                                target="_blank"
                                                className="text-white"
                                            >Donate Now</Link>
                                        </Button>
                                    </CardTitle>
                                    <CardDescription>Help us reach the target by April 2025</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1 pb-0">
                                    <ChartContainer
                                        config={chartConfig}
                                        className="mx-auto aspect-square max-h-[250px]"
                                    >
                                        <PieChart>
                                            <ChartTooltip
                                                cursor={false}
                                                content={<ChartTooltipContent hideLabel />}
                                            />
                                            <Pie
                                                data={chartData}
                                                dataKey="value"
                                                nameKey="money"
                                                innerRadius={60}
                                                strokeWidth={5}
                                            >
                                                <Label
                                                    content={({ viewBox }) => {
                                                        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                                            return (
                                                                <text
                                                                    x={viewBox.cx}
                                                                    y={viewBox.cy}
                                                                    textAnchor="middle"
                                                                    dominantBaseline="middle"
                                                                >
                                                                    <tspan
                                                                        x={viewBox.cx}
                                                                        y={viewBox.cy}
                                                                        className="fill-white text-3xl font-bold"
                                                                    >
                                                                        {totalPercentageRaised.toFixed(2)}%
                                                                    </tspan>
                                                                    <tspan
                                                                        x={viewBox.cx}
                                                                        y={(viewBox.cy || 0) + 24}
                                                                        className="fill-muted-foreground"
                                                                    >
                                                                        Raised
                                                                    </tspan>
                                                                </text>
                                                            )
                                                        }
                                                    }}
                                                />
                                            </Pie>
                                        </PieChart>
                                    </ChartContainer>
                                </CardContent>
                                <CardFooter className="flex-col gap-2 text-sm">
                                    <div className="flex items-center gap-2 font-medium leading-none">
                                        Raised ₹68,000 of ₹7,00,000 <TrendingUp className="h-4 w-4" />
                                    </div>
                                    <div className="leading-none text-muted-foreground">
                                        Showing total contributions for the last 2 months
                                    </div>
                                </CardFooter>
                            </Card>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component