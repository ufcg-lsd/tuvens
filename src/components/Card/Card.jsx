import React from 'react'

import { Card } from 'react-bootstrap';

import './Card.css'

const Room = ({ name, occupation, capacity }) => {

    return (
        <Card>
            <Card.Body className="room">
                <Card.Title className="room__title">{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{occupation} Pessoas</Card.Subtitle>
                <div className="room__actions">
                    <Card.Link href="#">Manhã</Card.Link>
                    <Card.Link href="#">Tarde</Card.Link>
                </div>
            </Card.Body>
        </Card>

    )
}

export default Room
