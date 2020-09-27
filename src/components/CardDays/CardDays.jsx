import React from 'react'
import {Card} from 'react-bootstrap'
import Day from '../ComponentsCalendar/ComponentCalendar.jsx'

import './CardDays.css'

const ListDays = ({children}) => {
    return (
        <Card className = "days">
            <Card.Body className = "day">
                {children}
            </Card.Body>
        </Card>
    )
}

export default ListDays
