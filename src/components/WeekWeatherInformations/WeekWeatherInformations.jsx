
import './WeekWeatherInformations.css'

function WeekWeatherInformations({ weekInfos }) {

    console.log(weekInfos)
    let dailyForecast = {}

    for (let forecast of weekInfos.list) {
        const date = new Date(forecast.dt * 1000).toLocaleDateString()

        if (!dailyForecast[date]) {
            dailyForecast[date] = forecast
        }

    }

    const nextFiveDaysForecast = Object.values(dailyForecast).slice(1, 6)

    function convertDateTime(date) {
        const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit' })
        return newDate;
    }


    return (
        <div className='weather-container'>

            <h3>Previsão da Semana</h3>
            <div className="weather-card">
                {nextFiveDaysForecast.map(forecast => (

                    <div key={forecast.dt} className="weather-item">
                        <p className="forecast-day">{convertDateTime(forecast)}</p>

                        <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt="" />

                        <p className="forecast-description">{forecast.weather[0].description}</p>

                        <p className='forecast-temp'>Min {Math.round(forecast.main.temp_min)}°C / Máx {Math.round(forecast.main.temp_max)}°C</p>


                    </div>
                ))}
            </div>

        </div>
    )
}

export default WeekWeatherInformations