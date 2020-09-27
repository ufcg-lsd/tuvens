import React from 'react'
import { Card } from 'react-bootstrap';

import './ComponentsCard.css'

const ComponentsCard = ({children}) => {

    return (
        <Card className = "datas">
            <Card.Body>
                {children}
            </Card.Body>
        </Card>
    )

}

export default ComponentsCard