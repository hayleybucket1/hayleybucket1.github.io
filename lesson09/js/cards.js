const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const towns = jsonObject["towns"];
        console.log(jsonObject);
        console.log(towns);

        const cards = document.querySelector(".cards");

        const townsfilter = towns.filter(
            (town) =>
            town.name == "Preston" ||
            town.name == "Soda Springs" ||
            town.name == "Fish Haven"
        );
        townsfilter.forEach((town) => {
            let card = document.createElement("section");
            let title = document.createElement("h2");
            let motto = document.createElement("h3");
            let image = document.createElement("img");
            let year = document.createElement("p");
            let population = document.createElement("p");
            let rain = document.createElement("p");
            let data = document.createElement("div");

            title.innerHTML = town.name;
            motto.innerHTML = town.motto;
            year.innerHTML = 'Year Founded: ' + town.yearFounded;
            population.innerHTML = 'Population: ' +
                town.currentPopulation;
            rain.innerHTML = 'Average Rain Fall: ' + town.averageRainfall;

            data.setAttribute("class", 'data');

            image.setAttribute("src", 'images/' + town.photo);
            image.setAttribute("alt", 'Picture of: ' + town.name);
            image.setAttribute("loading", "lazy");


            card.append(title);
            card.append(motto);
            card.append(data);
            data.append(year);
            data.append(population);
            data.append(rain);
            card.append(image);
            cards.append(card);
        });
    });