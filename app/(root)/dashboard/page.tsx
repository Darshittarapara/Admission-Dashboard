import ApplicantsCard from '@/components/ApplicantsCard'
import DataCharts from '@/components/Charts'
import React from 'react'

const Dashboard =async () => {
  return (
    <div className='grid grid-col-1 md:grid-cols-3 w-full   max-w-full  rounded-4xl gap-6'>
        <ApplicantsCard />
        <DataCharts/>
    </div>
  )
}

export default Dashboard