'use client';
import { useApplicants } from '@/store/Applicants';
import { Dialog, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material';
import React from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import dayjs from 'dayjs'
import CloseIcon from '@mui/icons-material/Close';
const Details = () => {
    const { applicantsDetails, isOpen, setIsOpen } = useApplicants()
    const title = applicantsDetails?.[0]?.status;
    const Columns: GridColDef[] = [
        {
            field: "program",
            headerName: "Program",
            minWidth: 200
        },
        {
            field: "createdAt",
            headerName: "Created At",
            minWidth: 200,
            renderCell(params) {
                return <span>{dayjs(params.row.createdAt).format('DD-MM-YYYY hh:mm a')}</span>
            },
        },
    ]

    const handlerClose = () => {
        setIsOpen(false)
    }
    return (
        <Dialog maxWidth='md' open={isOpen} onClose={handlerClose}>
            <DialogTitle className='flex justify-between items-center'>
                <Typography>

                    {title}
                </Typography>
                <IconButton onClick={handlerClose}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <DataGrid
                    autoHeight
                    getRowId={(row) => row._id}
                    rows={applicantsDetails}
                    disableRowSelectionOnClick
                    columns={Columns}
                />
            </DialogContent>
        </Dialog>
    )
}

export default Details