"use client"
import React, { useContext } from 'react'
import { Card, Row, Col } from 'antd'
import "./style/Home.css"
import { GoDotFill } from "react-icons/go";
import { TbArrowBadgeRight } from "react-icons/tb";
import { useRouter } from "next/navigation"
import UserContext from '@/context/UserContext';
import Link from 'next/link';

export default function Home() {
  const router = useRouter();
  const [duration, setDuration] = React.useState("");
  const { setuser } = useContext(UserContext)

  React.useEffect(() => {
    if (duration) {
      setuser({ duration });
      router.push("/page2");
    }
  }, [duration]);

  return (
    <Card size="small" className='card-layout'>
      <Row gutter={[16,16]}>
        <Col span={24}> 
          <h2>Harshit Shrivastava</h2>
          <p>Welcome to my scheduling page. Please follow the instructions to add an event to my calendar.</p>
        </Col>
        <Col span={24}>
          <div className='button-container'>
            <Row gutter={[16,16]}>
              <Col xs={24} sm={12}>
                <button style={{ display: "flex", alignItems: "center" }} onClick={() => setDuration("30")}>
                  <GoDotFill style={{ fontSize: 30, color: "blueviolet" }} />
                  <h2>
                    <Link style={{ textDecoration: "none", color: 'black' }} href="/page2">
                      30 Minute Meeting
                    </Link>
                  </h2>
                  <TbArrowBadgeRight style={{ fontSize: 20, color: "black" }} />
                </button>
              </Col>
              <Col xs={24} sm={12}>
                <button style={{ display: "flex", alignItems: "center" }} onClick={() => setDuration("60")}>
                  <GoDotFill style={{ fontSize: 30, color: "blueviolet" }} />
                  <h2>
                    <Link href="/page2" style={{ textDecoration: 'none', color: 'black' }}>
                      60 Minute Meeting
                    </Link>
                  </h2>
                  <TbArrowBadgeRight style={{ fontSize: 20, color: "black" }} />
                </button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Card>
  );
}
