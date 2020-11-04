import React from 'react'
import classNames from "classnames";
import { Card } from 'react-bootstrap'

import { Typography4 } from '../Typography';

import './Day.css'

const Day = ({ alias, day, today}) => {
    return (
        <Card className={classNames({
            'day' : true,
            'today': today
        })}>
            <div className="float"></div>
            <Card.Title className="title">
                {alias}
            </Card.Title>
            <Typography4 text={day} />
        </Card>
    )
}

export default Day