import React from 'react'
import {Link} from 'react-router-dom'
import cry from '../Assests/bitcoin-15482.png'

const btn = {

  width:'200px',
  height: '40px',
  padding: '15px',
  display:'flex',
  justifyContent:'center',
  alignItems: 'center',
  marginTop: '20px',
  fontSize:'16px',
  backgroundColor:'blueviolet',
  border:'none',
  outline: 'none',
  color:'white'

}

const Home = () => {
  
  return (
    <div className='home'>
      <img src={cry} alt="" />
       <span>XCrypto</span>
       <Link to='/coins'>
       <button style={btn}>Explore  Coins</button>
       </Link>
       
    </div>
  )
}

export default Home