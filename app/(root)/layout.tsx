'use client'
import {  IconButton } from "@mui/material";
import RefreshIcon from '@mui/icons-material/Refresh';
import { useApplicants } from "@/store/Applicants";
import { useCharts } from "@/store/charts";
export default  function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const {getRejectedApplicants, getVerifiedApplicants} = useApplicants();
    const {getProgramCharData} = useCharts()

    const refreshData = () => {
     getRejectedApplicants();
     getVerifiedApplicants()
     getProgramCharData()
    }
   
    return (
        <main className="flex px-2 md:px-10 py-5  max-w-8xl flex-col   h-screen bg-blue-50 dark:bg-black sm:items-start">
            <div className="flex justify-between w-full">
                <h4 className="text-bold text-2xl">Dashboard</h4>
                <IconButton onClick={refreshData}>
                    <RefreshIcon />
                </IconButton>

            </div>
            {children}
        </main>
    );
}
