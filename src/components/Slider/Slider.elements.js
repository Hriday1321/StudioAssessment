import styled from 'styled-components'
import Slider from '@mui/material/Slider';

export const StyledSlider = styled(Slider)({
    color: '#52af77',
    height: 8,
    '& .MuiSlider-thumb': {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
          boxShadow: 'inherit',
        },
        '&:before': {
          display: 'none',
        },
      },
})