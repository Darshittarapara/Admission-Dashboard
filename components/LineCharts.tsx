import { useCharts } from '@/store/charts'
import { Box, CircularProgress, Paper, Typography } from '@mui/material'
import React, { useMemo, useState } from 'react'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import CustomPaper from './Paper'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs'
const LineCharts = () => {
    const [startDate, setStartDate] = useState<Dayjs | null>(() => dayjs().set('years', dayjs().get('years') - 1))
    const [endDate, setEndDate] = useState<Dayjs | null>(dayjs())
    const { programChart, isProgramChartLoading } = useCharts()


    const filterLineData = useMemo(() => {
        return programChart.filter((program) => {
            const createdDate = dayjs(program.createdAt);
            return  createdDate.isSame(startDate, 'day') || createdDate.isSame(endDate, 'day') ||  (createdDate.isAfter(startDate) && createdDate.isBefore(endDate))
        })
    }, [startDate, endDate, programChart])

    if (isProgramChartLoading) {
        return <CustomPaper>
            <CircularProgress />
        </CustomPaper>
    }

    return (
        <Paper elevation={10} className='flex flex-col gap-10 p-4'>
            <Box component={'div'} className='flex gap-5'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label='From date'
                        value={startDate}
                        maxDate={dayjs(endDate)}
                        onChange={(date) => {
                            setStartDate(date)
                        }}
                        slotProps={{
                            textField: {
                                size: 'small'
                            }
                        }}
                    />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label='To date'
                        value={endDate}
                        minDate={dayjs(startDate)}
                        onChange={(date) => {
                            setEndDate(date)
                        }}
                         slotProps={{
                            textField: {
                                size: 'small'
                            }
                        }}
                    />
                </LocalizationProvider>
            </Box>
            {filterLineData.length == 0 ? <Typography>No data found</Typography> : <LineChart
                style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
                responsive
                data={filterLineData}
                margin={{
                    top: 5,
                    right: 0,
                    left: 0,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="_id" />
                <YAxis width="auto" />
                <Tooltip />
        
                <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>}

        </Paper>
    )
}

export default LineCharts