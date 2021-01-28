// Last Update
var date = document.lastModified;
document.getElementById("lastUpdate").textContent = "Last Updated: " + date;
// Year
const year = new Date();
document.getElementById("copyYear").textContent = year.getFullYear();