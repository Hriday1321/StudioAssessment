import React from 'react'
import Bar from '../Bar/Bar'
import { Container, Cont, Cont2, Div } from './Body.elements'
import { data } from './../../utils/data'

function Body() {
  const [value, setValue] = React.useState(1);
  return (
    <Container>
        <Cont>
            <Div>
                <Bar value='20'/>
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
    </Container>
  )
}

export default Body