"use client"
import React from 'react'; 
import { Card,Calendar, theme } from 'antd';
import type { CalendarProps } from 'antd';
import type { Dayjs } from 'dayjs';
import "../style/calender.css";

import { SlArrowLeftCircle } from "react-icons/sl";
import { FaRegClock } from "react-icons/fa";
import { BsCameraVideo } from "react-icons/bs";

export default function calender() {

    const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
        console.log(value.format('YYYY-MM-DD'), mode);
      };
      
      
        const { token } = theme.useToken();
      
        const wrapperStyle: React.CSSProperties = {
          width: 500,
          border: `1px solid ${token.colorBorderSecondary}`,
          borderRadius: token.borderRadiusLG,
        };
    return (
        <>
         <Card size="small" style={{ height: '600px' , margin:"auto" }} className="basic-layout">
           <div className="main-content">
            <div>
                <SlArrowLeftCircle style={{fontSize:"40px" , color:"blue" , cursor:"pointer" }}/> 
                <p style={{fontSize:"15px" , fontWeight:300}}>Harshit Shrivastava</p>
                <p style={{fontSize:"28px" , fontWeight:300}}>30 Minute Meeting</p>
                <p style={{fontSize:"12px" , fontWeight:300 }}><FaRegClock style={{fontSize:"12px" , fontWeight:300}}/>  30 min</p>
                <p style={{fontSize:"14px" , fontWeight:300}}><BsCameraVideo />  Web conferencing details provide upon confirmation</p>
                </div>
            <div>
            <h2>Select date and time</h2>
            <div style={wrapperStyle}><Calendar fullscreen={false} onPanelChange={onPanelChange} /></div>
            <div>
                <h3>Time Zone</h3>
                <p>Indian Standard Time (4:55)</p>
            </div>
           </div>
           </div>
        </Card>
        </>
    )
      }