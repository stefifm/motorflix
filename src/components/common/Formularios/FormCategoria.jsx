import { useContext, useEffect, useState } from 'react'
import { VideosContext } from '../../../Context/Context'
import {
  createCategoria,
  getCategoria,
  getCategorias,
  updateCategoria,
  deleteCategoria
} from '../../../api/dataDB'
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

function FormCategoria() {
  const [item, setItem] = useState(null)
  const { categorias, setCategorias, initialValues2, validationSchema2 } = useContext(VideosContext)
  const headerTable = [
    'ID',
    'Nombre',
    'Descripción',
    'Color',
    'Código de Seguridad',
    'Editar',
    'Eliminar'
  ]

  const createUpdateCategoria = async (values) => {
    if (item === null) {
      await createCategoria(values)
      const res = await getCategorias()
      setCategorias(res.data)
      toast.success('Categoría creada')
      return
    }

    if (item !== null) {
      await updateCategoria(item.id, values)
      const res = await getCategorias()
      setCategorias(res.data)
      toast.success('Categoría actualizada')
    }
  }

  const formik = useFormik({
    initialValues: initialValues2,
    validationSchema: validationSchema2,
    onSubmit: (values) => {
      createUpdateCategoria(values)
    }
  })

  useEffect(() => {
    const getCategoriaById = async () => {
      try {
        if (item !== null) {
          const res = await getCategoria(item.id)
          formik.setValues(res.data)
        }
      } catch (error) {
        console.log(error)
        toast.error('Error al obtener categoría')
      }
    }

    getCategoriaById()
  }, [item])

  const handleDelete = async (e) => {
    const row = e.target.closest('tr')
    const id = row.cells[0].textContent
    try {
      await deleteCategoria(id)
      const res = await getCategorias()
      setCategorias(res.data)
      toast.success('Categoría eliminada')
    } catch (error) {
      console.log(error)
      toast.error('Error al eliminar categoría')
    }
  }

  const handleRowClick = (e) => {
    const row = e.target.closest('tr')
    const id = row.cells[0].textContent
    const nombre = row.cells[1].textContent
    const descripcion = row.cells[2].textContent
    const color = row.cells[3].textContent
    const codigoSeguridad = row.cells[4].textContent
    setItem({
      id,
      nombre,
      descripcion,
      color,
      codigoSeguridad
    })
  }

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <Titulo
          variant='h4'
          component='h2'>
          Nueva Categoría
        </Titulo>
        <TextField
          label='Nombre'
          variant='outlined'
          margin='normal'
          fullWidth
          name='nombre'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.nombre}
          error={!!formik.errors.nombre}
          helperText={formik.errors.nombre}
        />
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
          label='Color'
          variant='outlined'
          margin='normal'
          fullWidth
          name='color'
          type='color'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.color}
          error={!!formik.errors.color}
          helperText={formik.errors.color}
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
            {categorias?.map((categoria) => (
              <TableRow key={categoria.id}>
                <TableCell>{categoria.id}</TableCell>
                <TableCell>{categoria.nombre}</TableCell>
                <TableCell>{categoria.descripcion}</TableCell>
                <TableCell>{categoria.color}</TableCell>
                <TableCell>{categoria.codigoSeguridad}</TableCell>
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

export default FormCategoria
