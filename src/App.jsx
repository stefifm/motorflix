import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './Global'
import { Toaster } from 'react-hot-toast'
import DefaultPage from './components/pages/DefaultPage/DefaultPage'
import Home from './components/pages/Home/Home'
import FormVideoPages from './components/pages/FormPages/FormVideoPages'
import FormCategoriaPages from './components/pages/FormPages/FormCategoriaPages'
import VideosPages from './components/pages/VideosPages/VideosPages'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

const BoxMain = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  mt: `-${theme.spacing(8)}px`,
  flexShrink: 1
}))

function App() {
  return (
    <Router>
      <Toaster
        toastOptions={{
          style: {
            fontSize: '1.3rem',
            width: '100%',
            height: '100%'
          }
        }}
      />
      <GlobalStyle />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <BoxMain>
          <DefaultPage>
            <Routes>
              <Route
                path='/'
                element={<Home />}
              />
              <Route
                path='/videos'
                element={<VideosPages />}
              />
              <Route
                path='/crear-video'
                element={<FormVideoPages />}
              />
              <Route
                path='/crear-categoria'
                element={<FormCategoriaPages />}
              />
            </Routes>
          </DefaultPage>
        </BoxMain>
      </Box>
    </Router>
  )
}

export default App
