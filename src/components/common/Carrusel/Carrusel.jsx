import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import SliderComponent from './Slider'

const BoxCarrusel = styled(Box)(({ theme }) => ({
  margin: '2rem 5rem',
  padding: '1rem',
}))

function Carrusel() {
  return (
    <BoxCarrusel>
      <SliderComponent />
    </BoxCarrusel>
  )
}

export default Carrusel
