import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navcontainer'>
        <div className='header'>
          <span>XCrypto.</span>
        </div>
        <div className='linkheader'>
            <Link to='/'>Home</Link>
            <Link to='/exchanges'>Exchanges</Link>
            <Link to='/coins'>Coins</Link>

        </div>
    </div>
  )
}

export default Navbar