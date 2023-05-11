import { useContext, useEffect } from 'react'
import { VideosContext } from '../../../Context/Context'
import { getCategoria } from '../../../api/dataDB'
import { TextField, TableRow, TableBody, Paper, Button } from '@mui/material'

import Boton from '../Button/Boton'

import { useFormik } from 'formik'
import { toast } from 'react-hot-toast'
import { Delete, Edit } from '@mui/icons-material'
import {
  ButtonContainer,
  ButtonLeft,
  ButtonRight,
  Form,
  Head,
  TableCellBody,
  TableCellHeader,
  TableMain,
  TableMainContainer,
  TableRowStyled,
  Titulo
} from './Styles'
import { Link } from 'react-router-dom'

function FormCategoria() {
  const {
    categorias,
    initialValues2,
    validationSchema2,
    createUpdateCategoria,
    itemCat,
    setItemCat,
    handleDeleteCategoria
  } = useContext(VideosContext)

  const headerTable = [
    'ID',
    'Nombre',
    'Descripción',
    'Color',
    'Código de Seguridad',
    'Editar',
    'Eliminar'
  ]

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
        if (itemCat !== null) {
          const res = await getCategoria(itemCat.id)
          formik.setValues(res.data)
        }
      } catch (error) {
        console.log(error)
        toast.error('Error al obtener categoría')
      }
    }

    getCategoriaById()
  }, [itemCat])

  const handleRowClick = (e) => {
    const row = e.target.closest('tr')
    const id = row.cells[0].textContent
    const nombre = row.cells[1].textContent
    const descripcion = row.cells[2].textContent
    const color = row.cells[3].textContent
    const codigoSeguridad = row.cells[4].textContent
    setItemCat({
      id,
      nombre,
      descripcion,
      color,
      codigoSeguridad
    })
  }

  const handleClickForm = () => {
    setItemCat(null)
    formik.resetForm()
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
          value={formik.values.descripcion}
          error={!!formik.errors.descripcion}
          helperText={formik.errors.descripcion}
        />
        <TextField
          variant='outlined'
          margin='normal'
          fullWidth
          label='Color'
          focused
          name='color'
          type='color'
          onChange={formik.handleChange}
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
          value={formik.values.codigoSeguridad}
          error={!!formik.errors.codigoSeguridad}
          helperText={formik.errors.codigoSeguridad}
        />
        <ButtonContainer>
          <ButtonLeft>
            <Boton>Guardar</Boton>
            <Boton onClick={handleClickForm}>Limpiar</Boton>
          </ButtonLeft>
          <ButtonRight>
            <Link to={'/crear-video'}>
              <Boton>Nuevo Video</Boton>
            </Link>
          </ButtonRight>
        </ButtonContainer>
      </Form>

      <TableMainContainer component={Paper}>
        <TableMain>
          <Head>
            <TableRow>
              {headerTable.map((header, index) => (
                <TableCellHeader
                  align='center'
                  key={index}>
                  {header}
                </TableCellHeader>
              ))}
            </TableRow>
          </Head>
          <TableBody>
            {categorias?.map((categoria) => (
              <TableRowStyled key={categoria.id}>
                <TableCellBody align='center'>{categoria.id}</TableCellBody>
                <TableCellBody align='center'>{categoria.nombre}</TableCellBody>
                <TableCellBody align='center'>{categoria.descripcion}</TableCellBody>
                <TableCellBody align='center'>{categoria.color}</TableCellBody>
                <TableCellBody align='center'>{categoria.codigoSeguridad}</TableCellBody>
                <TableCellBody align='center'>
                  <Button onClick={handleRowClick}>
                    <Edit />
                  </Button>
                </TableCellBody>
                <TableCellBody align='center'>
                  <Button
                    onClick={handleDeleteCategoria}
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

export default FormCategoria
