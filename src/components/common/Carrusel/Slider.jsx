import { useContext } from 'react'
import { VideosContext } from '../../../Context/Context.jsx'
import { Box, CircularProgress, Typography } from '@mui/material'
import { colorWhite } from '../../UI/variablesStyle.js'
import VideoCard from './VideoCard'
import Slider from 'react-slick'

function SliderComponent() {
  const { videos, categorias } = useContext(VideosContext)
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: videos?.length >= 3 ? 3 : 1,
    swipeToSlide: true
  }

  return (
    <>
      {videos?.length === 0 && categorias?.length === 0 ? (
        <CircularProgress />
      ) : (
        categorias?.map((categoria) => (
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
                padding: '1rem'
              }}>
              {categoria.nombre}
            </Typography>
            <Slider {...settings}>
              {videos?.map(
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
        ))
      )}
    </>
  )
}

export default SliderComponent
