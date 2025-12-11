'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect } from 'react'
import CustomPaper from './Paper';
import { ProgramType, useApplicants } from '@/store/Applicants';
import { CircularProgress } from '@mui/material';
import Details from './Details';
import axios from 'axios';

const ApplicantsCard = () => {
   const {setIsOpen, getApplicantsDetails, getRejectedApplicants,verifiedList, rejectList, getVerifiedApplicants, isRejectLoading, isVerifedLoading } = useApplicants();
   const loadData = useCallback(async () => {
      try {
       const res=  await axios.get(`api/applicants-by-program`);
       console.log(res,'res')
         getRejectedApplicants()
         getVerifiedApplicants()
      } catch (error) {
         console.error(error)
      }
   }, [getRejectedApplicants, getVerifiedApplicants])

   useEffect(() => {
      loadData()
   }, [loadData])

   const handlerDetails = (data:ProgramType[]) => {
      setIsOpen(true);
getApplicantsDetails(data)
   }
   return (
      <>
         <CustomPaper >
            {isRejectLoading || isVerifedLoading ? <CircularProgress /> : <>
               <h2>Total Applicant</h2>
               <span>{rejectList.length + verifiedList.length}</span>
            </>}
         </CustomPaper>
         <CustomPaper onClick = {() => handlerDetails(verifiedList)}>
            {isVerifedLoading ? <CircularProgress /> : <>
               <h2>Verified Applicant</h2>
               <span>{verifiedList.length}</span>
            </>}
         </CustomPaper>
         <CustomPaper onClick = {() => handlerDetails(rejectList)}>
            {isRejectLoading ? <CircularProgress /> : <>
               <h2>Rejected Applicant</h2>
               <span>{rejectList.length}</span>
            </>
            }

         </CustomPaper>
<Details/>
      </>
   )
}

export default ApplicantsCard