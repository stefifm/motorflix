import { useContext } from 'react'
import { VideosContext } from '../../../Context/Context'
import { TextField, MenuItem, Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import Boton from '../Button/Boton'
import { colorGrayMedium, colorPrimary } from '../../UI/variablesStyle'
import { useFormik } from 'formik'
import { createVideo } from '../../../api/dataDB'
import { toast } from 'react-hot-toast'

const Form = styled('form')(({ theme }) => ({
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
  const { categorias, initialValues1, validationSchema1, setVideos } = useContext(VideosContext)

  const createVideoToServer = async (values) => {
    try {
      const res = await createVideo(values)
      toast.success('Video creado correctamente')
      setVideos((prevVideos) => [...prevVideos, res.data])
    } catch (error) {
      console.log(error)
      toast.error('Error al crear el video')
    }
  }

  const formik = useFormik({
    initialValues: initialValues1,
    validationSchema: validationSchema1,
    onSubmit: (values) => {
      createVideoToServer(values)
    }
  })

  return (
    <Form onSubmit={formik.handleSubmit}>
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
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.titulo}
        error={!!formik.errors.titulo}
        helperText={formik.errors.titulo}
      />
      <TextField
        label='Link del Video'
        variant='outlined'
        margin='normal'
        fullWidth
        name='linkVideo'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.linkVideo}
        error={!!formik.errors.linkVideo}
        helperText={formik.errors.linkVideo}
      />
      <TextField
        label='Link de la Imagen'
        variant='outlined'
        margin='normal'
        fullWidth
        name='linkImage'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.linkImage}
        error={!!formik.errors.linkImage}
        helperText={formik.errors.linkImage}
      />
      <TextField
        label='Categoría'
        variant='outlined'
        margin='normal'
        fullWidth
        name='categoria'
        defaultValue=''
        select
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.categoria}
        error={!!formik.errors.categoria}
        helperText={formik.errors.categoria}>
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
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.descripcion}
        error={!!formik.errors.descripcion}
        helperText={formik.errors.descripcion}
      />
      <TextField
        label='Código de Seguridad'
        variant='outlined'
        margin='normal'
        fullWidth
        name='codigoSeguridad'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.codigoSeguridad}
        error={!!formik.errors.codigoSeguridad}
        helperText={formik.errors.codigoSeguridad}
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
