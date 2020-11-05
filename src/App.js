import React from 'react'
import { Container } from 'react-bootstrap';
import Card from './components/Card/Card'

import Calendar from './components/Calendar/Calendar';

import './App.css'

const Tuvens = () => (
     <div className="tuvens">
          <Container>
               <Calendar />
               {/* <div className="rooms">
                    <Card name="Carvalheira" occupation={19} />
                    <Card name="Serra Branca" occupation={13} />
                    <Card name="Triunfo" occupation={16} />
               </div> */}
               {/* <ComponentsCards></ComponentsCards>
          <Typography1 text="Algum título por aqui"></Typography1>
          <Typography2 text="Qualquer coisa"></Typography2>
          <Typography3 text="Qualquer título 2"></Typography3>
          <Typography4 text="Qualquer título"></Typography4>
          <Typography5 text="Qualquer título"></Typography5>
          <ComponentCalendar dia="SEG"></ComponentCalendar>
     <Week children={<ComponentCalendar dia="iza"></ComponentCalendar>}></Week> */}
          </Container>
     </div>
)

export default Tuvens
