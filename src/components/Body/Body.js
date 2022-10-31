import React from 'react'
import Bar from '../Bar/Bar'
import { Container, Cont, Cont2, Cont3, Div } from './Body.elements'
import { data } from './../../utils/data'
import Slider from '../Slider/Slider';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Body() {
  const [value, setValue] = React.useState(1);
  return (
    <Container>
        <Cont>
            <Div>
                <Bar value={20 * value}/>
                IDEALISTIC
            </Div>
            <Div>
                <Bar value='0'/>
                DISILLUSIONED
            </Div>
            <Div>
                <Bar value='0'/>
                CYNICAL
            </Div>
            <Div>
                <Bar value='0'/>
                HOPEFUL
            </Div>
        </Cont>
        <Cont2>
            <b>{value}</b>/20
        </Cont2>
        <Cont>{data[value - 1].ques}</Cont>
        <Cont><Slider value = {value} set = {setValue}/></Cont>
        <Cont3>
            <div><ArrowBackIcon /> Prev</div>
            <div><ArrowForwardIcon /> Next</div>
        </Cont3>
    </Container>
  )
}

export default Body