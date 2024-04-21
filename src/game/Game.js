import { Stage, Sprite, Container, Text } from "@pixi/react"
import car from "./car.png"
import React, {useState} from "react"

export default function Game(){ 
    const [speed, setSpeed] = useState(1.1)
    const [positionX, setPositionX] = useState(100)

    return(
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <Stage options={{ background: 0xe1e1e1 }}>
                <Container x={400} y={150}>
                    <Text text="The Speed Game" anchor={{ x: 0.5, y: 0.5 }}/>
                </Container>
                <Sprite
                    image={car}
                    x={positionX}
                    y={270}
                    anchor={{ x: 0.5, y: 0.5 }}
                    angle={90}
                    
                />
            </Stage>
        </div>
    )
}