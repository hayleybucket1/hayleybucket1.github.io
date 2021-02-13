//Toogle Menu
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}
// Dynamic Date
const daynames = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const todaysdate = new Date();
const dayName = daynames[todaysdate.getDay()];
const monthName = months[todaysdate.getMonth()];
const year = todaysdate.getFullYear();
const currentDate = dayName + ", " + todaysdate.getDate() + " " + monthName + " " + year;
const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
document.getElementById("currentDate").textContent = currentDate;

// Dynamic Year
document.getElementById("currentYear").textContent = todaysdate.getFullYear();

//Message
const today = new Date();
console.log(today);

const dayNumber = today.getDate();
console.log(dayNumber);

const element = document.getElementById("message");

if (dayNumber == 6) {
    element.classList.add("showme");
} else {
    element.classList.add("hideme");
}