import PropTypes from 'prop-types'
import { Header, Footer } from '../../common'

function DefaultPage({ children }) {
  return (
    <>
      <Header />

      {children}

      <Footer />
    </>
  )
}

DefaultPage.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DefaultPage
