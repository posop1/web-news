/* eslint-disable @next/next/no-img-element */
import axios from 'axios'
import { useEffect, useState } from 'react'
import { IWeather } from '../../types/types'
import s from './WeatherBadge.module.scss'

const WeatherBadge: React.FC = () => {
  const [weather, setWeather] = useState<IWeather>()

  useEffect(() => {
    const fetchWeather = async () => {
      const lat: number = 60.94312
      const lon: number = 76.54337
      const API_key = 'ffae1cfd3f9b0d3b0c574eacf2702d6a'
      const { data } = await axios.get<IWeather>(
        `https://api.openweathermap.org/data/2.5/weather?lang=ru&lat=${lat}&lon=${lon}&units=metric&appid=${API_key}`
      )
      setWeather(data)
    }
    fetchWeather()
  }, [])

  console.log(weather)

  return (
    <div className={s.WeatherBadge}>
      <div className={s.country__container}>
        <p>
          {weather?.name}, {weather?.sys.country}
        </p>
      </div>
      <hr className={s.hr} />
      <div className={s.weather__container}>
        <div>
          <p>
            {weather?.weather[0].description &&
              weather?.weather[0].description.charAt(0).toUpperCase() +
                weather?.weather[0].description.slice(1)}
          </p>
          <span>{weather?.main.temp.toString().slice(0, 3)}</span>
        </div>
        <img
          src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`}
          alt="weather"
        />
      </div>
      <div className={s.temp__type__container}>
        <p>{weather?.wind.speed} м/c</p>
      </div>
    </div>
  )
}

export default WeatherBadge
