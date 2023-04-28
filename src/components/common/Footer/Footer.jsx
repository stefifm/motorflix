import { Card, CardMedia, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { colorBlack, colorWhite } from '../../UI/variablesStyle'

const FooterBox = styled(Card)(({ theme }) => ({
  marginTop: '5rem',
  background: `${colorBlack}`,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  bottom: '0',
}))

const FooterImg = styled(CardMedia)(({ theme }) => ({
  margin: '0 auto',
  height: '10%',
  width: '20%',
  paddingTop: '1rem',
}))

const FooterText = styled(Typography)(({ theme }) => ({
  color: `${colorWhite}`,
  padding: '1rem',
}))

function Footer() {
  return (
    <FooterBox>
      <FooterImg
        component='img'
        image='/logo.png'
      />
      <FooterText variant='p'>© Stefania Verónica Bruera</FooterText>
    </FooterBox>
  )
}

export default Footer
