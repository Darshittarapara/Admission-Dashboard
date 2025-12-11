import React from 'react'
import { Paper } from '@mui/material';

const CustomPaper = ({ children, onClick }: { children: React.ReactNode, onClick?: () => void }) => {
  return (
    <Paper component={'div'} onClick={() => {
      if (onClick) {
        onClick()
      }
    }} className='cursor-pointer rounded-2xl' elevation={8} sx={{ padding: "10px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", textAlign: 'center', gap: '10px' }}>
      {children}
    </Paper>
  )
}

export default CustomPaper