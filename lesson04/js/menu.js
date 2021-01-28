function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

var date = newDate();
let todaydate = date.getDate();

document.getElementById("date").innerHTML = date.toDateString();