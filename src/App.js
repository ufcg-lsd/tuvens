import React from 'react'
import { Button } from 'react-bootstrap'
import Card from './components/Card/Card.jsx'

import './App.css';

const Tuvens = props => (
    <div className="tuvens">
        <Card name="Carvalheira" occupation={19}></Card>
        <Card name="Serra Branca" occupation={13}></Card>
        <Card name="Triunfo" occupation={16}></Card>
    </div>
)

export default Tuvens
