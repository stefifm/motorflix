import { useContext } from 'react'
import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { VideosContext } from '../../../Context/Context'
import { VideoCard } from '../../common'

const BoxVideos = styled(Box)(({ theme }) => ({
  margin: '5rem auto',
  width: '100%',
  maxWidth: '800px',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'
}))

function VideosPages() {
  const { videos, categorias } = useContext(VideosContext)
  return (
    <BoxVideos>
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
    </BoxVideos>
  )
}

export default VideosPages
