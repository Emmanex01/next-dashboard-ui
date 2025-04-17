'use client'
import Image from 'next/image'
import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AttendanceChart = () => {
    const data = [
        {
          name: 'Mon',
          present: 50,
          absent: 25,
        },
        {
          name: 'Tues',
          present: 75,
          absent: 50,
        },
        {
          name: 'Wed',
          present: 90,
          absent: 50,
        },
        {
          name: 'Thurs',
          present: 75,
          absent: 50,
        },
        {
          name: 'Fri',
          present: 50,
          absent: 25,
        },
      ];


  return (
    <div className='w-full lg:w-2/3 rounded-2xl bg-white p-4'>
        {/* TITLE */}
        <div className='flex justify-between items-center'>
            <span className='font-semibold'>Attendance</span>
            <Image src="/moreDark.png" alt='moreDark' height={20} width={20}/>
        </div>
        <div className='w-full h-96 mt-4'>
            <ResponsiveContainer>
                <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 20,
                    right: 0,
                    left: 5,
                    bottom: 20,
                }}
                >
                    <Legend verticalAlign="top" align='left' height={36} iconType="circle" iconSize={10} />
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="present" fill="#8884d8" barSize={20} radius={[50, 50, 0, 0]} activeBar={<Rectangle fill="pink" stroke="blue" />} />
                    <Bar dataKey="absent" fill="#82ca9d" barSize={20} radius={[50, 50, 0, 0]} activeBar={<Rectangle fill="gold" stroke="purple" />} />
                </BarChart>
            </ResponsiveContainer>
        </div>
            
    </div>
  )
}

export default AttendanceChart
