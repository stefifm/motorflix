import { createContext } from 'react'
import { PropTypes } from 'prop-types'
import { categorias, videos } from '../api/data'

export const VideosContext = createContext()

export const VideosProvider = ({ children }) => {
  const getVideos = () => {
    return videos
  }

  const getCategorias = () => {
    return categorias
  }

  return (
    <VideosContext.Provider
      value={{
        getVideos,
        getCategorias,
      }}>
      {children}
    </VideosContext.Provider>
  )
}

VideosProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
