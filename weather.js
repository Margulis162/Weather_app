import axios from "axios"
// https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,weathercode,windspeed_10m&hourly=temperature_2m,apparent_temperature,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&timeformat=unixtime&timezone=America%2FChicago


// const


// f(x)
export function getWeather( lat, lon, timezone){
    return axios.get("https://api.open-meteo.com/v1/forecast?1&current=temperature_2m,weathercode,windspeed_10m&hourly=temperature_2m,apparent_temperature,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&timeformat=unixtime", 
    {
        params:{
            latitude: lat,
            longitude: lon,
            timezone,
        }})
};

// flow 