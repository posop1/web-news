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
        `https://api.openweathermap.org/data/2.5/weather?lang=ru&lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`
      )
      setWeather(data)
    }
    fetchWeather()
  }, [])

  console.log(weather)

  return <div className={s.WeatherBadge}></div>
}

export default WeatherBadge
