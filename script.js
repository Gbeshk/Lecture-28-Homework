let form = document.getElementById("form");
let input = document.getElementById("input");
let masivi = [];
form.addEventListener("submit", (event) => {
  event.preventDefault();
  masivi.push(input.value);
  localStorage.setItem("task", JSON.stringify(masivi));
  input.value = " ";
});
let tasks = document.getElementById("tasks");
let array = JSON.parse(localStorage.getItem("task"));
for (let index = 0; index < array.length; index++) {
  let p = document.createElement("p");
  p.textContent = array[index];
  tasks.appendChild(p);
}
