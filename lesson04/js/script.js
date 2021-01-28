function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}
var today = new Date();
document.getElementById("currentDate").textContent = today.toDateString();