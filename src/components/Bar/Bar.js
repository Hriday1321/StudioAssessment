import React from 'react'
import { Div, Div2 } from './Bar.elements'

function Bar(props) {
  return (
    <Div2>
        <Div style={{width: props.value + '%'}}>g</Div>
    </Div2>
  )
}

export default Bar