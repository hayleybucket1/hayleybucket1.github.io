const d = new Date();

const todayDayNum = d.getDay();

const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
weekday[7] = "Sunday";

const apiURL = "//api.openweathermap.org/data/2.5/onecall?lat=44.668854&lon=-90.171799&exclude=minutely,hourly&appid=faa2782ca6cb25eaf7cb5e291b27043a&units=imperial";
fetch(apiURL)
    .then((response) => response.json())
    .then((weatherInfo) => {
        console.log(weatherInfo);

        document.getElementById("temp").textContent = weatherInfo.current.temp;
        document.getElementById("current").textContent = weatherInfo.current.weather[0].description;
        document.getElementById("humidity").textContent = weatherInfo.current.humidity;

        let mylist = weatherInfo.daily;
        let forecastDayNum = todayDayNum;

        for (i = 0; i < mylist.length; i++) {

            forecastDayNum += 1;
            if (forecastDayNum === 7) {
                forecastDayNum = 0;
            }
            let dayName = document.createElement("h3");
            dayName.textContent = weekday[forecastDayNum];

            let theTemp = document.createElement("p");
            theTemp.textContent = weatherInfo.daily[i].temp.day + "\xB0";

            let iconcode = weatherInfo.daily[i].weather[0].icon;
            let iconPath = "//openweathermap.org/img/w/" + iconcode + ".png";
            let theIcon = document.createElement("img");
            theIcon.src = iconPath;
            theIcon.setAttribute('alt', weatherInfo.daily[i].weather[0].main);

            let theDay = document.createElement("div");
            theDay.appendChild(dayName);
            theDay.appendChild(theTemp);
            theDay.appendChild(theIcon);
                
                document.getElementById("forecastDays").appendChild(theDay);
        }
        
    });