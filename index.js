document.getElementById("weatherForm").addEventListener("submit", function(e){
  e.preventDefault();
  
  const city = document.getElementById("cityInput").value;
  const apiKey = "b8526c08d3ad7be477370b4e28cb4366";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data.timezone)
    let weatherResult = document.getElementById("weatherResult");
    
    weatherResult.innerHTML = `
      <h2>${data.name}</h2>
      <p>Temperature: ${data.main.temp} °F <br>Weather: ${data.weather[0].description} <br>Humidity: ${data.main.humidity}% <br>Wind Speed: ${data.wind.speed} mph
      </p>
      `;
  })
  .catch(() => {
    document.getElementById("weatherResult").innerHTML = `<p>Something went wrong. Please try again </p>`;
    })
})
