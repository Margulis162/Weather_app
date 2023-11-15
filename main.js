// import
// import ".style.css"
import { getWeather } from "weather.js"
import { ICON_MAP } from "iconmap_day.js"
import { ICON_MAP_NIGHT } from "iconmap_night.js"
// const
const currentIcon = document.querySelector("[data-current-icon]");
const dailySection = document.querySelector("[data-day-section]");
const dayCardTemplate = document.getElementById("day-card-template");
const DAY_FORMATTER = new Intl.DateTimeFormat(undefined, {weekday: "long"})

const hourlySection = document.querySelector("[data-hour-section]"); //tbody
const hourRowTemplateImperial = document.getElementById("hour-row-template-imperial");
const hourRowTemplateMetric = document.getElementById("hour-row-template-metric");


const HOUR_FORMATTER_1 = new Intl.DateTimeFormat(undefined, {hour: "numeric"});
const HOUR_FORMATTER_2 = new Intl.DateTimeFormat(undefined, {hour: "numeric", hour12: false,});
let current_hr_formatter = HOUR_FORMATTER_1;

const toggle = document.querySelector("[data-toggle-switch]");
const headerDegrees = document.querySelector("[data-header-degrees]");
const headerWind = document.querySelector("[data-header-wind]");
const headerPercip = document.querySelector("[data-header-percip]");

let url = "https://api.open-meteo.com/v1/forecast?&current=temperature_2m,is_day,weathercode,windspeed_10m&hourly=temperature_2m,apparent_temperature,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timeformat=unixtime";

const url_fahrenheit = "https://api.open-meteo.com/v1/forecast?&current=temperature_2m,is_day,weathercode,windspeed_10m&hourly=temperature_2m,apparent_temperature,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timeformat=unixtime";

const url_celsius ="https://api.open-meteo.com/v1/forecast?&current=temperature_2m,is_day,weathercode,windspeed_10m&hourly=temperature_2m,apparent_temperature,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&timeformat=unixtime"

// f(x)

function positionSuccess({coords}){
    getWeather( coords.latitude, coords.longitude,  Intl.DateTimeFormat().resolvedOptions().timeZone, url).then(renderWeather
        ).catch(err => {
            console.error(err);
            alert("Error getting weather");
        })
    }

    function positionError(){
    alert("Something went wrong with getting your location. Please allow us to use your location and refresh the page");
}


function renderWeather(data){ 
    let template;
    if(toggle.classList[0] === "toggle-f"){
        template = hourRowTemplateImperial;
    }else{
        template = hourRowTemplateMetric;
    }
    console.log(data);
    dayNight(data.current);
    renderCurrentWeather(data.current);
    renderDailyWeather(data.daily, data.current);
    renderHourlyWeather(data.hourly, data.current, template, current_hr_formatter,);
    document.body.classList.remove("blurred");
}

// helper function
function setValue(selector, value, {parent = document} ={}){
    parent.querySelector(`[data-${selector}]`).textContent = value;
}

function setValueMetricHr(selector, value, {parent = document} ={}){
    parent.querySelector(`[data-${selector}]`).textContent = value + "hr";
}




function getIconUrl(iconCode, day){
    console.log(day);
    if(day === 0){
        return `./icons/${ICON_MAP_NIGHT.get(iconCode)}.svg`
    }else{
        return `./icons/${ICON_MAP.get(iconCode)}.svg`
    }
}

function  renderCurrentWeather(current){
    currentIcon.src = getIconUrl(current.iconCode, current.day);
    setValue("current-temp", current.currentTemp);
    setValue("current-high", current.highTemp);
    setValue("current-low", current.lowTemp);
    setValue("current-fl-high", current.highFeelsLike);
    setValue("current-fl-low", current.lowFeelsLike);
    setValue("current-wind", current.windSpeed);
    setValue("current-precip", current.precip);
}

function renderDailyWeather(daily, current){
    dailySection.innerHTML = "";
    daily.forEach(day => {
        const element = dayCardTemplate.content.cloneNode(true)
        setValue("temp", day.maxTemp, {parent: element});
        setValue("date", DAY_FORMATTER.format(day.timestamp), {parent: element});
        element.querySelector("[data-icon]").src = getIconUrl(day.iconCode, current.day);
        dailySection.append(element);
    })}

  
    
    function renderHourlyWeather(hourly, current, template, current_hr_formatter,){
        hourlySection.innerHTML = "";
        // ajust to increase the amount of rows displaied
        const chopped = hourly.slice(0, 12);
        
        chopped.forEach(hour => {
            const element = template.content.cloneNode(true);
            setValue("temp", hour.temp, {parent: element});
            setValue("fl-temp", hour.feelsLike, {parent: element});
            setValue("wind", hour.windSpeed, {parent: element});
            setValue("precip", hour.precip, {parent: element});
            setValue("day", DAY_FORMATTER.format(hour.timestamp), {parent: element});
            setValue("time", current_hr_formatter.format(hour.timestamp), {parent: element});
            element.querySelector("[data-icon]").src = getIconUrl(hour.iconCode, current.day);
            hourlySection.append(element);
        })}
      
    function dayNight(current){
        if(current.day === 0){
            //  here will be the code changing icons to the ones with moon when appropriate
        }
    }
    
    // flow 
    navigator.geolocation.getCurrentPosition(positionSuccess, positionError);
        //  to metric
    toggle.addEventListener("click", () =>{
        if(toggle.classList[0] === "toggle-f"){
            toggle.classList.remove("toggle-f");
            toggle.classList.add("toggle-c");
            url = url_celsius;
            navigator.geolocation.getCurrentPosition(positionSuccess, positionError);

            // header
            headerDegrees.textContent = `\u00B0C`;
            headerWind.textContent ="km/s";
            headerPercip.textContent = "cm";

            // hourly weather
        
            current_hr_formatter = HOUR_FORMATTER_2;

        }
        
         // to imperial
        else{
            toggle.classList.remove("toggle-c");
            toggle.classList.add("toggle-f");
            url = url_fahrenheit;
            navigator.geolocation.getCurrentPosition(positionSuccess, positionError);
            // header 
            headerDegrees.textContent = `\u00B0F`;
            headerWind.textContent ="mph";
            headerPercip.textContent = "in";


            // hourly weather
            current_hr_formatter = HOUR_FORMATTER_1;
        }
    })

   