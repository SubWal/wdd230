const apiKey = "9de026d99de37172fc7df1d0a82b3953";
const lat = 28.530451608695532;
const lon = 83.87795701946972;

let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw (Error(await response.text()));
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch(url);

function displayResults(data) {
    const weatherBox = document.getElementById("weather-details");

    const dataList = data.list;
    const todayDate = new Date();
    const daysToShow = 3; // Number of days to show (today, tomorrow, day after tomorrow)
    const forecastsPerDay = 2; // Number of forecasts per day

    const filteredData = [];
    let currentDay = 0;

    dataList.forEach((day) => {
        const date = new Date(day.dt_txt);
        const diffDays = Math.floor((date - todayDate) / (1000 * 60 * 60 * 24));

        if (diffDays >= 0 && diffDays < daysToShow) {
            if (!filteredData[diffDays]) {
                filteredData[diffDays] = [];
            }
            if (filteredData[diffDays].length < forecastsPerDay) {
                filteredData[diffDays].push(day);
            }
        }
    });

    let content = filteredData.flat().map((day, index) => {
        const date = new Date(day.dt_txt);
        const temp = day.main.temp;
        const weatherType = day.weather[0].main;
        const desc = day.weather[0].description;
        const iconCode = day.weather[0].icon;
        const iconSrc = `https://openweathermap.org/img/w/${iconCode}.png`;
        const time = date.getHours();
        const days = ["Today", "Tomorrow", "Day After Tomorrow"];
        const diffDays = Math.floor((date - todayDate) / (1000 * 60 * 60 * 24));

        return (
            `<div class="weather-card">
                <img src="${iconSrc}" alt="Weather Icon">
                <div>
                    <h3>${days[diffDays]} at ${time}:00</h3>
                    <h4>Weather Condition: ${weatherType}</h4>
                    <h4>Temperature: ${(temp - 273.15).toFixed(2)} °C</h4>
                    <p>Description: ${desc}</p>
                </div>
            </div>`
        );
    }).join("");

    weatherBox.innerHTML = content;
}
