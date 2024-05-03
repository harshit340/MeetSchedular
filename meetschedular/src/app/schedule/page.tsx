"use client"
import React from 'react'; 
import { Card ,Form,Input,Button} from 'antd';
import { SlArrowLeftCircle } from "react-icons/sl";
import { FaRegClock } from "react-icons/fa";
import { BsCameraVideo } from "react-icons/bs";
import "../style/calender.css";


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
               <p style={{fontSize:"14px" , fontWeight:300}}><BsCameraVideo />  Web conferencing details provide upon confirmation</p>
               </div>
           <div>
            <p style={{fontWeight:"400", fontSize:"20px"}}>Enter Details</p>
            <div>
            <Form.Item label="Input" name="Input" rules={[{ required: true, message: 'Please input!' }]}>
      <Input />
    </Form.Item>
            </div>
            <div>
            <Form.Item label="Email" name="Email" rules={[{ required: true, message: 'Please input!' }]}>
      <Input />
    </Form.Item>
            </div>
           <Button type="dashed">Dashed Button</Button>
            <div>
                <p>Please share anything that will help prepare for our meeting</p>
                <Form.Item
      label="TextArea"
      name="TextArea"
      rules={[{ required: true, message: 'Please input!' }]}
    >
      <Input.TextArea />
    </Form.Item>
            </div> 
            
           </div>
          </div>
       </Card>
       </>
    )
   
}
