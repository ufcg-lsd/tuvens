import React from 'react'
import { Card } from 'react-bootstrap'

import './Week.css'

const Week = ({ children }) => {
    return (
        <Card className="week">
            {children}
        </Card>
    )
}

export default Week;