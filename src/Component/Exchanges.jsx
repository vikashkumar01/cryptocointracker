import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Exchanges = () => {

  const [coins, setCoins] = useState([])

  useEffect(() => {

    const fetchData = async () => {
      const { data } = await axios.get('https://api.coingecko.com/api/v3/exchanges')

      setCoins(data)
    }

    fetchData()
  }, [])

  console.log(coins)
  return (
    <div className='coinContainer'>
      <div className='headingContainer'>
        <h1>Top 100 Exchanges</h1>
      </div>

      <div className='coindetailsContainer'>
        <table>
          <thead>
            <th>Rank</th>
            <th>Name</th>
            <th>Trust_Score</th>
            <th>Trade_Volume</th>
            <th>Country</th>
            <th>Year Established</th>
          </thead>
          <tbody>
            {
              coins.map((x, i) => (
                <tr className='coindetails' key={i}>
                  <td><h3>{x.trust_score_rank}</h3></td>
                  <td><img src={x.image} alt="" /><h3>{x.name}</h3></td>
                  <td><h3>{x.trust_score}</h3></td>
                  <td><h3>{x.trade_volume_24h_btc.toFixed(2)}</h3></td>
                  <td><h3>{(x.country!==null)?x.country:"NA"}</h3></td>
                  <td><h3>{(x.year_established!==null)?x.year_established:"NA"}</h3></td>
                </tr>
              ))
            }
          </tbody>

        </table>
      </div>
    </div>
  )
}

export default Exchanges