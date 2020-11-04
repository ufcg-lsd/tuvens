import React from 'react'
import Card from './components/Card/Card.jsx'
import ComponentsCards from './components/ComponentsCards/ComponentsCard.jsx'

import {
     Typography1,
     Typography2,
     Typography3,
     Typography4,
     Typography5
} from './components/Typography'

import ComponentCalendar from './components/ComponentsCalendar/ComponentCalendar.jsx'
import CardDays from './components/CardDays/CardDays';

import './App.css'

const Tuvens = (props) => (
     <div className="tuvens">
          <Card name="Carvalheira" occupation={19} />
          <Card name="Serra Branca" occupation={13} />
          <Card name="Triunfo" occupation={16} />
          <ComponentsCards></ComponentsCards>
          <Typography1 text="Algum título por aqui"></Typography1>
          <Typography2 text="Qualquer coisa"></Typography2>
          <Typography3 text="Qualquer título 2"></Typography3>
          <Typography4 text="Qualquer título"></Typography4>
          <Typography5 text="Qualquer título"></Typography5>
          <ComponentCalendar dia="SEG"></ComponentCalendar>
          <CardDays children={<ComponentCalendar dia="iza"></ComponentCalendar>}></CardDays>
     </div>
)

export default Tuvens
