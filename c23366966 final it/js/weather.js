
fetch('https://api.open-meteo.com/v1/forecast?latitude=53.33&longitude=-6.25&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&current_weather=true&timezone=Europe%2FDublin')
  .then(response => response.json())
  .then(data => {
    const forecast = data.daily;
    const current = data.current_weather;
    const container = document.getElementById("forecast");

    // Display current weather
    container.innerHTML += `
      <div class="col-12 mb-4">
        <div class="card border-success">
          <div class="card-body">
            <h4 class="card-title">Current Weather</h4>
            <p class="card-text">
               Latitude: ${data.latitude}, Longitude: ${data.longitude}<br>
               generationtime_ms: ${data.generationtime_ms}<br>
               utc: ${data.utc_offset_seconds}<br>
               timezone: ${data.timezone}<br>
               timezone_abbreviation: ${data.timezone_abbreviation}<br>
               elevation:  ${data.elevation}<br>
               Temperature: ${current.temperature}°C<br>
               Wind Speed: ${current.windspeed} km/h<br>
               Wind Direction: ${current.winddirection}°<br>
               weathercode:  ${current.weathercode}<br>
               is_day: ${current.is_day}<br>
               Time: ${current.time}
            </p>
          </div>
        </div>
      </div>
    `;

  
      

  })
