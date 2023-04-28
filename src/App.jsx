import { GlobalStyle } from './Global'
import DefaultPage from './components/pages/DefaultPage/DefaultPage'
import Home from './components/pages/Home/Home'

function App() {
  return (
    <>
      <GlobalStyle />
      <DefaultPage>
        <Home />
      </DefaultPage>
    </>
  )
}

export default App
