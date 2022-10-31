import React from 'react'
import Box from '@mui/material/Box';
import { StyledSlider } from './Slider.elements'

const marks = [
    {
      value: 0,
      label: 'Strongly Disagree',
    },
    {
      value: 25,
      label: 'Disagree',
    },
    {
      value: 50,
      label: 'Neutral',
    },
    {
      value: 75,
      label: 'Agree',
    },
    {
      value: 100,
      label: 'Strongly Agree',
    },
  ];

  function valuetext(value) {
    return `${value}`;
  }
  
  function valueLabelFormat(value) {
    return marks.findIndex((mark) => mark.value === value) + 1;
  }

function Slider(props) {
    return (
      <Box sx={{ width: 600 }}>
        <StyledSlider
          aria-label="Restricted values"
          defaultValue={null}
          valueLabelFormat={valueLabelFormat}
          getAriaValueText={valuetext}
          step={null}
          valueLabelDisplay="auto"
          marks={marks}
          onChange={(e) => {
            e.target.value = 0;
            if(props.value < 3)
            props.set(props.value + 1)
        }}
        />
      </Box>
    );
}

export default Slider