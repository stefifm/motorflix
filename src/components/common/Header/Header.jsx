import { Link } from 'react-router-dom'
import {
  AppBar,
  MenuItem,
  MenuList,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { colorBlack, colorWhite } from '../../UI/variablesStyle'
import Boton from '../Button/Boton'
import DrawerComponent from './DrawerComponent'

const HeaderBox = styled(AppBar)(({ theme }) => ({
  background: `${colorBlack}`,
  opacity: '0.7'
}))

const Logo = styled('img')(({ theme }) => ({
  width: '10rem',
  height: 'auto'
}))

const Navbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginLeft: '2rem',
  marginRight: '2rem',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'flex-start',
    marginLeft: '0.5rem',
    marginRight: '0.5rem'
  }
}))

const ListMenu = styled(MenuList)(({ theme }) => ({
  display: 'flex',
  gap: '0.5rem'
}))

const VideosStyled = styled(Typography)(({ theme }) => ({
  color: `${colorWhite}`,
  textTransform: 'uppercase',
  fontWeight: 'bold',
  padding: '0.4rem 1rem',
  marginRight: 'auto',
  transition: 'all 0.4s ease',
  '&:hover': {
    borderBottom: `2px solid ${colorWhite}`
  }
}))

function Header() {
  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <HeaderBox>
      <Navbar>
        <Link to={'/'}>
          <Logo
            src='/logo.png'
            alt='Logo'
          />
        </Link>
        {isMatch ? (
          <>
            <DrawerComponent />
          </>
        ) : (
          <>
            <ListMenu>
              <MenuItem>
                <Link
                  to={'/videos'}
                  style={{ textDecoration: 'none' }}>
                  <VideosStyled variant='p'>Videos</VideosStyled>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to={'/crear-video'}>
                  <Boton>Crear Video</Boton>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to={'/crear-categoria'}>
                  <Boton>Crear Categoria</Boton>
                </Link>
              </MenuItem>
            </ListMenu>
          </>
        )}
      </Navbar>
    </HeaderBox>
  )
}

export default Header
