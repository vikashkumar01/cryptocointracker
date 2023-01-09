
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


const Coins = () => {

  const [coinarray, setCoinsArray] = useState([])
  const [currency, setCurrency] = useState('inr')
  const [page, setPage] = useState(1);

  console.log(page)

  const currencysymbol = currency === 'inr' ? '₹' : currency === 'eur' ? '€' : '$'
  const btns = new Array(132).fill(1)

  useEffect(() => {

    const fetchData = async () => {
      const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&page=${page}`)

      setCoinsArray(data)
    }

    fetchData()
  }, [currency, page])

  return (
    <div className='coinContainer'>
      <div className='headingContainer'>
        <h1>Coins</h1>
      </div>
      <div className='radio'>
        <div>
          <input type="radio" name="fav" value="inr"
            checked={currency === 'inr'}
            onChange={e => { setCurrency(e.target.value) }} />
          <label >INR</label><br />
        </div>

        <div>

          <input type="radio" name="fav" value="usd"
            checked={currency === 'usd'}
            onChange={e => { setCurrency(e.target.value) }} />
          <label >USD</label><br />
        </div>

        <div>
          <input type="radio" name="fav" value="eur" checked={currency === 'eur'}
            onChange={e => { setCurrency(e.target.value) }} />
          <label >EUR</label>
        </div>
      </div>
      <div className='coindetailsContainer'>
        {
          coinarray.map((x, i) => (
            <Link to={`/coin/${x.id}`} key={i}>
              <div className='coindetails' >
                <h2>{x.market_cap_rank}</h2>
                <img src={x.image} alt="" />
                <h3>{currencysymbol} {x.current_price}</h3>
                <h3>{x.name}</h3>
              </div>
            </Link>

          ))
        }
      </div>
      <div className='btnarray'>
        {
          btns.map((item, i) => (
            <button onClick={e => { setPage(i + 1) }}>{i + 1}</button>
          ))
        }
      </div>
    </div>
  )
}

export default Coins