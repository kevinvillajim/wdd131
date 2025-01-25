const yearSpan = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// last modified year
const lastModified = document.getElementById("lastModified");
const modifiedDate = new Date(document.lastModified);
lastModified.textContent = `${modifiedDate.toDateString()} at ${modifiedDate.toLocaleTimeString()}`;

// Calculate windchill

const temp = 10;
const grade = "°C";
const wind = 20;
const windGrade = "km/h";
const units = "metric";

const temperature = document.getElementById("temperature");
temperature.textContent = temp + grade;

const windSpeedElement = document.getElementById("wind");
windSpeedElement.textContent = wind + windGrade;

console.log("Temperature:", temp);
console.log("Wind Speed:", wind);

// Function to calculate wind chill
function calculateWindChill(temperature, windSpeed, units = "metric") {
  if (
    (units === "metric" && temperature <= 10 && windSpeed > 4.8) ||
    (units === "imperial" && temperature <= 50 && windSpeed > 3)
  ) {
    console.log(
      "Calculating wind chill with values:",
      temperature,
      windSpeed,
      units
    );
    return units === "metric"
      ? (
          13.12 +
          0.6215 * temperature -
          11.37 * Math.pow(windSpeed, 0.16) +
          0.3965 * temperature * Math.pow(windSpeed, 0.16)
        ).toFixed(2) + " °C"
      : (
          35.74 +
          0.6215 * temperature -
          35.75 * Math.pow(windSpeed, 0.16) +
          0.4275 * temperature * Math.pow(windSpeed, 0.16)
        ).toFixed(2) + " °F";
  } else {
    console.log("Wind chill not calculable.");
    return "N/A";
  }
}

const windChill = calculateWindChill(temp, wind, units);
const windChillvar = document.getElementById("wind-chill");
windChillvar.textContent = windChill;
