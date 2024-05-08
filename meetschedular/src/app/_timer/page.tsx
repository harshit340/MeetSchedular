import { Button } from 'antd';
import React from 'react';
import moment, { duration } from 'moment'; 
import { useRouter } from "next/navigation"
import { MdVisibility } from 'react-icons/md';
import "../style/timer.css"
import UserContext from '@/context/UserContext';
interface TimerProps {
  selectedDate: moment.Moment | null; // assuming selectedDate is a moment object
}

export default function Timer({selectedDate}:TimerProps) {
  const [timeSlots,setTimeSlots]=React.useState([]);
  const {user} = React.useContext(UserContext)

  React.useEffect(() => {
    if (selectedDate && user?.duration) {
      createTimeSlot(user.duration); 
    }
  }, [selectedDate, user?.duration]);
  
  const createTimeSlot=(interval:number)=>{
    const startTime = 8 * 60; 
    const endTime = 22 * 60; 
    const totalSlots = (endTime - startTime) / interval;
    const slots:string[] = Array.from({ length: totalSlots }, (_, i) => {
  const totalMinutes = startTime + i * interval;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const formattedHours = hours > 12 ? hours - 12 : hours; 
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
    
    <div className='button-part'>
   <h4 className='button-header'>{selectedDate ? selectedDate.format('YYYY-MM-DD') : 'No date selected'}</h4>
   <div  className='button-format'>
                    {timeSlots?.map((time,index)=>(
                        <Button className='button-style' onClick={handleSubmit} key={index}>{time}</Button>
                    ))}
                </div>

    </div>
   
  )
}


