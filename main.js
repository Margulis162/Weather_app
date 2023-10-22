// import
// import ".style.css"
import { getWeather } from "./weather.js"
import { ICON_MAP } from "./iconmap.js"
// const
const currentIcon = document.querySelector("[data-current-icon]");
const dailySelection = document.querySelector("[data-day-section]");
const dayCardTemplate = document.getElementById("day-card-template");
const DAY_FORMATTER = new Intl.DateTimeFormat(undefined, {weekday: "long"})

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
    renderDailyWeather(data.daily);
    // renderHourlyWeather(hourly);
    document.body.classList.remove("blurred");
}

// helper function
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
}

function renderDailyWeather(daily){
    dailySelection.innerHTML = "";
    daily.forEach(day => {
        const element = dayCardTemplate.content.cloneNode(true)
        setValue("temp", day.maxTemp, {parent: element});
        setValue("date", DAY_FORMATTER.format(day.timestamp), {parent: element});
        element.querySelector("[data-icon]").src = getIconUrl(day.iconCode);
        dailySelection.append(element);
    })}
  
// flow 