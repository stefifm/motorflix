import PropTypes from 'prop-types'
import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import {
  colorBlackLight,
  colorGray,
  colorGrayMedium,
  colorWhite,
  colorPrimary,
  colorRed,
  colorWec,
  colorBlack
} from '../../UI/variablesStyle'

const Btn1 = styled(Button)(({ theme }) => ({
  background: `${colorBlack}`,
  color: `${colorWhite}`,
  transition: 'all 0.4s ease-in-out',
  border: `1px solid ${colorWhite}`,
  '&:hover': {
    background: `${colorGrayMedium}`,
    color: `${colorBlackLight}`,
    border: `1px solid ${colorBlackLight}`
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
  background: `${colorRed}`,
  color: `${colorWhite}`,
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    background: `${colorWhite}`,
    color: `${colorRed}`
  }
}))
const Btn4 = styled(Button)(({ theme }) => ({
  background: `${colorWec}`,
  color: `${colorWhite}`,
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    background: `${colorWhite}`,
    color: `${colorWec}`
  }
}))

function Boton({ children, onClick }) {
  const text = {
    'Crear Video': <Btn1 variant='contained'>{children}</Btn1>,
    'Crear Categoria': <Btn1 variant='contained'>{children}</Btn1>,
    Guardar: (
      <Btn2
        variant='contained'
        type='submit'>
        {children}
      </Btn2>
    ),
    Buscar: (
      <Btn2
        variant='contained'
        type='submit'>
        {children}
      </Btn2>
    ),
    Limpiar: (
      <Btn3
        onClick={onClick}
        variant='contained'>
        {children}
      </Btn3>
    ),
    'Nueva Categoría': <Btn4 variant='contained'>{children}</Btn4>,
    'Nuevo Video': <Btn4 variant='contained'>{children}</Btn4>,
    'Para Ver Más': (
      <Btn2
        variant='contained'
        type='submit'
        onClick={onClick}>
        {children}
      </Btn2>
    )
  }
  return text[children]
}

Boton.propTypes = {
  children: PropTypes.node.isRequired
}

export default Boton
