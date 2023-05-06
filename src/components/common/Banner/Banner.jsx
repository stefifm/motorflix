import { Card, CardMedia } from '@mui/material'
import banner from '../../../assets/img/banner.png'
import { styled } from '@mui/material/styles'

const BannerBox = styled(Card)(({ theme }) => ({
  marginTop: '4rem'
}))

const BannerImg = styled(CardMedia)(({ theme }) => ({
  width: '100%',
  objectFit: 'cover'
}))

function Banner() {
  return (
    <BannerBox>
      <BannerImg
        component='img'
        image={banner}
        alt='banner'
      />
    </BannerBox>
  )
}

export default Banner
