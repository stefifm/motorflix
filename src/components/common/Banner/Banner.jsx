import { useContext } from 'react'
import { VideosContext } from '../../../Context/Context'
import { Box, Button, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import ReactPlayer from 'react-player/youtube'
import { colorWhite } from '../../UI/variablesStyle'
import Boton from '../Button/Boton'

const Section = styled('section')(({ theme }) => ({
  marginTop: '4rem',
  width: '100%',
  height: '80vh',
  position: 'relative',
  '& video': {
    objectFit: 'cover'
  }
}))

const Div = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0,0,0,.5)'
}))

const Titulo = styled(Typography)(({ theme }) => ({
  paddingBottom: theme.spacing(4)
}))

const BoxContainer = styled(Box)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: `${colorWhite}`
}))

function Banner() {
  const { ref } = useContext(VideosContext)
  const handleScroll = () => {
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <Section>
      <ReactPlayer
        url={'https://www.youtube.com/watch?v=qoAmVMi01hY&ab_channel=VisionMotorsport'}
        playing
        loop
        muted
        width='100%'
        height='100%'
      />
      <Div>
        <BoxContainer>
          <Titulo
            variant='h3'
            component='h1'>
            <img
              src='/logo.png'
              alt='Logo'
            />
          </Titulo>
          <Boton onClick={handleScroll}>Para Ver Más</Boton>
        </BoxContainer>
      </Div>
    </Section>
  )
}

export default Banner
