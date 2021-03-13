//ADD the key and change units to imperial

const d = new Date();

const todayDayNumber = d.getDay();

const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuedsay";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
weekday[7] = "Sunday";


const forecastURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=faa2782ca6cb25eaf7cb5e291b27043a";

fetch(forecastURL)
    .then((response) => response.json())
    .then((weatherInfo) => {
        console.log(weatherInfo);

        let mylist = weatherInfo.list;
        let forecastDayNumber = todayDayNumber;

        for (i = 0; i < mylist.length; i++) {
            let time = mylist[i].dt_txt;
            if (time.includes('18:00:00')) {
                console.log("Found an entry with 18:00:00 in the time. It was report " + i + " from the mylist of 40");

                forecastDayNumber += 1;
                if (forecastDayNumber === 7) {
                    forecastDayNumber = 0;
                }
                let dayName = document.createElement("h3");
                dayName.textContent = weekday[forecastDayNumber];

                let theTemp = document.createElement("p");
                theTemp.textContent = weatherInfo.list[i].main.temp + "\xB0";

                let iconcode = weatherInfo.list[i].weather[0].icon;
                let iconPath = "//openweathermap.org/img/w/" + iconcode + ".png";
                let theIcon = document.createElement("img");
                theIcon.src = iconPath;
                theIcon.setAttribute('alt', weatherInfo.list[i].weather[0].description);


                let theDay = document.createElement("div");
                theDay.appendChild(dayName);
                theDay.appendChild(theTemp);
                theDay.appendChild(theIcon);

                document.getElementById("forecastDays").appendChild(theDay);
            }
        }
    });
const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=faa2782ca6cb25eaf7cb5e291b27043a";
fetch(apiURL)
    .then((response) => response.json())
    .then((weatherInfo) => {
        document.getElementById("speed").innerHTML = weatherInfo.wind.speed;
        document.getElementById("humid").innerHTML = weatherInfo.main.humidity;
        document.getElementById("hightemp").innerHTML = weatherInfo.main.temp_max;
        let current = weatherInfo.weather[0].description;
        document.getElementById("current").textContent = weatherInfo.main.temp;

        const s = weatherInfo.wind.speed;
        const t = weatherInfo.main.temp;
        let wc = 35.75 + 0.6125 * t - 35.75 * Math.pow(s, 0.16) + 0.475 * t * Math.pow(s, 0.16);
        wc = Math.round(wc);
        if (t <= 50 && s > 3) {
            document.getElementById("chill").textContent = wc + "\xB0" + "F";
        } else {
            document.getElementById("chill").textContent = "N/A";
        }
    });