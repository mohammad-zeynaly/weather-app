// Start Weather App Code :))
const searchBoxInputElem = document.querySelector("#search-box"),
searchBtnElem = document.querySelector("#search-btn"),
locationElem = document.querySelector("#location"),
dateElem = document.querySelector("#date"),
tempElem = document.querySelector("#temp"),
weatherElem = document.querySelector("#weather"),
minAndMaxTemp = document.querySelector("#hi-low");


// Now Date 
function showDate () {
    const nowDate = new Date();

    let configs = {
        weekday : 'long',
        year : 'numeric',
        month: 'long',
        day: 'numeric',
    };

    return nowDate.toLocaleDateString("en-en",configs);
}


// Fetch Api 
function fetchApiWeather () {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchBoxInputElem.value}&appid=ed2609297dc2dc54ce1b129254fa6a3d`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        showDataToDom(data)
    })
}


// Data Add To Dom 
function showDataToDom (weatherData) {
    locationElem.textContent = `${weatherData.name} , ${weatherData.sys.country}`;

    dateElem.innerHTML = showDate();

    tempElem.innerHTML = `${Math.floor(weatherData.main.temp - 273.15)}°c`;

    weatherElem.innerHTML = `${weatherData.weather[0].main}`;

   minAndMaxTemp.innerHTML = `${Math.floor(weatherData.main.temp_min -  273.15)}°c /  ${Math.floor(weatherData.main.temp_max - 273.15)}°c`
}

//Enter key search Your Result Weather 
function showWeatherBtn () {
    fetchApiWeather();
}


// Enter key Enter Your Result Weather 
function searchShowWeather (event) {
    if(event.keyCode === 13){
        fetchApiWeather();
    }
}

// Set Events
searchBoxInputElem.addEventListener("keydown",searchShowWeather)
searchBtnElem.addEventListener("click",showWeatherBtn)