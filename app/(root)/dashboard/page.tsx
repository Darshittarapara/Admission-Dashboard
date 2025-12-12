import ApplicantsCard from '@/components/ApplicantsCard'
import DataCharts from '@/components/Charts'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Dashboard",
  description: "University admission dashboard",
};
const Dashboard =async () => {
  return (
    <div className='grid grid-col-1 md:grid-cols-3  w-full   max-w-full  rounded-4xl gap-4'>
        <ApplicantsCard />
        <DataCharts/>
    </div>
  )
}

export default Dashboard