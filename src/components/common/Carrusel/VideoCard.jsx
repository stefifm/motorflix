import PropTypes from 'prop-types'
import { Box, Card, CardMedia, CardContent, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { colorWhite } from '../../UI/variablesStyle.js'

const VideoCardImg = styled(CardMedia)(({ theme }) => ({
  width: '100%',
  objectFit: 'cover',
  borderRadius: '25px 25px 0 0',
}))

const VideoText1 = styled(Typography)(({ theme }) => ({
  color: `${colorWhite}`,
  paddingBottom: '1rem',
}))

const VideoText2 = styled(Typography)(({ theme }) => ({
  color: `${colorWhite}`,
}))

const VideoCardMain = styled(Card)(({ theme }) => ({
  margin: '0',
  borderRadius: '25px',
}))

function VideoCard({ video, color }) {
  const VideoBox = styled(Box)(({ theme }) => ({
    margin: '0 1rem',
    border: `3px solid ${color}`,
    width: '30rem',
    borderRadius: '30px',
    boxSizing: 'border-box',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      cursor: 'pointer',
      boxShadow: `0 0 30px 1px ${color}`,
      transform: 'scale(0.98)',
    },
  }))

  const VideoCardText = styled(CardContent)(({ theme }) => ({
    background: `${color}`,
  }))
  return (
    <>
      <VideoBox key={video.id}>
        <VideoCardMain>
          <VideoCardImg
            component='img'
            image={video.linkImage}
            alt={video.titulo}
          />
          <VideoCardText>
            <VideoText1 variant='h5'> {video.titulo} </VideoText1>
            <VideoText2 variant='p'> {video.descripcion} </VideoText2>
          </VideoCardText>
        </VideoCardMain>
      </VideoBox>
    </>
  )
}

VideoCard.propTypes = {
  video: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
}

export default VideoCard
