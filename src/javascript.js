//form js
function search(event) {
  event.preventDefault();

  let input = document.querySelector("#search");
  let city = input.value;
  let apiKey = "b2a5adcct04b33178913oc335f405433";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showDetails);
}
//js to show details of searched city
function showDetails(response) {
  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = response.data.city;

  let currentTemp = document.querySelector("#temp");
  let currentTemp2 = Math.round(response.data.temperature.current);
  currentTemp.innerHTML = currentTemp2;
}

let form = document.querySelector(".searchForm");
form.addEventListener("submit", search);

//function for current time n date

function currentDate(date) {
  let day = date.getDay();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let month = date.getMonth();
  let year = date.getFullYear();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

  let dayss = days[day];

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let currentMonth = months[month];
  return `${dayss} ${day} ${currentMonth} ${year}  ${hours}:${minutes}`;
}

let showDate = document.querySelector(".currentTime");
let currentD = new Date();
showDate.innerHTML = currentDate(currentD);
