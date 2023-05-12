import { useContext } from 'react'
import { VideosContext } from '../../../Context/Context.jsx'
import { Box, LinearProgress, Typography } from '@mui/material'
import { colorWhite } from '../../UI/variablesStyle.js'
import VideoCard from './VideoCard'
import Slider from 'react-slick'

function SliderComponent() {
  const { videos, categorias } = useContext(VideosContext)

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    swipeToSlide: true,

    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          swipeToSlide: true,
          infinite: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          swipeToSlide: true,
          infinite: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          swipeToSlide: true,
          infinite: false
        }
      }
    ]
  }

  return (
    <>
      {videos?.length === 0 && categorias?.length === 0 ? (
        <LinearProgress size={50} />
      ) : (
        categorias?.map((categoria) => (
          <Box
            key={categoria.id}
            sx={{ margin: '2rem 0' }}>
            <Typography
              variant='h3'
              sx={{
                background: `${categoria.color}`,
                marginBottom: '2rem',
                borderRadius: '25px',
                width: '10rem',
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
