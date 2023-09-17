const apiKey = "65c0400439413325d4a931d4e17ca61c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const image = document.getElementById("weather-icon");

async function fetchWeather(){

    const city = document.querySelector(".search input").value;
    const response = await fetch(apiUrl + city +  `&appid=${apiKey}`)
    var data = await response.json();

    console.log(data); 

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed+" kmph";

    if(data.weather[0].main=='Haze'){
        image.src="icons/haze.png";
        console.log(data.weather[0].main);
    }
    if(data.weather[0].main=='Clouds'){
        image.src="icons/cloudy.png";
        console.log(data.weather[0].main);
    }
    if(data.weather[0].main=='Clear'){
        image.src="icons/sunny.png";
        console.log(data.weather[0].main);
    }
    if(data.weather[0].main=='Drizzle'){
        image.src="icons/drizzle.png";
        console.log(data.weather[0].main);
    }
    if(data.weather[0].main=='Mist'){
        image.src="icons/mist.png";
        console.log(data.weather[0].main);
    }
    if(data.weather[0].main=='Rain' || data.weather[0].main=='Thunderstorm'){
        image.src="icons/rainy.png";
        console.log(data.weather[0].main);
    }

    document.querySelector(".weather").style.display = "block";

    console.log(city);
}