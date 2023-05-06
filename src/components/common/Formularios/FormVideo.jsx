import { useContext, useEffect, useState } from 'react'
import { VideosContext } from '../../../Context/Context'
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
  Button
} from '@mui/material'
import { styled } from '@mui/material/styles'
import Boton from '../Button/Boton'
import { colorGrayMedium, colorPrimary } from '../../UI/variablesStyle'
import { useFormik } from 'formik'
import { createVideo, deleteVideo, getVideo, getVideos, updateVideo } from '../../../api/dataDB'
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
  const [item, setItem] = useState(null)
  const { categorias, initialValues1, validationSchema1, setVideos, videos } =
    useContext(VideosContext)

  const createUpdateVideo = async (values) => {
    try {
      if (item === null) {
        await createVideo(values)
        const res = await getVideos()
        setVideos(res.data)
        toast.success('Video creado correctamente')
      }

      if (item !== null) {
        await updateVideo(item.id, values)
        const res = await getVideos()
        setVideos(res.data)
        toast.success('Video actualizado correctamente')
      }
    } catch (error) {
      console.log(error)
      toast.error('Error al crear o actualizar el video')
    }
  }

  const handleDelete = async (e) => {
    const row = e.target.closest('tr')
    const id = row.cells[0].textContent
    try {
      await deleteVideo(id)
      const res = await getVideos()
      setVideos(res.data)
      toast.success('Video eliminado correctamente')
    } catch (error) {
      console.log(error)
      toast.error('Error al eliminar el video')
    }
  }

  useEffect(() => {
    const loadVideo = async () => {
      try {
        if (item !== null) {
          const res = await getVideo(item.id)
          formik.setValues(res.data)
        }
      } catch (error) {
        console.log(error)
        toast.error('Error al cargar el video')
      }
    }
    loadVideo()
  }, [item])

  const formik = useFormik({
    initialValues: initialValues1,
    validationSchema: validationSchema1,
    onSubmit: (values) => {
      createUpdateVideo(values)
    }
  })

  const handleRowClick = (e) => {
    const row = e.target.closest('tr')
    const id = row.cells[0].textContent
    const titulo = row.cells[1].textContent
    const linkVideo = row.cells[2].textContent
    const linkImage = row.cells[3].textContent
    const categoria = row.cells[4].textContent
    const descripcion = row.cells[5].textContent
    const codigoSeguridad = row.cells[6].textContent
    setItem({
      id,
      titulo,
      linkVideo,
      linkImage,
      categoria,
      descripcion,
      codigoSeguridad
    })
  }

  const headerTable = [
    'ID',
    'Título',
    'Link del Video',
    'Link de la Imagen',
    'Categoría',
    'Descripción',
    'Código de Seguridad',
    'Editar',
    'Eliminar'
  ]

  return (
    <>
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

      <TableContainer
        component={Paper}
        sx={{ width: '95vw', margin: '5rem auto' }}>
        <Table
          sx={{ width: '100%', boxSizing: 'border-box', margin: '5rem auto', padding: '0 4rem' }}>
          <TableHead sx={{ width: '100%' }}>
            <TableRow>
              {headerTable.map((header, index) => (
                <TableCell key={index}>{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {videos?.map((video) => (
              <TableRow key={video.id}>
                <TableCell>{video.id}</TableCell>
                <TableCell>{video.titulo}</TableCell>
                <TableCell>{video.linkVideo}</TableCell>
                <TableCell>{video.linkImage}</TableCell>
                <TableCell>{video.categoria}</TableCell>
                <TableCell>{video.descripcion}</TableCell>
                <TableCell>{video.codigoSeguridad}</TableCell>
                <TableCell>
                  <Button onClick={handleRowClick}>Editar</Button>
                </TableCell>
                <TableCell>
                  <Button onClick={handleDelete}>Eliminar</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default FormVideo
