import CountChart from '@/components/charts/CountChart'
import UserCard from '@/components/UserCard'
import Image from 'next/image'
import React from 'react'

const adminPage = () => {
  return (
    <div className='flex flex-col md:flex-row p-4'>
      {/* LEFT */}
      <div className='flex flex-col gap-8 md:w-2/3'>
        {/* USER CARDS */}
        <div className='flex gap-3 flex-wrap'>
            <UserCard type="students"/>
            <UserCard type="teachers"/>
            <UserCard type="parents"/>
            <UserCard type="staffs"/>
        </div>

        {/* MIDDLE CHARTS */}
        <div className='flex flex-col lg:flex-row'>
          {/* COUNT CHART */}
            <CountChart/>
          {/* ATTENDANCE CHART */}
          <div className='w-2/3'>
            right
          </div>
        </div>

        {/* BOTTOM CHARTS */}
        <div>

        </div>
      </div>

      

      {/* RIGHT */}
      <div className='md:w-1/3 bg-blue-500'>
          right
      </div>
    </div>
  )
}

export default adminPage
