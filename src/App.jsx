import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './Global'
import { Toaster } from 'react-hot-toast'
import DefaultPage from './components/pages/DefaultPage/DefaultPage'
import Home from './components/pages/Home/Home'
import FormVideoPages from './components/pages/FormPages/FormVideoPages'
import FormCategoriaPages from './components/pages/FormPages/FormCategoriaPages'
import VideosPages from './components/pages/VideosPages/VideosPages'

function App() {
  return (
    <Router>
      <Toaster />
      <GlobalStyle />
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
    </Router>
  )
}

export default App
