import PropTypes from 'prop-types'
import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import { colorBlackLight, colorGray, colorGrayMedium, colorWhite } from '../../UI/variablesStyle'

const Btn1 = styled(Button)(({ theme }) => ({
  background: `${colorGray}`,
  color: `${colorWhite}`,
  '&:hover': {
    background: `${colorGrayMedium}`,
    color: `${colorBlackLight}`,
  },
}))

function Boton({ children }) {
  return 'Crear Video' && <Btn1 variant='contained'>{children}</Btn1>
}

Boton.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Boton
