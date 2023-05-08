import {
  TextField,
  MenuItem,
  Box,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
  tableCellClasses
} from '@mui/material'
import { styled } from '@mui/material/styles'
import {
  colorBlack,
  colorBlackLight,
  colorBlackLighter,
  colorGray,
  colorGrayMedium,
  colorIndyCar,
  colorPink,
  colorPrimary,
  colorWec,
  colorWhite
} from '../../UI/variablesStyle'

const Form = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '45vw',
  height: '100%',
  backgroundColor: `${colorGrayMedium}`,
  padding: '2rem',
  borderRadius: '1rem',
  margin: '10rem auto',
  boxSize: 'border-box',
  transition: 'all 0.2s',
  '&:hover': {
    boxShadow: `0 0 20px 1px ${colorPrimary}`,
    border: `2px solid ${colorPrimary}`
  },
  [theme.breakpoints.down('md')]: {
    width: '70%',
    margin: '5rem auto'
  }
}))

const Titulo = styled(Typography)(({ theme }) => ({
  paddingBottom: '1rem'
}))

const ButtonContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  marginTop: '2rem',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  gap: '1rem',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: '2rem',
    marginTop: '1rem'
  }
}))

const ButtonLeft = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  gap: '1rem',
  justifyContent: 'flex-start',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center'
  }
}))

const ButtonRight = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center'
  }
}))

const TableMainContainer = styled(TableContainer)(({ theme }) => ({
  width: '80vw',
  margin: '0 auto',
  border: `3px solid ${colorWec}`
}))

const TableMain = styled(Table)(({ theme }) => ({
  width: '100%',
  boxSizing: 'border-box',
  margin: '0 auto',
  padding: '0 4rem'
}))

const Head = styled(TableHead)(({ theme }) => ({
  width: '100%'
}))

const TableCellHeader = styled(TableCell)(({ theme }) => ({
  backgroundColor: `${colorWec}`,
  color: `${colorWhite}`,
  border: `1px solid ${colorWec}`,
  [`&.${tableCellClasses.root}`]: {
    fontSize: '1.2rem'
  }
}))

const TableRowStyled = styled(TableRow)(({ theme }) => ({
  backgroundColor: `${colorGrayMedium}`,
  transition: 'all 0.6s',
  '&:hover': {
    backgroundColor: `${colorGray}`
  }
}))

const TableCellBody = styled(TableCell)(({ theme }) => ({
  color: `${colorBlack}`,
  borderRight: `1px solid ${colorBlackLighter}`,
  borderLeft: `1px solid ${colorBlackLighter}`,
  borderBottom: `1px solid ${colorBlackLighter}`,
  '&:last-child td, &:last-child th': {
    border: 'none'
  }
}))

export {
  Form,
  Titulo,
  ButtonContainer,
  ButtonLeft,
  ButtonRight,
  TableMainContainer,
  TableMain,
  TableCellHeader,
  TableRowStyled,
  TableCellBody,
  Head
}
