import styled from 'styled-components'
import Slider from '@mui/material/Slider';

export const StyledSlider = styled(Slider)({
    
    '& .MuiSlider-track': {
      border: 'none',
      backgroundColor: '#52af77',
      height: 8,
      zIndex: 2
    },
    '& .MuiSlider-markLabel': {
        color: 'black',
        fontSize: '1.2rem'
    },
    '& .MuiSlider-mark': {
        height: 12,
        width: 12,
        borderRadius: '100%',
        color: '#999'
    },
    '& .MuiSlider-thumb': {
      height: 24,
      width: 24,
      zIndex: 3,
      backgroundColor: '#fff',
      border: '2px solid #52af77',
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
      '&:before': {
        display: 'none',
      },
    },
  });