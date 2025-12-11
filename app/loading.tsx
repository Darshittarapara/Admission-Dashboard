import { CircularProgress } from '@mui/material'
import React from 'react'

const Loading = () => {
  return (
    <div className='flex w-screen h-screen items-center justify-center'>
        <CircularProgress/>
    </div>
  )
}

export default Loading