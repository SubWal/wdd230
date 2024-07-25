const apiKey = "9de026d99de37172fc7df1d0a82b3953";
const lat = 43.82307019351106;
const lon = -111.78915596171626;

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

    const todayData = dataList.find(day => {
        const date = new Date(day.dt_txt);
        return date.getDate() === todayDate.getDate() &&
               date.getMonth() === todayDate.getMonth() &&
               date.getFullYear() === todayDate.getFullYear();
    });

    if (todayData) {
        const date = new Date(todayData.dt_txt);
        const temp = todayData.main.temp;
        const weatherType = todayData.weather[0].main;
        const desc = todayData.weather[0].description;
        const iconCode = todayData.weather[0].icon;
        const iconSrc = `https://openweathermap.org/img/w/${iconCode}.png`;
        const time = date.getHours();

        const content = `
            <div class="weather-card">
                <img src="${iconSrc}" alt="Weather Icon">
                <div>
                    <h3>Today at ${time}:00</h3>
                    <h4>Weather Condition: ${weatherType}</h4>
                    <h4>Temperature: ${(temp - 273.15).toFixed(2)} °C</h4>
                    <p>Description: ${desc}</p>
                </div>
            </div>
        `;

        weatherBox.innerHTML = content;
    } else {
        weatherBox.innerHTML = "<p>No weather data available for today.</p>";
    }
}
