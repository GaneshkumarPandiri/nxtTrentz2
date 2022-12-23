import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Products = props => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    const {history} = props
    history.replace('/login/')
  }
  return (
    <>
      <Header />
      <div className="content-cart">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
          alt="products"
          className="image-style"
        />
      </div>
    </>
  )
}

export default withRouter(Products)
