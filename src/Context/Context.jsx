import { createContext, useEffect, useRef, useState } from 'react'
import { PropTypes } from 'prop-types'
import * as Yup from 'yup'
import {
  getVideos,
  getCategorias,
  createVideo,
  updateVideo,
  deleteVideo,
  createCategoria,
  updateCategoria,
  deleteCategoria,
  filterVideos
} from '../api/dataDB'
import { toast } from 'react-hot-toast'

export const VideosContext = createContext()

export const VideosProvider = ({ children }) => {
  const ref = useRef(null)
  const [videos, setVideos] = useState([])
  const [categorias, setCategorias] = useState([])
  const [item, setItem] = useState(null)
  const [itemCat, setItemCat] = useState(null)
  const [search, setSearch] = useState('')
  const [data, setData] = useState([])

  //  Fetch de datos
  const fetchDataVideo = async () => {
    try {
      if (videos.length === 0) {
        const videosDB = await getVideos()
        setVideos(videosDB.data)
      }
    } catch (error) {
      console.log(error)
      toast.error('Hubo un error al cargar los videos')
    }
  }

  const fetchDataCategoria = async () => {
    try {
      if (categorias.length === 0) {
        const categoriasDB = await getCategorias()
        setCategorias(categoriasDB.data)
      }
    } catch (error) {
      console.log(error)
      toast.error('Hubo un error al cargar las categorias')
    }
  }

  useEffect(() => {
    fetchDataVideo()
    fetchDataCategoria()
  }, [])

  // Búsqueda de videos
  useEffect(() => {
    const filterData = async () => {
      try {
        const res = await filterVideos(search)
        setData(res.data)
        if (res.data.length === 0) {
          toast.error('No se encontraron videos')
        }
      } catch (error) {
        toast.error('Sucedió un error al filtrar los videos')
      }
    }

    search.length > 0 && filterData()
  }, [search])

  //  Validación de formulario de videos

  const initialValues1 = {
    titulo: '',
    linkVideo: '',
    linkImage: '',
    categoria: '',
    descripcion: '',
    codigoSeguridad: ''
  }

  const validationSchema1 = Yup.object({
    titulo: Yup.string().required('El titulo es obligatorio'),
    linkVideo: Yup.string().required('El link del video es obligatorio'),
    linkImage: Yup.string().required('El link de la imagen es obligatorio'),
    categoria: Yup.string().required('La categoria es obligatoria'),
    descripcion: Yup.string().required('La descripcion es obligatoria'),
    codigoSeguridad: Yup.string().required('El codigo de seguridad es obligatorio')
  })

  //  Validación de formulario de categorias

  const initialValues2 = {
    nombre: '',
    descripcion: '',
    color: '',
    codigoSeguridad: ''
  }

  const validationSchema2 = Yup.object({
    nombre: Yup.string().required('El nombre es obligatorio'),
    descripcion: Yup.string().required('La descripcion es obligatoria'),
    color: Yup.string().required('El color es obligatorio'),
    codigoSeguridad: Yup.string().required('El codigo de seguridad es obligatorio')
  })

  // Creación, actualización y eliminación de videos

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
      toast.error('Hubo un error en la creación o actualización del video')
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

  // Categorias

  const createUpdateCategoria = async (values) => {
    try {
      if (itemCat === null) {
        await createCategoria(values)
        const res = await getCategorias()
        setCategorias(res.data)
        toast.success('Categoría creada')
        return
      }

      if (itemCat !== null) {
        await updateCategoria(itemCat.id, values)
        const res = await getCategorias()
        setCategorias(res.data)
        toast.success('Categoría actualizada')
      }
    } catch (error) {
      console.log(error)
      toast.error('Hubo un error en la creación o actualización de la categoría')
    }
  }

  const handleDeleteCategoria = async (e) => {
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

  return (
    <VideosContext.Provider
      value={{
        videos,
        categorias,
        initialValues1,
        validationSchema1,
        setVideos,
        setCategorias,
        initialValues2,
        validationSchema2,
        item,
        setItem,
        createUpdateVideo,
        handleDelete,
        itemCat,
        setItemCat,
        createUpdateCategoria,
        handleDeleteCategoria,
        ref,
        search,
        setSearch,
        data
      }}>
      {children}
    </VideosContext.Provider>
  )
}

VideosProvider.propTypes = {
  children: PropTypes.node.isRequired
}
