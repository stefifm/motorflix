import { useContext } from 'react'
import { VideosContext } from '../../../Context/Context.jsx'
import { Box, Typography } from '@mui/material'
import { colorWhite } from '../../UI/variablesStyle.js'
import VideoCard from './VideoCard'
import Slider from 'react-slick'

function SliderComponent() {
  const { getCategorias, getVideos } = useContext(VideosContext)
  const categorias = getCategorias()
  const videos = getVideos()

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    swipeToSlide: true,
  }
  return (
    <>
      {categorias.map((categoria) => (
        <Box
          key={categoria.id}
          sx={{ margin: '3rem' }}>
          <Typography
            variant='h3'
            sx={{
              background: `${categoria.color}`,
              marginBottom: '2rem',
              width: '10%',
              textAlign: 'center',
              color: `${colorWhite}`,
              padding: '1rem',
            }}>
            {categoria.nombre}
          </Typography>
          <Slider {...settings}>
            {videos.map(
              (video) =>
                video.categoria === categoria.nombre && (
                  <VideoCard
                    key={video.id}
                    video={video}
                    color={categoria.color}
                  />
                )
            )}
          </Slider>
        </Box>
      ))}
    </>
  )
}

export default SliderComponent
