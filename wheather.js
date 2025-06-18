const apiKey = '03f82eefdb64f43f063a1b326054153b';

const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');
const weatherCard = document.getElementById('weather-card');
const cityName = document.getElementById('city-name');
const dateTime = document.getElementById('date-time');
const weatherIcon = document.getElementById('weather-icon');
const temperature = document.getElementById('temperature');
const condition = document.getElementById('condition');
const searchToggle = document.querySelector('.search-toggle');
const searchContainer = document.querySelector('.search-container');

searchBtn.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (city) {
    fetchWeather(city);
  }
});

searchToggle.addEventListener('click', () => {
  searchContainer.style.display = searchContainer.style.display === 'block' ? 'none' : 'block';
});

function fetchWeather(city) {
  fetch(`${apiUrl}${city}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) {
        updateUI(data);
      } else {
        alert('City not found');
      }
    })
    .catch(error => console.error('Error fetching weather data:', error));
}

function updateUI(data) {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  const formattedDate = now.toLocaleDateString('en-US', options);

  cityName.textContent = data.name;
  dateTime.textContent = formattedDate;
  weatherIcon.textContent = getWeatherIcon(data.weather[0].main);
  temperature.textContent = `${Math.round(data.main.temp)}°C`;
  condition.textContent = data.weather[0].description;
}

function getWeatherIcon(condition) {
  const icons = {
    Clear: '☀️',
    Clouds: '☁️',
    Rain: '🌧️',
    Snow: '❄️',
    Thunderstorm: '⚡',
    Drizzle: '🌦️',
    Mist: '🌫️'
  };
  return icons[condition] || '🌈';
}
