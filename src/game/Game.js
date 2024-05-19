import React, { useEffect, useState } from "react";
import { Button, Image } from "antd";
import car from "../kenney_racing-pack/PNG/Cars/car_black_5.png";
import street from "../kenney_racing-pack/PNG/Tiles/Asphalt road/road_asphalt02.png";
import "./animation.css"

export default function Game() {
    const [isMoving, setIsMoving] = useState(false)
    const [time, setTime] = useState('3')

    const renderScenario = ()=>{
        let streetNum = 8
        let streetImgs = []
        for(let i = 0; i<streetNum; i++){
            streetImgs.push(<Image src={street} preview={false} style={{left: 128*i}}/>)
        }
        return streetImgs
    }

    return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '700px', width: '100%' }}>
      <div style={{position: 'relative', height: '40%', width: '1100px', margin: '10px', display: 'flex', alignItems: 'center' }}>
        <div style={{position: 'absolute', zIndex: 1, left: 0}}>
            {renderScenario()}
        </div>
        <div className={`car ${isMoving ? 'moving' : ''}` } style={{
            transition: `transform ${isMoving ? time : '0.5'}s linear`
        }}>
            <Image src={car} preview={false} />
        </div>
      </div>
      {(isMoving==false)
      ?
        <Button onClick={()=>{setIsMoving(true)}}>Correr</Button>
      :
        <Button onClick={()=>{setIsMoving(false)}}>Retornar</Button>
      }
    </div>
  );
}
