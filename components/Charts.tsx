'use client'
import { useCharts } from '@/store/charts'
import React, { useCallback, useEffect } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from 'recharts';
import CustomPaper from './Paper';
import { CircularProgress } from '@mui/material';
import LineCharts from './LineCharts';
const DataCharts = () => {
    const { getProgramCharData, programChart, isProgramChartLoading } = useCharts()
    const loadData = useCallback(async () => {
        try {

            getProgramCharData()
        } catch (error) {
            console.error(error)
        }
    }, [getProgramCharData])

    useEffect(() => {
        loadData()
    }, [loadData])

    return (
        <>
            <CustomPaper>
                {isProgramChartLoading ? <CircularProgress /> : <BarChart
                    style={{ width: '100%', maxHeight: '400px', aspectRatio: 1.618 }}
                    responsive
                    data={programChart}
                >
                    <XAxis dataKey="_id" style={{
                        fontSize: "10px"
                    }} />
                    <YAxis dataKey={'total'} />
                    <Tooltip />
                    <Legend />

                    <Bar dataKey={'total'} fill='#8884d8' xAxisId={'_id'} yAxisId={'_id'} />
                </BarChart>}
              
            </CustomPaper>
            <LineCharts/>
        </>
    )
}


export default DataCharts