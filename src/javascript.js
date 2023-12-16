//form js
function search(event) {
  event.preventDefault();

  let input = document.querySelector("#search");
  console.log(input.value);
}

let form = document.querySelector(".searchForm");
form.addEventListener("submit", search);
