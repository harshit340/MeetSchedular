"use client"
import React from 'react'; 
import {Calendar, Flex, theme } from 'antd';
import type { CalendarProps } from 'antd';
import type { Dayjs } from 'dayjs';
import "../style/callender.css";
import Timer from '../_timer/page';


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
    
    return (
        <>  
           { selectedDate?<>
           <div className='layout-time'>
           <div className='calender-part-button'>
            <h2 >Select date and time</h2>
            <Calendar className='calender-part-style' fullscreen={false} onPanelChange={onPanelChange} onSelect={onSelect}/>
            <div >
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
            <h2 >Select date and time</h2>
           <Calendar className='calender-style' fullscreen={false} onPanelChange={onPanelChange} onSelect={onSelect}/>
            <div >
                <h3>Time Zone</h3>
                <h5 style={{fontSize:"14px" , fontWeight:300}}>Indian Standard Time (4:55)</h5>
            </div>
           </div>
           </>}
            

        </>
    )
      }