import React from 'react'
//import { OpacityBar } from '../Bar/OpacityBar'
import {Card} from 'react-bootstrap';

import './Card.css'

const Room = ({name, occupation, capacity}) => {
    
    return (
        <Card className = "room" style = {{ width: '18rem'}}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className = "mb-2 text-muted">{occupation}</Card.Subtitle>
                <Card.Link href = "#">Manhã</Card.Link>
                <Card.Link href = "#">Tarde</Card.Link>
            </Card.Body>
        </Card>
            
    )
}

export default Room

