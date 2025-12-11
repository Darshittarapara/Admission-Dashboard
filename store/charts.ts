/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { create } from 'zustand';

type ProgramChartData = {
    _id: string;
    total: number;
    createdAt: string;
}
interface InitState {
    isProgramChartLoading: boolean
    getProgramCharData: () => Promise<void>;
    programChart: ProgramChartData[];


}
export const useCharts = create<InitState>((set) => ({
    isProgramChartLoading: true,
    programChart: [],
    getProgramCharData: async () => {
        set({ isProgramChartLoading: true })
        try {
            const response = await axios.get(`/api/applicants-by-program`);
            set({ programChart: response.data.data })
        } catch (error) {
            console.error(error)
        } finally {
            set({ isProgramChartLoading: false })

        }
    },
   
}))