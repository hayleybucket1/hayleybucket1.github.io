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


const apiURL = "//api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=faa2782ca6cb25eaf7cb5e291b27043a";
fetch(apiURL)
    .then((response) => response.json())
    .then((weatherInfo) => {
        console.log(weatherInfo);

        document.getElementById("speed").textContent = weatherInfo.list[0].wind.speed;
        document.getElementById("humid").textContent = weatherInfo.list[0].main.humidity;
        document.getElementById("high").textContent = weatherInfo.list[0].main.temp_max;
        document.getElementById("current").textContent = weatherInfo.list[0].main.temp;

        const s = weatherInfo.list[0].wind.speed;
        const t = weatherInfo.list[0].main.temp;
        let wc = 35.75 + 0.6125 * t - 35.75 * Math.pow(s, 0.16) + 0.475 * t * Math.pow(s, 0.16);
        wc = Math.round(wc);
        if (t <= 50 && s > 3) {
            document.getElementById("chill").textContent = wc + "\xB0" + "F";
        } else {
            document.getElementById("chill").textContent = "N/A";
        }

        let mylist = weatherInfo.list;
        let forecastDayNumber = todayDayNumber;

        for (i = 0; i < mylist.length; i++) {
            let time = mylist[i].dt_txt;
            if (time.includes('18:00:00')) {

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

    const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

    fetch(requestURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonObject) {
            console.table(jsonObject);
            const towns = jsonObject['towns'];
    
            for  (let i = 0; i < towns.length; i++) {
                if (towns[i].name == "Preston") {
                
                    let event = document.createElement("div");
    
                    for (let x = 0; x < towns[i].events.length; x++) {
                    let info = document.createElement("p");
                    info.textContent = towns[i].events[x];
                    event.appendChild(info);
                    document.getElementById("event").appendChild(event);
                }   
            }
        }
    
    });


