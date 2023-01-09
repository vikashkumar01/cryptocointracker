import axios from 'axios'
import React,{useEffect,useState} from 'react'



const Exchanges = () => {

  const[coins,setCoins]= useState([])

  useEffect(() => {
     
     const  fetchData= async() => {
        const {data} = await axios.get('https://api.coingecko.com/api/v3/exchanges')

        setCoins(data)
      }
  
       fetchData()
  }, [])
  
  return (
    <div className='coinContainer'>
      <div className='headingContainer'>
        <h1>Exchanges</h1>
      </div>
     <div className='coindetailsContainer'>
      {
        coins.map((x, i) => (

          <div className='coindetails' key={i}>
            <h3>{x.trust_score_rank}</h3>
            <img src={x.image} alt="" />
            <h3>{x.name}</h3>
          </div>

        ))
      }
      </div>
    </div>
  )
}

export default Exchanges