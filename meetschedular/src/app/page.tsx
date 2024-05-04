"use client"
import React, { useContext } from 'react'
import {Card} from "antd"
import "./style/Home.css"
import { GoDotFill } from "react-icons/go";
import { TbArrowBadgeRight} from "react-icons/tb";
import { useRouter } from "next/navigation"
import UserContext from '@/context/UserContext';


export default function Home(){

  const router = useRouter();
  
  const [duration,setDuration]=React.useState("");

  const {setuser} =  useContext(UserContext)

  React.useEffect(() => {
    if (duration) {
      setuser({ duration });
      
      router.push("/page2");
    }
  }, [duration]); 
   
    return (
        <>
        <Card size="small" style={{ height: '500px' }} className="basic-layout">
           <h2 style={{textAlign:"center"}}>Harshit Shrivastava</h2>
           <p>Welcome to my scheduling page . Please follow the instruction to add an event to my calender</p>
           <div className="button-components" style={{display:"Flex"}}>
           <button style={{display:"Flex"}} onClick={() => setDuration("30")}><GoDotFill style={{fontSize:30, color:"blueviolet"}} /><h2>30 Minute Meeting</h2><TbArrowBadgeRight style={{fontSize:20, color:"black"}} /></button>
           <button style={{display:"Flex"}} onClick={() => setDuration("60")}><GoDotFill style={{fontSize:30 , color:"blueviolet"}}/><h2>60 Minute Meeting</h2><TbArrowBadgeRight style={{fontSize:20, color:"black"}}  /></button>
           </div>
        </Card>
        </>
    )
   
}
