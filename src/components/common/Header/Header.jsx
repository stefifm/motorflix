import { Link } from 'react-router-dom'
import { AppBar, MenuList, Toolbar } from '@mui/material'
import { styled } from '@mui/material/styles'
import { colorGray, colorGrayMedium, colorBlackLight } from '../../UI/variablesStyle'
import Boton from '../Button/Boton'

const HeaderBox = styled(AppBar)(({ theme }) => ({
  marginBottom: '5rem',
  background: `${colorGrayMedium}`,
  boxShadow: `inset 6px 6px 12px ${colorGray}, inset -3px -3px 12px ${colorBlackLight}`
}))

const Navbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginLeft: '2rem',
  marginRight: '2rem'
}))

function Header() {
  return (
    <HeaderBox>
      <Navbar>
        <Link to={'/'}>
          <img
            src='/logo.png'
            alt='Logo'
          />
        </Link>
        <MenuList sx={{ display: 'flex', gap: '0.5rem' }}>
          <Link to={'/crear-video'}>
            <Boton>Crear Video</Boton>
          </Link>
          <Link to={'/crear-categoria'}>
            <Boton>Crear Categoria</Boton>
          </Link>
        </MenuList>
      </Navbar>
    </HeaderBox>
  )
}

export default Header
