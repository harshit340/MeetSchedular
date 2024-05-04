"use client"
import React from 'react'; 
import {Calendar, Flex, theme } from 'antd';
import type { CalendarProps } from 'antd';
import type { Dayjs } from 'dayjs';
import "../style/callender.css";
import Timer from '../_timer/page';
import { useRouter } from "next/navigation"

type CalenderProps = {
  onDateSelected?: (date: Dayjs) => void; 
};

export default function Calender({ onDateSelected }: CalenderProps) {

  const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(null);
 

    const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
        console.log(value.format('YYYY-MM-DD'), mode);
      };


      const onSelect = (value: Dayjs) => {
        setSelectedDate(value);
        console.log('Selected Date: ', value.format('YYYY-MM-DD'));
        if (onDateSelected) {
          onDateSelected(value); 
        }
      };
      
      
        const { token } = theme.useToken();
      
        const wrapperStyle: React.CSSProperties = {
          width: 500,
          border: `1px solid ${token.colorBorderSecondary}`,
          borderRadius: token.borderRadiusLG,
        };
    return (
        <>  
           { selectedDate?<>
           <div style={{display:"flex"}}>
           <div className='calender-part'>
            <h2 style={{padding:"20px"}}>Select date and time</h2>
            <div style={wrapperStyle}><Calendar fullscreen={false} onPanelChange={onPanelChange} onSelect={onSelect}/></div>
            <div style={{padding:"20px"}}>
                <h3>Time Zone</h3>
                <h5 style={{fontSize:"14px" , fontWeight:300}}>Indian Standard Time (4:55)</h5>
            </div>
           </div>
           <div>
            <Timer selectedDate={selectedDate}/>
           </div>
           </div>
           </>
           :<>
         <div className='calender-part'>
            <h2 style={{padding:"20px"}}>Select date and time</h2>
            <div style={wrapperStyle}><Calendar fullscreen={false} onPanelChange={onPanelChange} onSelect={onSelect}/></div>
            <div style={{padding:"20px"}}>
                <h3>Time Zone</h3>
                <h5 style={{fontSize:"14px" , fontWeight:300}}>Indian Standard Time (4:55)</h5>
            </div>
           </div>
           </>}
            

        </>
    )
      }