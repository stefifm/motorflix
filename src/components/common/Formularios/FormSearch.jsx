import { useContext, useState } from 'react'
import { VideosContext } from '../../../Context/Context'
import { Box, TextField, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { colorGrayMedium, colorPrimary } from '../../UI/variablesStyle'
import Boton from '../Button/Boton'

const FormMain = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '7rem auto',
  width: '50%',
  backgroundColor: `${colorGrayMedium}`,
  padding: '1rem',
  boxSizing: 'border-box',
  borderRadius: '0.5rem',
  border: `2px solid ${colorPrimary}`,
  boxShadow: `0 0 10px 1px ${colorPrimary}`,
  [theme.breakpoints.down('md')]: {
    width: '80%'
  }
}))

const TituloSearch = styled(Typography)(({ theme }) => ({
  paddingBottom: '1rem'
}))

const BoxSearch = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '1rem',
  width: '80%',
  padding: '1rem',
  boxSizing: 'border-box',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: '0.5rem'
  }
}))

function FormSearch() {
  const { setSearch } = useContext(VideosContext)
  const [query, setQuery] = useState('')

  const handleSearch = (e) => {
    setQuery(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setSearch(query)
  }

  return (
    <FormMain onSubmit={handleSubmit}>
      <TituloSearch
        variant='h4'
        component='h2'>
        Buscar vídeos
      </TituloSearch>
      <BoxSearch>
        <TextField
          type='search'
          id='search'
          label='Buscar'
          variant='outlined'
          size='small'
          value={query}
          fullWidth
          onChange={handleSearch}
        />
        <Boton>Buscar</Boton>
      </BoxSearch>
    </FormMain>
  )
}

export default FormSearch
