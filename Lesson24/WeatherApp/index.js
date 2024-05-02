// const urlGeneral = https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const apiKey = '3da6f3dbd59418ef4c6a58e2bd5dc624';
let urlWeatherTodayCity = '';
let weatherTodayData = [];
const languageSelect = document.getElementById('language-select');
const searchCityBtn = document.getElementById('search-button-icon');
const inputCity = document.getElementById('input-form-search');
const contentBlock = document.getElementById('content-wrapper');
const spinner = document.getElementById('spinner');

function getWeatherData() {
    return fetch(urlWeatherTodayCity)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            weatherTodayData = data;
            return weatherTodayData;
        })
        .catch(error => {
            console.log(error.message);
            return [];
        });
}

function showSpinner() {
    spinner.style.display = 'block';
}

function hideSpinner() {
    spinner.style.display = 'none';
}

function chooseCity() {
    searchCityBtn.addEventListener('click', async () => {

        const selectedCity = inputCity.value.trim();
        if (!selectedCity) {
            alert("Please enter a city name.");
            return;
        }

        showSpinner();

        try {
            const selectedCity = inputCity.value;
            const selectedLanguage = document.getElementById('language-select').value;
            urlWeatherTodayCity = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${apiKey}&units=metric&lang=${selectedLanguage}`
            const weatherData = await getWeatherData();
            showWeatherToday(weatherData)
        } catch (error) {
            console.error('Error loading weather data:', error);
            contentBlock.textContent = 'Error loading weather data.';
        } finally {

            hideSpinner();
        }
    });
}

function showWeatherToday(weatherData) {
    contentBlock.style.backgroundColor = '#38687b9a';
    if (weatherData && weatherData.main && weatherData.wind) { // Überprüfen, ob Daten vorhanden sind
        const weather = weatherData.weather[0];
        const currentDate = new Date();
        const options = { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' };
        const selectedLanguage = languageSelect.value;
        const formattedDate = currentDate.toLocaleDateString(extractLanguageCode(selectedLanguage), options);
        const windSpeed = weatherData.wind.speed;
        const windDirection = getWindDirection(weatherData.wind.deg);

        // Erstelle die Windrichtung-Icon-URL
        const windDirectionIcon = getWindDirectionIcon(windDirection);

        contentBlock.innerHTML = `
            <div id="cityName"> ${weatherData.name} - ${formattedDate}</div>
            <div id="weatherTodayDescription">
                <div> <img id="weatherIconToday" src="https://openweathermap.org/img/w/${weather.icon}.png" alt="Weather Icon"></div>
                <div id="weatherDesc"> ${weather.description}</div>
                <div> <img id="windSpeedIcon" src="./image/wind-speed-icon-6.jpg" alt="Speed Icon"></div>
                <div id="windSpeed"> ${windSpeed} m/sec</div>
                <div id="windDirection"> <img id="windDirectionIcon" src="${windDirectionIcon}" alt="${windDirection}"></div> <!-- Anzeigen der Windrichtung mit Icon -->
            </div>
            <div id="tempToday"> ${parseInt(weatherData.main.temp)}°C
        `;
    } else {
        contentBlock.textContent = "Weather information not available.";
    }
}

// Funktion zum Extrahieren der Windrichtung aus dem Gradwert
function getWindDirection(degrees) {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const index = Math.round((degrees % 360) / 45);
    return directions[index];
}

// Funktion zum Abrufen des Icons für die Windrichtung
function getWindDirectionIcon(direction) {
    // Definiere eine Zuordnung zwischen den Windrichtungen und den Icon-URLs
    const windIcons = {
        'N': './image/wind-direction-icon_n.jpg',
        'NE': './image/wind-direction-icon_ne.jpg',
        'E': './image/wind-direction-icon_e.jpg',
        'SE': './image/wind-direction-icon_se.jpg',
        'S': './image/wind-direction-icon_s.jpg',
        'SW': './image/wind-direction-icon_sw.jpg',
        'W': './image/wind-direction-icon_w.jpg',
        'NW': './image/wind-direction-icon_nw.jpg',
    };
    // Überprüfe, ob die Windrichtung in der Zuordnung vorhanden ist
    if (direction in windIcons) {
        // Gib die entsprechende Icon-URL zurück
        return windIcons[direction];
    } else {
        return null; // Wenn die Windrichtung nicht erkannt wird, gib null zurück
    }
}

function chooseLanguage() {
    languageSelect.addEventListener('change', async () => {
        showSpinner();

        try {
            const selectedCity = inputCity.value;
            const selectedLanguage = languageSelect.value;
            urlWeatherTodayCity = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${apiKey}&units=metric&lang=${selectedLanguage}`;
            const weatherData = await getWeatherData();
            showWeatherToday(weatherData);
        } catch (error) {
            console.error('Error loading weather data:', error);
            contentBlock.textContent = 'Error loading weather data.';
        } finally {
            hideSpinner();
        }
    });
}

function extractLanguageCode(selectedLanguage) {
    switch (selectedLanguage) {
        case "en":
            return "en-US";
        case "de":
            return "de-DE";
        case "ru":
            return "ru-RU";

        default:
            return "en-US";
    }
}

chooseCity();
chooseLanguage();