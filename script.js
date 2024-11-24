let form = document.getElementById("form");
let input = document.getElementById("input");
let masivi = [];
let tasks = document.getElementById("tasks");
let oldtasks = localStorage.getItem("task");
masivi = JSON.parse(oldtasks);
let dro = document.createElement("p");
let date = new Date();
console.log(date);
dro.textContent = date;
dro.style.position = "absolute";
dro.style.top = "112px";
console.log(dro);
let divpic = document.getElementById("divpic");
divpic.appendChild(dro);
if (masivi != null) {
  for (let index = 0; index < masivi.length; index++) {
    let div = document.createElement("div");
    let textdiv = document.createElement("div");
    textdiv.className = "textdiv";
    div.className = "tasksdiv";
    tasks.appendChild(div);
    div.appendChild(textdiv);
    let p = document.createElement("p");
    p.className = "task";
    p.textContent = masivi[index];
    textdiv.appendChild(p);
    let pp = document.createElement("p");
    pp.className = "datetext";
    pp.textContent = new Date().getDate();
    textdiv.appendChild(pp);
    let iconsdiv1 = document.createElement("div");
    div.appendChild(iconsdiv1);
    iconsdiv1.className = "iconsdiv";
    let icon = document.createElement("img");

    let x = 0;
    if (localStorage.getItem(masivi[index]) % 2 == 1) {
      x++;
    }
    if (x == 0) {
      icon.src = "./images/akar-icons_circle (1).png";
    } else {
      icon.src = "./images/akar-icons_circle (2).png";
    }
    iconsdiv1.appendChild(icon);

    localStorage.setItem(masivi[index], x);
    icon.addEventListener("click", () => {
      let y = 0;
      y = y + localStorage.getItem(masivi[index]);
      if (y % 2 == 1) {
        icon.src = "./images/akar-icons_circle (1).png";
      } else {
        icon.src = "./images/akar-icons_circle (2).png";
      }
      x++;
      localStorage.setItem(masivi[index], x);
    });
    let icon12 = document.createElement("img");
    icon12.src = "./images/akar-icons_trash-can.svg";
    iconsdiv1.appendChild(icon12);
    icon12.addEventListener("click", () => {
      div.style.display = "none";
      masivi.splice(index, 1);
      localStorage.setItem("task", JSON.stringify(masivi));
    });
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (masivi == null) {
    masivi = [];
  }
  if (input.value != "") {
    let inputvalue = input.value;
    masivi.push(inputvalue);
    localStorage.setItem("task", JSON.stringify(masivi));
    let div1 = document.createElement("div");
    let textdiv1 = document.createElement("div");
    textdiv1.className = "textdiv";
    div1.className = "tasksdiv";
    tasks.appendChild(div1);
    div1.appendChild(textdiv1);
    let p1 = document.createElement("p");
    p1.className = "task";
    p1.textContent = input.value;
    textdiv1.appendChild(p1);
    let pp1 = document.createElement("p");
    pp1.className = "datetext";
    pp1.textContent = new Date().getDate();
    textdiv1.appendChild(pp1);
    let iconsdiv = document.createElement("div");
    div1.appendChild(iconsdiv);
    iconsdiv.className = "iconsdiv";
    let icon1 = document.createElement("img");
    icon1.src = "./images/akar-icons_circle (1).png";
    let xx = 0;
    icon1.addEventListener("click", () => {
      if (xx % 2 == 1) {
        icon1.src = "./images/akar-icons_circle (1).png";
      } else {
        icon1.src = "./images/akar-icons_circle (2).png";
      }
      xx++;
      localStorage.setItem(inputvalue, xx);
    });
    iconsdiv.appendChild(icon1);
    let icon2 = document.createElement("img");
    icon2.src = "./images/akar-icons_trash-can.svg";
    iconsdiv.appendChild(icon2);
    icon2.addEventListener("click", () => {
      div1.style.display = "none";
      let n = masivi.indexOf(inputvalue);
      if (n == 0) {
        masivi.splice(0, 1);
      } else {
        masivi.splice(n, 1);
      }

      localStorage.setItem("task", JSON.stringify(masivi));
    });
  }
  input.value = "";
});
