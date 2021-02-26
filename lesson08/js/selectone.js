function selectResponse() {
    const s = document.querySelector('#selected')
    const sel = document.querySelector('#selectbrowser');
    s.style.display = "block";
    s.textContent = sel.value;
}

function adjustRating(severity) {
    document.getElementById("severityValue").innerHTML = severity;
}