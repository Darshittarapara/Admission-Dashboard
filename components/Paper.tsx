import React from 'react'
import { Paper } from '@mui/material';

const CustomPaper = ({ children, onClick }: { children: React.ReactNode, onClick?: () => void }) => {
  return (
    <Paper component={'div'} onClick={() => {
      if (onClick) {
        onClick()
      }
    }} className='cursor-pointer rounded-2xl' elevation={8}   sx={{
        padding: { xs: "8px", sm: "10px", md: "14px" },
        gap: { xs: "6px", sm: "10px" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        width: { xs: "100%", sm: "auto" },
      }}>
      {children}
    </Paper>
  )
}

export default CustomPaper