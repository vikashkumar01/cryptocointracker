import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { BsFillArrowDownSquareFill,BsFillArrowUpSquareFill } from 'react-icons/bs';
import Chart from './Chart';

const Coindetails = () => {

  const [coin, setCoin] = useState({})
  const [currency, setCurrency] = useState('inr')
  const [days, setDays] = useState('24h')
  const [chartarr,setChartarr] = useState([])

  const param = useParams()
  const currencysymbol = currency === 'inr' ? '₹' : currency === 'eur' ? '€' : '$'
  const btns=['24h','7d','14d','30d','60d','200d','365d','max']

  useEffect(() => {

    const fetchcoin = async () => {
      const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${param.id}`)

      const { data:chartData  } = await axios.get(`https://api.coingecko.com/api/v3/coins/${param.id}/market_chart?vs_currency=${currency}&days=${days}`)

      setCoin(data)
      setChartarr(chartData.prices)
    }

    fetchcoin()
  }, [param.id,currency,days])

  return (
    <div className='singleCoinContainer'>
      <h1>{coin.name}</h1>

      <div className='linechart'>

        <Chart arr={chartarr} currency={currencysymbol} days={days}/>
        

      </div>

      <div className='btnarr'>
      {
          btns.map((item,i)=>(
            <button className='btn' key={i} onClick={()=>{setDays(item)}}>{item}</button>
          ))
        }
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


      <div className='alldetailinformation'>

        <div className='allinformation'>
          <img src={coin.image?.large} alt="" />
          <p>{Date(coin?.market_data?.last_updated).split('G')[0]}</p>
        </div>

        <div className='allinformation'>
          <h2>{coin.market_cap_rank}</h2>
        </div>

        <div className='allinformation'>
          <h3>{coin.name}</h3>
          <h4>{currencysymbol}{coin.market_data?.current_price[currency]}</h4>

        </div>

        <div className='allinformation'>
          {
            coin.market_data?.price_change_percentage_24h > 0 ?
              <BsFillArrowUpSquareFill size={25} color={'green'}/> : <BsFillArrowDownSquareFill size={25} color={'red'}/>
          }
          <h4>{coin.market_data?.price_change_percentage_24h}%</h4>

        </div>

        <div className='allinformation'>
          <h3>Max Supply</h3>
          <h4>{coin.market_data?.max_supply}</h4>
        </div>

        <div className='allinformation'>
          <h3>Circulating Supply</h3>
          <h4>{coin.market_data?.circulating_supply}</h4>
        </div>

        <div className='allinformation'>
          <h3>Market Cap</h3>
          <h4>{currencysymbol} {coin.market_data?.market_cap[currency]}</h4>
        </div>

        <div className='allinformation'>
          <h3>All Time Low</h3>
          <h4>{currencysymbol} {coin.market_data?.atl[currency]}</h4>
        </div>

        <div className='allinformation'>
          <h3>All Time High</h3>
          <h4>{currencysymbol} {coin.market_data?.ath[currency]}</h4>
        </div>


      </div>
    </div>
  )
}

export default Coindetails