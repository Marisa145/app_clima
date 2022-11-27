import React from 'react'
import { useState } from 'react'

const WeatherCard = ({weather, temp}) => {
  const [isCelsius, setIsCelsius] = useState(true)
    console.log(weather)
    const handleClick = ()=> setIsCelsius(!isCelsius)
  return (
    <article className='card'>
        <h1 className='card__title'>Weather App</h1>
        <h2 className='card__subtitle'>{weather?.name}, {weather?.sys.country}</h2>
        <section className='card__icon-container'>
            <img src={weather && `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" className='card__icon'/>
            

        </section>
        <section className='card__info'>
            <h3 className='card__description'>"{weather?.weather[0].description}"</h3>
             <ul className='card__list'>
                <li className='card__item'>Wind Speed<span className='card__span'> {weather?.wind.speed}m/s</span></li>
                <li className='card__item'>Clouds<span className='card__span'> {weather?.clouds.all} %</span></li>
                <li className='card__item'>Pressure<span className='card__span'> {weather?.main.pressure} mb</span></li>
             </ul>
        </section>
        <h3 className="card__temp">
          {
            isCelsius ? 
              `${temp?.celsius} ºC`
            : 
              `${temp?.farenheit} ºF`
          }
        </h3>
        <footer className='card__footer'>
        <button onClick={handleClick} className="card__btn">Change to {isCelsius?'ºF':'ºC'}</button>

        </footer>

    </article>
  )
}

export default WeatherCard