var cloud_pct = document.getElementById("cloud_pct");
var temp = document.getElementById("temp");
var feels_like = document.getElementById("feels_like");
var humidity = document.getElementById("humidity");
var min_temp = document.getElementById("min_temp");
var max_temp = document.getElementById("max_temp");
var wind_speed = document.getElementById("wind_speed");
var wind_degrees = document.getElementById("wind_degrees");
var sunrise = document.getElementById("sunrise");
var sunset = document.getElementById("sunset")

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9f80f8a2eamsh233a08a53ef68cdp1e0abejsn766a03d55d4d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)=>{

    cityName.innerHTML = city

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options)
	.then(response => response.json())
	.then(response => {
        
        console.log(response)

        // cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
        })
	.catch(err => console.error(err));
}   

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")  