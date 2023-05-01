import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './Global'
import DefaultPage from './components/pages/DefaultPage/DefaultPage'
import Home from './components/pages/Home/Home'
import FormPages from './components/pages/FormPages/FormPages'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <DefaultPage>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/formularios'
            element={<FormPages />}
          />
        </Routes>
      </DefaultPage>
    </Router>
  )
}

export default App
