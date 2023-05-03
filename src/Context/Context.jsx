import { createContext, useEffect, useState } from 'react'
import { PropTypes } from 'prop-types'
import { getVideos, getCategorias } from '../api/dataDB'

export const VideosContext = createContext()

export const VideosProvider = ({ children }) => {
  const [videos, setVideos] = useState([])
  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    async function fetchData() {
      const videosDB = await getVideos()
      const categoriasDB = await getCategorias()
      setVideos(videosDB.data)
      setCategorias(categoriasDB.data)
    }
    fetchData()
  }, [])

  return (
    <VideosContext.Provider
      value={{
        videos,
        categorias
      }}>
      {children}
    </VideosContext.Provider>
  )
}

VideosProvider.propTypes = {
  children: PropTypes.node.isRequired
}
