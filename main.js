// import
// import ".style.css"
import { getWeather } from "./weather.js"
import { ICON_MAP } from "./iconmap.js"
// const
const currentIcon = document.querySelector("[data-current-icon]");

const dailySection = document.querySelector("[data-day-section]");
const dayCardTemplate = document.getElementById("day-card-template");
const DAY_FORMATTER = new Intl.DateTimeFormat(undefined, {weekday: "long"})

const hourlySection = document.querySelector("[data-hour-section]");
const hourRowTemplate = document.getElementById("hour-row-template");
const HOUR_FORMATTER = new Intl.DateTimeFormat(undefined, {hour: "numeric"})

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
    renderHourlyWeather(data.hourly);
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
    dailySection.innerHTML = "";
    daily.forEach(day => {
        const element = dayCardTemplate.content.cloneNode(true)
        setValue("temp", day.maxTemp, {parent: element});
        setValue("date", DAY_FORMATTER.format(day.timestamp), {parent: element});
        element.querySelector("[data-icon]").src = getIconUrl(day.iconCode);
        dailySection.append(element);
    })}

    function renderHourlyWeather(hourly){
        hourlySection.innerHTML = "";
        hourly.forEach(hour => {
            const element = hourRowTemplate.content.cloneNode(true);
            console.log(element);
            setValue("temp", hour.maxTemp, {parent: element});
            setValue("fl-temp", hour.feelsLike, {parent: element});
            setValue("wind", hour.windSpeed, {parent: element});
            setValue("precip", hour.precip, {parent: element});
            setValue("day", DAY_FORMATTER.format(hour.timestamp), {parent: element});
            setValue("time", HOUR_FORMATTER.format(hour.timestamp), {parent: element});
            element.querySelector("[data-icon]").src = getIconUrl(hour.iconCode);
            hourlySection.append(element);
        })}
      
  
// flow 