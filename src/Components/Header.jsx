import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='ui pointing menu' style={{padding: '5px 30px'}}>
      <Link to='/' className="item active">
        Redux-Shop
      </Link>
      <div className="right menu">
        <div className="ui vertical animated button" tabIndex='0'>
          <div className="hidden content">shop</div>
          <div className="visible content">
            <i className="shop icon" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header