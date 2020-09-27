import React from 'react'
import {Card} from 'react-bootstrap'
import Typography5 from '../Typography/Typography5'

import './ComponentCalendar.css'

const CardDay = ({dia}) => {
    return (
        <Card className = "week">
            <div className="float"></div>
            <Card.Body>
                <Card.Title className = "title">
                    {dia}
                </Card.Title>
            </Card.Body>
        </Card>
    )
}

export default CardDay