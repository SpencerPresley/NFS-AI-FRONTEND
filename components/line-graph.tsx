'use client'
import { CandlestickChart } from 'lucide-react';
import {
    LineChart,
    ResponsiveContainer,
    XAxis,
    YAxis,
    Bar,
    CartesianGrid,
    Line,
} from 'recharts'

export type LineChartProps = {
    data: { month: string; total: number }[]
}

export default function LineGraph({ data }: LineChartProps) {
    return (
        <div className='shadow w-full flex flex-col gap-3 rounded-[6px] p-5 bg-slate-100/90'>
            <section className='flex justify-between gap-2 pb-2'>
                <p>Token Cost Over Time</p>
                <CandlestickChart className='h-4 w-4'/>
            </section>
            <ResponsiveContainer width={"100%"} height={350}>
                <LineChart data={data} margin={{ top: 0, left: -15, right: 10, bottom: 0}}>
                    <Line type='monotone' dataKey='total' stroke='black'/>
                    <XAxis 
                        dataKey={"month"}
                        tickLine={false}
                        axisLine={false}
                        fontSize={13}
                        padding={{ left: 10, right: 10}}
                    />
                    <YAxis 
                        dataKey={"total"}
                        tickLine={false}
                        axisLine={false}
                        fontSize={13}
                        allowDecimals={false}
                        padding={{ top: 10, bottom: 10}}
                        tickFormatter={(value) => `$${value}`}
                    />
                    <CartesianGrid strokeDasharray="3 3" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}