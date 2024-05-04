"use client"
import React, { useContext } from 'react'; 
import { Card ,Form,Input,Button} from 'antd';
import { SlArrowLeftCircle } from "react-icons/sl";
import { FaRegClock } from "react-icons/fa";
import { BsCameraVideo } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import "../style/schedule.css";

import { useRouter } from 'next/navigation';
import UserContext from '@/context/UserContext';


export default function Schedule(){
  const router = useRouter()
  const {user} = useContext(UserContext)
  function redirectingathome () {
    router.push("/page2")
   }
    return (
        <>
        <Card size="small" style={{ height: '600px' , margin:"auto" }} className="basic-layout">
          <div className="main-content">
          <SlArrowLeftCircle onClick={redirectingathome} style={{fontSize:"40px" , color:"blue" , cursor:"pointer" }}/> 
           <div className='content-part'>
              
               <h5 style={{fontSize:"15px" , fontWeight:300}}>Harshit Shrivastava</h5>
               <h5 style={{fontSize:"28px" , fontWeight:500 }}>{user?.duration} Minute Meeting</h5>
               <h5 style={{fontSize:"12px" , fontWeight:300 }}><FaRegClock style={{fontSize:"12px" , fontWeight:300}}/>  {user?.duration} min</h5>
               <h5 style={{fontSize:"14px" , fontWeight:300}}><BsCameraVideo /> Web conferencing details provide upon confirmation</h5>
               <h5 style={{fontSize:"15px" , fontWeight:300}}><BsCameraVideo />time</h5>
               <h5 style={{fontSize:"15px" , fontWeight:300}}><TfiWorld /> Indian Standard Time (4:55)</h5>
               </div>





           <div className='user-info'>
            <p style={{fontWeight:"600", fontSize:"20px" ,padding:"10px"}}>Enter Details</p>
            <Form name="trigger" style={{ maxWidth: 600 }} layout="vertical" autoComplete="off">
            <div style={{padding:"10px"}}>
            <Form.Item  name="Name" label="Name" rules={[{ required: true, message: 'Please input!' }]}>
      <Input />
    </Form.Item>
            </div>
            <div style={{padding:"10px"}}>
            <Form.Item label="Email" name="Email" rules={[{ required: true, message: 'Please input!' }]}>
      <Input />
    </Form.Item>
            </div>
           <Button type="dashed">Add Guests</Button>
            <div style={{padding:"10px"}}>
                <h5>Please share anything that will help prepare for our meeting</h5>    
             <Input.TextArea />
            </div>
            <h5 style={{padding:"10px"}}>By Proceeding. you confirm that you have read and agreed to <span style={{color:'blue'}}>Terms of Use</span> and <span style={{color:'blue'}}>Privacy Notice</span></h5> 
            <Button type="primary" >Schedule Event</Button>
            </Form>
           </div>

           
          </div>
       </Card>
       </>
    )
   
}
