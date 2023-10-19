// import
// import ".style.css"
import { getWeather } from "./weather.js"
import { ICON_MAP } from "./iconmap.js"
// const
const currentIcon = document.querySelector("[data-current-icon]");

// f(x)
getWeather( 10, 10,  Intl.DateTimeFormat().resolvedOptions().timeZone).then(renderWeather
).catch(err => {
    console.error(err);
    alert("Error getting weather");
})

function renderWeather(data){ 
    // const {current, daily, hourly} = data;
    // renderCurrentWeather({current});
    renderCurrentWeather(data.current);
    // renderDailyWather(daily);
    // renderHourlyWeather(hourly);
    document.body.classList.remove("blurred");
}

function setValue(selector, value, {parent = document} ={}){
    parent.querySelector(`[data-${selector}]`).textContent = value;
}

function getIconUrl(iconCode){
    
    return `icons/${ICON_MAP.get(iconCode)}.svg`
}

function  renderCurrentWeather(current){
    currentIcon.src = getIconUrl(current.iconCode);
    setValue("current-temp", current.currentTemp);
    setValue("current-high", current.highTemp);
    setValue("current-low", current.lowTemp);
    setValue("current-fl-high", current.highFeelsLike);
    setValue("current-fl-low", current.lowFeelsLike);
    setValue("current-wind", current.windSpeed);
    setValue("current-precip", current.precip);
    
    // document.querySelector("[data-current-temp]").textContent = current.current.currentTemp;
    // console.log(current.currentTemp)
}

// flow 