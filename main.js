// import
// import ".style.css"
import { getWeather } from "./weather.js"
// const


// f(x)
getWeather( 10, 10,  Intl.DateTimeFormat().resolvedOptions().timeZone).then( res => {
    console.log(res.data)
})

// flow 