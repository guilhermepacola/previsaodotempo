<<<<<<< HEAD
import './Weatherinformations.css'

function WeatherInformations({ weatherInfos }) {

        function convertDateTime(date) {
        const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-BR', { weekday: 'long'})
        return newDate;
    }

    console.log(weatherInfos)
    return (
        <div className='weatherContainer'>
            <h2>{weatherInfos.name}</h2>
            <div className='weatherInfo'>
                <img src={`http://openweathermap.org/img/wn/${weatherInfos.weather[0].icon}.png`} />
                <p className='temperature'>{Math.round(weatherInfos.main.temp)}°C</p>
            </div>

            <p className='description'>{convertDateTime(weatherInfos)}, {weatherInfos.weather[0].description}</p>
            
            <div className='details'>
                <p>Sensação térmica: {Math.round(weatherInfos.main.feels_like)}°C</p>
                <p>Umidade:{weatherInfos.main.humidity}%</p>
                <p>Pressão: {weatherInfos.main.pressure}</p>
            </div>
        </div>
    )
}


=======
import './Weatherinformations.css'

function WeatherInformations({ weatherInfos }) {

        function convertDateTime(date) {
        const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-BR', { weekday: 'long'})
        return newDate;
    }

    console.log(weatherInfos)
    return (
        <div className='weatherContainer'>
            <h2>{weatherInfos.name}</h2>
            <div className='weatherInfo'>
                <img src={`http://openweathermap.org/img/wn/${weatherInfos.weather[0].icon}.png`} />
                <p className='temperature'>{Math.round(weatherInfos.main.temp)}°C</p>
            </div>

            <p className='description'>{convertDateTime(weatherInfos)}, {weatherInfos.weather[0].description}</p>
            
            <div className='details'>
                <p>Sensação térmica: {Math.round(weatherInfos.main.feels_like)}°C</p>
                <p>Umidade:{weatherInfos.main.humidity}%</p>
                <p>Pressão: {weatherInfos.main.pressure}</p>
            </div>
        </div>
    )
}


>>>>>>> 9a5c62f87f94b7038909be2a044b97ce4336adc5
export default WeatherInformations