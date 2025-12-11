/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { create } from 'zustand';
export type ProgramType = {
    program: string;
    status?: string;
    createdAt: any;
    _id: any
}

interface InitState {
    isOpen:boolean;
    setIsOpen: (isOpen: boolean) => void
    verifiedList: ProgramType[]
    
    rejectList: ProgramType[],
    isRejectLoading: boolean;
    isVerifedLoading: boolean;
    getRejectedApplicants: () => Promise<void>;
    applicantsDetails: ProgramType[];
    getApplicantsDetails: (data:ProgramType[]) => void
    getVerifiedApplicants: () => Promise<void>;

}
export const useApplicants = create<InitState>((set) => ({
    verifiedList: [],
    isVerifedLoading: true,
    isOpen: false,
    isRejectLoading: true,
    rejectList: [],
    applicantsDetails: [],
    setIsOpen: (isOpen) => {
        set({isOpen})
    },
    getApplicantsDetails: (data) => {
        set({applicantsDetails: data})
    },
    getRejectedApplicants: async () => {
        set({ isRejectLoading: true })
        try {
            const response = await axios.get(`/api/admissions?status=Rejected`);
            set({ rejectList: response.data.data })

        } catch (error) {
            console.error(error)
        } finally {
            set({ isRejectLoading: false })

        }
    },
    getVerifiedApplicants: async () => {
        set({ isVerifedLoading: true })
        try {
            const response = await axios.get(`/api/admissions?status=Verified`);
            set({ verifiedList: response.data.data })


        } catch (error) {
            console.error(error)
        } finally {
            set({ isVerifedLoading: false })

        }
    }



}))