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
  color: `${colorWhite}`,
  lineHeight: '1.5rem'
}))

const VideoCardMain = styled(Card)(({ theme }) => ({
  margin: '0 auto',
  width: '100%',
  height: '100%',
  borderRadius: '25px'
}))

const BoxModal = styled(Box)(({ theme }) => ({
  position: 'relative',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  paddingTop: '42.25%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  [theme.breakpoints.down('md')]: {
    paddingTop: '56.25%'
  }
}))

function VideoCard({ video, color }) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const VideoBox = styled(Box)(({ theme }) => ({
    border: `3px solid ${color}`,
    margin: '0 1rem',

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
    background: `${color}`,
    height: '100%'
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
        <BoxModal>
          <ReactPlayer
            url={video.linkVideo}
            width='100%'
            height='100%'
            style={{ position: 'absolute', top: '0', left: '0' }}
            controls
          />
        </BoxModal>
      </Modal>
    </>
  )
}

VideoCard.propTypes = {
  video: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired
}

export default VideoCard
