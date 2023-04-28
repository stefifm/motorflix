import { AppBar, Button, MenuList, Toolbar } from '@mui/material'
import { styled } from '@mui/material/styles'
import { colorGray, colorGrayMedium, colorBlackLight, colorWhite } from '../../UI/variablesStyle'
import Boton from '../Button/Boton'

const HeaderBox = styled(AppBar)(({ theme }) => ({
  marginBottom: '5rem',
  background: `${colorGrayMedium}`,
  boxShadow: `inset 6px 6px 12px ${colorGray}, inset -3px -3px 12px ${colorBlackLight}`,
}))

const Navbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginLeft: '2rem',
  marginRight: '2rem',
}))

// const Boton = styled(Button)(({ theme }) => ({
//   background: `${colorGray}`,
//   color: `${colorWhite}`,
//   '&:hover': {
//     background: `${colorGrayMedium}`,
//     color: `${colorBlackLight}`,
//   },
// }))

function Header() {
  return (
    <HeaderBox>
      <Navbar>
        <img
          src='/logo.png'
          alt='Logo'
        />
        <MenuList>
          <Boton>Crear Video</Boton>
        </MenuList>
      </Navbar>
    </HeaderBox>
  )
}

export default Header
