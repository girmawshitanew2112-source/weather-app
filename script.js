const apikey ="493e9fc4224ff1d4d03e296856b23791";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const res = await fetch(apiUrl + city + `&appid=${apikey}`);

    if (res.status == 404){
     document.querySelector(".error p").style.display = "block";
     document.querySelector(".weather").style.display = "none";
    }else{
    var data = await res.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +" °c";
    document.querySelector(".wind").innerHTML = data.wind.speed +" km/h";
    document.querySelector(".humidity").innerHTML = data.main.humidity +" %";

     if (data.weather[0].main == "Clouds"){
        weatherIcon.src = "clouds.png";
    }else if (data.weather[0].main == "Clear"){
         weatherIcon.src = "drizzle.png";
    }else if (data.weather[0].main == "Drizzle"){
         weatherIcon.src = "rainy-day.png";
    }else if (data.weather[0].main == "Mist"){
         weatherIcon.src = "Mist.png";
    }
    else if (data.weather[0].main == "Rain"){
         weatherIcon.src = "heavy-rain (1).png";
    }
     document.querySelector(".error").style.display = "none";
     document.querySelector(".weather").style.display = "block";

     }
}
searchBtn.addEventListener("click", () =>{
    checkWeather(searchBox.value);
})

