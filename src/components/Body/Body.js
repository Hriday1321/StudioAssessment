import React from 'react'
import Bar from '../Bar/Bar'
import { Container, Cont, Div } from './Body.elements'

function Body() {
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
    </Container>
  )
}

export default Body