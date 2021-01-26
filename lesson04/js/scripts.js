function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

let date = new Date();
let todaydate = date.getDate();

document.getElementById("date").innerHTML = date.toDateString();