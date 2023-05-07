import { useContext, useEffect, useState } from 'react'
import { VideosContext } from '../../../Context/Context'
import { TextField, MenuItem, TableHead, TableRow, TableBody, Paper, Button } from '@mui/material'
import Boton from '../Button/Boton'
import { useFormik } from 'formik'
import { createVideo, deleteVideo, getVideo, getVideos, updateVideo } from '../../../api/dataDB'
import { toast } from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { Delete, Edit } from '@mui/icons-material'
import {
  ButtonContainer,
  ButtonLeft,
  ButtonRight,
  Form,
  TableCellBody,
  TableCellHeader,
  TableMain,
  TableMainContainer,
  TableRowStyled,
  Titulo
} from './Styles'

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
            <Boton onClick={() => formik.resetForm()}>Limpiar</Boton>
          </ButtonLeft>
          <ButtonRight>
            <Link to={'/crear-categoria'}>
              <Boton>Nueva Categoría</Boton>
            </Link>
          </ButtonRight>
        </ButtonContainer>
      </Form>

      <TableMainContainer component={Paper}>
        <TableMain>
          <TableHead sx={{ width: '100%' }}>
            <TableRow>
              {headerTable.map((header, index) => (
                <TableCellHeader
                  align='center'
                  key={index}>
                  {header}
                </TableCellHeader>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {videos?.map((video) => (
              <TableRowStyled key={video.id}>
                <TableCellBody align='center'>{video.id}</TableCellBody>
                <TableCellBody align='center'>{video.titulo}</TableCellBody>
                <TableCellBody align='center'>{video.linkVideo}</TableCellBody>
                <TableCellBody align='center'>{video.linkImage}</TableCellBody>
                <TableCellBody align='center'>{video.categoria}</TableCellBody>
                <TableCellBody align='center'>{video.descripcion}</TableCellBody>
                <TableCellBody align='center'>{video.codigoSeguridad}</TableCellBody>
                <TableCellBody>
                  <Button onClick={handleRowClick}>
                    <Edit />
                  </Button>
                </TableCellBody>
                <TableCellBody>
                  <Button
                    onClick={handleDelete}
                    color='error'>
                    <Delete />
                  </Button>
                </TableCellBody>
              </TableRowStyled>
            ))}
          </TableBody>
        </TableMain>
      </TableMainContainer>
    </>
  )
}

export default FormVideo
