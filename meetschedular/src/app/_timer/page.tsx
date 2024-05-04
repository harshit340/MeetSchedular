import { Button } from 'antd';
import React from 'react';
import { useRouter } from "next/navigation"
import { MdVisibility } from 'react-icons/md';

export default function Timer({selectedDate}) {
  const [timeSlots,setTimeSlots]=React.useState([]);
  
  React.useEffect(() => {
    if (selectedDate) {
      createTimeSlot(30); // You might pass the interval dynamically or keep it fixed
    }
  }, [selectedDate]);
  const createTimeSlot=(interval:number)=>{
    const startTime = 8 * 60; // 8 AM in minutes
    const endTime = 22 * 60; // 10 PM in minutes
    const totalSlots = (endTime - startTime) / interval;
    const slots = Array.from({ length: totalSlots }, (_, i) => {
  const totalMinutes = startTime + i * interval;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const formattedHours = hours > 12 ? hours - 12 : hours; // Convert to 12-hour format
  const period = hours >= 12 ? 'PM' : 'AM';
  return `${String(formattedHours).padStart(2, '0')}:${String(minutes).padStart(2, '0')} ${period}`;
});

setTimeSlots(slots); 
}
const router = useRouter()
function handleSubmit() {
  router.push("/schedule")
   
}


  return (
    
    <div style={{padding:"20px"}}>
   <h4 style={{margin:"20px" , paddingLeft:"23px"}}>{selectedDate ? selectedDate.format('YYYY-MM-DD') : 'No date selected'}</h4>
   <div style={{ display:"flex" , flexDirection:"column" ,maxHeight:'430px' , overflow:"auto"}} >
                    {timeSlots?.map((time,index)=>(
                        <Button  onClick={handleSubmit} key={index} style={{margin:"10px" , padding:"30px 40px 30px 40px"  }}>{time}</Button>
                    ))}
                </div>

    </div>
   
  )
}
