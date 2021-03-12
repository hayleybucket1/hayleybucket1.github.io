/* Input: pull values from document for speed and temp
 *Processing: calculate wind chill
 *Output: display wind chill*/

const tempNum = parseFloat(document.getElementById("temp").textContent);
console.log(tempNum);

const speedNum = parseFloat(document.getElementById("speed").textContent);
console.log(speedNum);

var windchill = 35.74 + (0.6215 * tempNum) - (35.75 * Math.pow(speedNum, 0.16)) + (0.4275 * tempNum * Math.pow(speedNum, 0.16));
windchill = Math.round(windchill);

if (tempNum <= 50 && speedNum > 3) {
    document.getElementById("chill").textContent = "Wind Chill: " + windchill + "\xB0F";
} else {
    document.getElementById("chill").textContent = "No wind chill today";
}