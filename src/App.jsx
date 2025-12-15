import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import WeatherInformations from './components/WeatherInformations/Weatherinformations'
import WeekWeatherInformations from './components/WeekWeatherInformations/WeekWeatherInformations'

function App() {
    const [weather, setWeather] = useState(null)
    const [weekWeather, setWeekWeather] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [error, setError] = useState(null)
    const inputRef = useRef()

    async function searchCity() {
        setIsLoaded(false) 
        setWeather(null) 
        setWeekWeather(null) 
        setError(null)

        const city = inputRef.current.value

        const apiKey = 'a80b41802124f8747e82f098ca296657'
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br&units=metric`
        const apiWeekUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&lang=pt_br&units=metric`

        try {

            const [infoApi, infoApiWeek] = await Promise.all([
                axios.get(apiUrl),
                axios.get(apiWeekUrl)
            ])


            setWeather(infoApi.data)
            setWeekWeather(infoApiWeek.data)
            
            setIsLoaded(true) 

        } catch (err) {
            
            console.error("Erro na busca:", err)
            setError("Não foi possível encontrar a cidade ou houve um erro na API.")
            setIsLoaded(false)
        }
    }

    const fadeClass = isLoaded ? 'fade-in' : 'fade-out';

    return (
        <div className="container">
            <h1>Previsão do Tempo</h1>
            <div className="input-wrapper">
                <input ref={inputRef} type="text" placeholder='Digite Uma Cidade' />
                <button onClick={searchCity}>Search</button>
            </div>
            
            {error && <p className="error-message">{error}</p>}

            
            <div className={`weather-results ${fadeClass}`}>
                {weather && <WeatherInformations weatherInfos={weather} />}
                {weekWeather && <WeekWeatherInformations weekInfos={weekWeather} />}
            </div>
        </div>
    )
}

export default App