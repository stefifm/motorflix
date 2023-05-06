import { createContext, useEffect, useState } from 'react'
import { PropTypes } from 'prop-types'
import * as Yup from 'yup'
import { getVideos, getCategorias } from '../api/dataDB'

export const VideosContext = createContext()

export const VideosProvider = ({ children }) => {
  const [videos, setVideos] = useState([])
  const [categorias, setCategorias] = useState([])

  const fetchDataVideo = async () => {
    try {
      if (videos.length === 0) {
        const videosDB = await getVideos()
        setVideos(videosDB.data)
      }
    } catch (error) {
      console.log(error)
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
    }
  }

  useEffect(() => {
    fetchDataVideo()
    fetchDataCategoria()
  }, [])

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
        validationSchema2
      }}>
      {children}
    </VideosContext.Provider>
  )
}

VideosProvider.propTypes = {
  children: PropTypes.node.isRequired
}
