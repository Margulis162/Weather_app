import axios from "axios"
// https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,weathercode,windspeed_10m&hourly=temperature_2m,apparent_temperature,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&timeformat=unixtime&timezone=America%2FChicago

// https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,is_day,weathercode,windspeed_10m&hourly=temperature_2m,apparent_temperature,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timeformat=unixtime

// https://api.open-meteo.com/v1/forecast?&current=temperature_2m,is_day,weathercode,windspeed_10m&hourly=temperature_2m,apparent_temperature,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&timeformat=unixtime

// 


// f(x)
export function getWeather( lat, lon, timezone, url){
    return axios.get(url, 
    {
        params:{
            latitude: lat,
            longitude: lon,
            timezone,
        }})
        .then(({data}) => {
            console.log(data);
            return {
                current: parseCurrentWeather(data),
                daily: parseDailyWeather(data),
                hourly: parseHourlyWeather(data),
            }
        })
};

function parseCurrentWeather({current, daily}) { //destructuring obj getting two param out of it

    const{  is_day: day, temperature_2m: currentTemp, windspeed_10m: windSpeed, weathercode: iconCode,} = current; //further destructuring

    const {
        temperature_2m_max: [maxTemp],
        temperature_2m_min: [minTemp],
        apparent_temperature_max: [maxFeelsLike],
        apparent_temperature_min: [minFeelsLike],
        precipitation_sum: [precip],
    } = daily;

    //new anonymous obj returned
    return{
        day: day,
        currentTemp: Math.round(currentTemp),
        highTemp: Math.round(maxTemp),
        lowTemp: Math.round(minTemp),
        highFeelsLike:  Math.round(maxFeelsLike), 
        lowFeelsLike:  Math.round(minFeelsLike),
        windSpeed:  Math.round(windSpeed),
        precip: Math.round(precip*100)/100,
        iconCode,

    }
}

function parseDailyWeather({daily}){
    return daily.time.map((time, index) => {
        return {
            timestamp: time*1000,
            iconCode: daily.weathercode[index],
            maxTemp: Math.round(daily.temperature_2m_max[index]),
        }
        
    });
}

function parseHourlyWeather({hourly, current}){
    return hourly.time.map((time, index) =>{
        return{
            timestamp: time*1000,
            iconCode: hourly.weathercode[index],
            temp: Math.round(hourly.temperature_2m[index]),
            feelsLike: Math.round(hourly.apparent_temperature[index]),
            windSpeed: Math.round(hourly.windspeed_10m[index]),
            precip: Math.round(hourly.precipitation[index] * 100) /100,
     }
     }).filter(({timestamp}) => timestamp >= current.time * 1000)
   
    }

// flow 