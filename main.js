// import
// import ".style.css"
import { getWeather } from "./weather.js"
// const


// f(x)
getWeather( 10, 10,  Intl.DateTimeFormat().resolvedOptions().timeZone).then(renderWeather
).catch(err => {
    console.error(err);
    alert("Error getting weather");
})

function renderWeather(current, daily, hourly){
    renderCurrentWeather(current);
    // renderDailyWather(daily);
    // renderHourlyWeather(hourly);
    document.body.classList.remove("blurred");
}

function setValue(selector, value, {parent = document} ={}){
    parent.querySelector(`[data-${selector}]`).textContent = value;
}

function  renderCurrentWeather(current){
    setValue("current-temp", current.current.currentTemp);
    setValue("current-high", current.current.highTemp);
    setValue("current-low", current.current.lowTemp);
    setValue("current-fl-high", current.current.highFeelsLike);
    setValue("current-fl-low", current.current.lowFeelsLike);
    setValue("current-wind", current.current.windSpeed);
    setValue("current-precip", current.current.precip);
    console.log(current)
    // document.querySelector("[data-current-temp]").textContent = current.current.currentTemp;
    // console.log(current.currentTemp)
}

// flow 