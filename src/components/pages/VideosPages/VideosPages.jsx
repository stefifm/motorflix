import { useContext } from 'react'
import { Box, LinearProgress } from '@mui/material'
import { styled } from '@mui/material/styles'
import { VideosContext } from '../../../Context/Context'
import { FormSearch, VideoCard } from '../../common'

const BoxVideos = styled(Box)(({ theme }) => ({
  margin: '5rem auto',
  width: '80%',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gridGap: '2rem',
  height: '100%'
}))

function VideosPages() {
  const { videos, categorias, data } = useContext(VideosContext)

  return (
    <>
      <FormSearch />
      <BoxVideos>
        {videos.length === 0 ? (
          <LinearProgress size={40} />
        ) : data.length > 0 ? (
          data.map((video) =>
            categorias.map(
              (categoria) =>
                video.categoria === categoria.nombre && (
                  <VideoCard
                    key={video.id}
                    video={video}
                    color={categoria.color}
                  />
                )
            )
          )
        ) : (
          <>
            {videos.map((video) =>
              categorias.map(
                (categoria) =>
                  video.categoria === categoria.nombre && (
                    <VideoCard
                      key={video.id}
                      video={video}
                      color={categoria.color}
                    />
                  )
              )
            )}
          </>
        )}
      </BoxVideos>
    </>
  )
}

export default VideosPages
