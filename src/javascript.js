//form js
function search(event) {
  event.preventDefault();

  let input = document.querySelector("#search");
  let city = input.value;
  let apiKey = "b2a5adcct04b33178913oc335f405433";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showDetails);
}

function showDetails(response) {
  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = response.data.city;

  let currentTemp = document.querySelector("#temp");
  let currentTemp2 = Math.round(response.data.temperature.current);
  currentTemp.innerHTML = currentTemp2;
}

let form = document.querySelector(".searchForm");
form.addEventListener("submit", search);
