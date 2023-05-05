import PropTypes from 'prop-types'
import ReactPlayer from 'react-player/youtube'
import { Box, Card, CardMedia, CardContent, Typography, Modal } from '@mui/material'
import { styled } from '@mui/material/styles'
import { colorWhite } from '../../UI/variablesStyle.js'
import { useState } from 'react'

const VideoCardImg = styled(CardMedia)(({ theme }) => ({
  width: '100%',
  objectFit: 'cover',
  borderRadius: '25px 25px 0 0'
}))

const VideoText1 = styled(Typography)(({ theme }) => ({
  color: `${colorWhite}`,
  paddingBottom: '1rem'
}))

const VideoText2 = styled(Typography)(({ theme }) => ({
  color: `${colorWhite}`
}))

const VideoCardMain = styled(Card)(({ theme }) => ({
  margin: '0',
  borderRadius: '25px'
}))

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  height: '60%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24
}

function VideoCard({ video, color }) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

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
      transform: 'scale(0.98)'
    }
  }))

  const VideoCardText = styled(CardContent)(({ theme }) => ({
    background: `${color}`
  }))
  return (
    <>
      <VideoBox
        onClick={handleOpen}
        key={video.id}>
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

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box sx={style}>
          <ReactPlayer
            url={video.linkVideo}
            width='100%'
            height='100%'
            controls
          />
        </Box>
      </Modal>
    </>
  )
}

VideoCard.propTypes = {
  video: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired
}

export default VideoCard
