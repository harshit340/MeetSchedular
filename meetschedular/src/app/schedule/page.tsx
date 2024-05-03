"use client"
import React from 'react'; 
import { Card ,Form,Input,Button} from 'antd';
import { SlArrowLeftCircle } from "react-icons/sl";
import { FaRegClock } from "react-icons/fa";
import { BsCameraVideo } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import "../style/schedule.css";


export default function schedule(){
    return (
        <>
        <Card size="small" style={{ height: '600px' , margin:"auto" }} className="basic-layout">
          <div className="main-content">
           <SlArrowLeftCircle style={{fontSize:"40px" , color:"blue" , cursor:"pointer" }}/> 
           <div className='content-part'>
              
               <p style={{fontSize:"15px" , fontWeight:300}}>Harshit Shrivastava</p>
               <p style={{fontSize:"28px" , fontWeight:500 }}>30 Minute Meeting</p>
               <p style={{fontSize:"12px" , fontWeight:300 }}><FaRegClock style={{fontSize:"12px" , fontWeight:300}}/>  30 min</p>
               <p style={{fontSize:"14px" , fontWeight:300}}><BsCameraVideo /> Web conferencing details provide upon confirmation</p>
               <p style={{fontSize:"15px" , fontWeight:300}}><BsCameraVideo /> time</p>
               <p style={{fontSize:"15px" , fontWeight:300}}><TfiWorld /> Indian Standard Time (4:55)</p>
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
                <p>Please share anything that will help prepare for our meeting</p>    
             <Input.TextArea />
            </div>
            <p style={{padding:"10px"}}>By Proceeding. you confirm that you have read and agreed to <span style={{color:'blue'}}>Terms of Use</span> and <span style={{color:'blue'}}>Privacy Notice</span></p> 
            <Button type="primary" >Schedule Event</Button>
            </Form>
           </div>

           
          </div>
       </Card>
       </>
    )
   
}
