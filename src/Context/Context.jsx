import { createContext, useEffect, useState } from 'react'
import { PropTypes } from 'prop-types'
import * as Yup from 'yup'
import { getVideos, getCategorias } from '../api/dataDB'

export const VideosContext = createContext()

export const VideosProvider = ({ children }) => {
  const [videos, setVideos] = useState([])
  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const videosDB = await getVideos()
      const categoriasDB = await getCategorias()
      setVideos(videosDB.data)
      setCategorias(categoriasDB.data)
    }
    fetchData()
  }, [Object.values(videos).length])

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

  return (
    <VideosContext.Provider
      value={{
        videos,
        categorias,
        initialValues1,
        validationSchema1,
        setVideos,
        setCategorias
      }}>
      {children}
    </VideosContext.Provider>
  )
}

VideosProvider.propTypes = {
  children: PropTypes.node.isRequired
}
