const key = "80a0479440bebd35c775b20a9f1e8443";
const baseurl = "https://api.openweathermap.org/data/2.5/weather";

// *Event Listener function on Keypress
const searchInput = document.querySelector(".form-control");
searchInput.addEventListener("keypress", (event) => {
  if (event.keyCode == 13) {
    console.log(searchInput.value);
    GetWeather(searchInput.value);
  }
});

// *Get Weather Report
const GetWeather = (city) => {
  fetch(`${baseurl}?q=${city}$appid=key`)
    .then((weather) => {
      return weather.json();
    })
    .then(showWeather);
};

// *Show Weather Report
function showWeather(weather) {
  console.log(weather);
}
