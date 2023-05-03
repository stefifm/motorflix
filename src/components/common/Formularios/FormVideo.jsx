import { useContext } from 'react'
import { VideosContext } from '../../../Context/Context'
import { TextField, MenuItem, FormControl, Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import Boton from '../Button/Boton'
import { colorGrayMedium, colorPrimary } from '../../UI/variablesStyle'

const Form = styled(FormControl)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '45vw',
  height: '80vh',
  backgroundColor: `${colorGrayMedium}`,
  padding: '2rem',
  borderRadius: '1rem',
  margin: '10rem auto',
  boxSize: 'border-box',
  transition: 'all 0.2s',
  '&:hover': {
    boxShadow: `0 0 20px 1px ${colorPrimary}`,
    border: `2px solid ${colorPrimary}`
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
  gap: '1rem'
}))

const ButtonLeft = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  gap: '1rem',
  justifyContent: 'flex-start',
  alignItems: 'center'
}))

const ButtonRight = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center'
}))

function FormVideo() {
  const { categorias } = useContext(VideosContext)
  return (
    <Form>
      <Titulo
        variant='h4'
        component='h2'>
        Nuevo Video
      </Titulo>
      <TextField
        label='Título'
        variant='outlined'
        margin='normal'
        fullWidth
        name='titulo'
      />
      <TextField
        label='Link del Video'
        variant='outlined'
        margin='normal'
        fullWidth
        name='linkVideo'
      />
      <TextField
        label='Link de la Imagen'
        variant='outlined'
        margin='normal'
        fullWidth
        name='linkImage'
      />
      <TextField
        label='Categoría'
        variant='outlined'
        margin='normal'
        fullWidth
        name='categoria'
        defaultValue=''
        select>
        {categorias?.map((categoria) => (
          <MenuItem
            key={categoria.id}
            value={categoria.nombre}>
            {categoria.nombre}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label='Descripción'
        variant='outlined'
        margin='normal'
        fullWidth
        name='descripcion'
        multiline
        rows={4}
      />
      <TextField
        label='Código de Seguridad'
        variant='outlined'
        margin='normal'
        fullWidth
        name='codigoSeguridad'
      />
      <ButtonContainer>
        <ButtonLeft>
          <Boton>Guardar</Boton>
          <Boton>Limpiar</Boton>
        </ButtonLeft>
        <ButtonRight>
          <Boton>Nueva Categoría</Boton>
        </ButtonRight>
      </ButtonContainer>
    </Form>
  )
}

export default FormVideo
