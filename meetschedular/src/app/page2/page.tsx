"use client"
import React, { useContext } from 'react'; 
import { Card } from 'antd';
import "../style/page2.css";
import { useRouter } from "next/navigation"
import { SlArrowLeftCircle } from "react-icons/sl";
import { FaRegClock } from "react-icons/fa";
import { BsCameraVideo } from "react-icons/bs";
import Calender from '../_calender/page';
import UserContext from '@/context/UserContext';
 

export default function Page2() {

  const router = useRouter()
  const {user} = useContext(UserContext)
  
  // My date component
  const handleDateSelected = (date: { format: (arg0: string) => any; }) => {
    console.log("Date selected in parent component:", date.format('YYYY-MM-DD'));
    
  };

  function redirectingathome () {
   router.push("/")
  }   
    return (
        <>
         <Card size="small"  className='card-layout'>
           <SlArrowLeftCircle onClick={redirectingathome} style={{fontSize:"40px" , color:"blue" , cursor:"pointer" }}/> 
           <div className="main-content">
           
            <div className='content-part'>
               
                <h5 style={{fontSize:"15px" , fontWeight:300}}>Harshit Shrivastava</h5>
                <h5 style={{fontSize:"28px" , fontWeight:500 }} >{user?.duration} Minute Meeting</h5>
                <h5 style={{fontSize:"12px" , fontWeight:300 }}><FaRegClock style={{fontSize:"12px" , fontWeight:300}}/>  {user?.duration} min</h5>
                <h5 style={{fontSize:"14px" , fontWeight:300}}><BsCameraVideo />  Web conferencing details provide upon confirmation</h5>
            </div>
            <div className='other-part'>
            <Calender  onDateSelected={handleDateSelected}/>


           </div>
           </div>

           
        </Card>
        </>
    )
      }