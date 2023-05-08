import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import SliderComponent from './Slider'
import { useContext } from 'react'
import { VideosContext } from '../../../Context/Context'

const BoxCarrusel = styled(Box)(({ theme }) => ({
  margin: '2rem 3rem',
  padding: '1rem'
}))

function Carrusel() {
  const { ref } = useContext(VideosContext)
  return (
    <BoxCarrusel
      id='section'
      ref={ref}>
      <SliderComponent />
    </BoxCarrusel>
  )
}

export default Carrusel
