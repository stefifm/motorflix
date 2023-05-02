import PropTypes from 'prop-types'
import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import {
  colorBlackLight,
  colorGray,
  colorGrayMedium,
  colorWhite,
  colorPrimary
} from '../../UI/variablesStyle'

const Btn1 = styled(Button)(({ theme }) => ({
  background: `${colorGray}`,
  color: `${colorWhite}`,
  transition: 'all 1s ease-in-out',
  '&:hover': {
    background: `${colorGrayMedium}`,
    color: `${colorBlackLight}`
  }
}))
const Btn2 = styled(Button)(({ theme }) => ({
  background: `${colorPrimary}`,
  color: `${colorWhite}`,
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    background: `${colorWhite}`,
    color: `${colorPrimary}`,
    transform: 'scale(1.09)',
    boxShadow: `0 0 10px 1px ${colorPrimary}`
  }
}))
const Btn3 = styled(Button)(({ theme }) => ({
  background: `${colorGray}`,
  color: `${colorWhite}`,
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    background: `${colorGrayMedium}`,
    color: `${colorBlackLight}`
  }
}))
const Btn4 = styled(Button)(({ theme }) => ({
  background: `${colorGray}`,
  color: `${colorWhite}`,
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    background: `${colorGrayMedium}`,
    color: `${colorBlackLight}`
  }
}))

function Boton({ children }) {
  const text = {
    'Crear Video': <Btn1 variant='contained'>{children}</Btn1>,
    Guardar: <Btn2 variant='contained'>{children}</Btn2>,
    Limpiar: <Btn3 variant='contained'>{children}</Btn3>,
    'Nueva Categoría': <Btn4 variant='contained'>{children}</Btn4>
  }
  return text[children]
}

Boton.propTypes = {
  children: PropTypes.node.isRequired
}

export default Boton
