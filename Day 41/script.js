

document.addEventListener("DOMContentLoaded", () => {
    const getWeatherBtn = document.getElementById("get-weather-btn");
    const cityInput = document.getElementById("city-input");
    const weatherInfo = document.getElementById("weather-info");
    const loadingIndicator = document.getElementById("loading");

    const apiKey = '43c0a0f0e9fbae6d9d284f7478516014'; // Replace with your actual API key

    const getWeather = async () => {
        const cityName = cityInput.value.trim();
        if (!cityName) {
            alert("Please enter a city name.");
            return;
        }

        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
        console.log(`Fetching weather for: ${cityName}`);
        console.log(`API URL: ${apiUrl}`);

        weatherInfo.innerHTML = '';
        loadingIndicator.classList.remove("hidden");

        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error("City not found");
            }
            const data = await response.json();
            console.log("API Response:", data);
            displayWeather(data);
        } catch (error) {
            console.error("Error fetching weather data:", error);
            weatherInfo.innerHTML = `<p class="weather-info-item">Error: ${error.message}</p>`;
        } finally {
            loadingIndicator.classList.add("hidden");
        }
    };

    const displayWeather = (data) => {
        const { name, main, weather, wind, sys } = data;
        const { temp, humidity, pressure } = main;
        const { description } = weather[0];
        const { speed } = wind;
        const { sunrise, sunset } = sys;

        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

        weatherInfo.innerHTML = `
                <p class="weather-info-item"><strong>City:</strong> ${name}</p>
                <p class="weather-info-item"><strong>Temperature:</strong> ${temp} °C</p>
                <p class="weather-info-item"><strong>Weather:</strong> ${description}</p>
                <p class="weather-info-item"><strong>Humidity:</strong> ${humidity} %</p>
                <p class="weather-info-item"><strong>Pressure:</strong> ${pressure} hPa</p>
                <p class="weather-info-item"><strong>Wind Speed:</strong> ${speed} m/s</p>
                <p class="weather-info-item"><strong>Sunrise:</strong> ${sunriseTime}</p>
                <p class="weather-info-item"><strong>Sunset:</strong> ${sunsetTime}</p>
            `;
    };

    getWeatherBtn.addEventListener("click", getWeather);

    cityInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            getWeather();
        }
    });
});
