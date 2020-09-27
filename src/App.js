import React from 'react'
import { Button } from 'react-bootstrap'
import Card from './components/Card/Card.jsx'
import ComponentsCards from './components/ComponentsCards/ComponentsCard.jsx'
import Typography1 from './components/Typography/Typography1.jsx'
import Typography2 from './components/Typography/Typography2.jsx'
import Typography3 from './components/Typography/Typography3.jsx'
import Typography4 from './components/Typography/Typography4.jsx'
import Typography5 from './components/Typography/Typography5.jsx'
import ComponentCalendar from './components/ComponentsCalendar/ComponentCalendar.jsx'
import CardDays from './components/CardDays/CardDays'

import './App.css'

const Tuvens = (props) => (
     <div className="tuvens">
          <Card name="Carvalheira" occupation={19} />
          <Card name="Serra Branca" occupation={13} />
          <Card name="Triunfo" occupation={16} />
          <ComponentsCards></ComponentsCards>
          <Typography1 text ="Algum título por aqui"></Typography1>
          <Typography2 text = "Qualquer coisa"></Typography2>
          <Typography3 text = "Qualquer título 2"></Typography3>
          <Typography4 text = "Qualquer título"></Typography4>
          <Typography5 text = "Qualquer título"></Typography5>
          <ComponentCalendar dia = "SEG"></ComponentCalendar>
          <CardDays children = {<ComponentCalendar dia = "iza"></ComponentCalendar>}></CardDays>
     </div>
)

export default Tuvens
