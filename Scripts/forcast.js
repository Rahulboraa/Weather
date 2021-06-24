const key = "80a0479440bebd35c775b20a9f1e8443";
const baseurl = "https://api.openweathermap.org/data/2.5/weather";

// *Event Listener function on Keypress
const inputBox = document.querySelector(".form-control");
inputBox.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    console.log(inputBox.value);
    getWeather(inputBox.value);
  }
});

// *Get Weather Report
function getWeather(city) {
  fetch(`${baseurl}?q=${city}&appid=${key}&units=metric`)
    .then((weather) => {
      return weather.json();
    })
    .then(showWeather);
}

// *Show Weather Reports
function showWeather(weather) {
  console.log(weather);

  let city = document.querySelector(".city");
  city.innerText = `${weather.name},${weather.sys.country}`;

  let weatherCondition = document.querySelector(".weather");
  weatherCondition.innerText = `${weather.weather[0].main}`;

  let temp = document.querySelector(".temp");
  temp.innerText = `${Math.round(weather.main.temp)}`;

  // let images = document.querySelector(".images");
  // images.innerHTML = 
}
