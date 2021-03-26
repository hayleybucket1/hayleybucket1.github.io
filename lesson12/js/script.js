//Toogle Menu
function toggleMenu() {
    document.getElementById("hamNav").classList.toggle("hide");
}
//fetch json
fetch("./local.json")
.then(response => { return response.json();
})
.then(local => console.log(local));
document.getElementById("").textContent = local