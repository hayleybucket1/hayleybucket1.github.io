const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const towns = jsonObject['towns'];
        for  (let i = 0; i < towns.length; i++) {
            if (towns[i].name == "Preston" || towns[i].name == "Fish Haven" || towns[i].name == "Soda Springs") {
                let card = document.createElement('section');
                let name = document.createElement('h2');
                let motto = document.createElement('h3');
                let image = document.createElement('img');
                let yearFounded = document.createElement('p');
                let currentPopulation = document.createElement('p');
                let averageRainfall = document.createElement('p');
                let data = document.createElement('div');
                let link = document.createElement('a');
                
                name.textContent = towns[i].name;
                motto.textContent = towns[i].motto;
            
                currentPopulation.textContent = 'Population: ' + towns[i].currentPopulation + ' souls';
                averageRainfall.textContent = 'Average Rainfall: ' + towns[i].averageRainfall;
                yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
                
                image.setAttribute('src', 'images/' + towns[i].photo);
                image.setAttribute('alt', towns[i].name);
                
                data.setAttribute('id', 'data');
                link.setAttribute('a', 'href')
            
                card.appendChild(data);
                card.appendChild(image);
                
                data.appendChild(name);
                data.appendChild(motto);
                data.appendChild(currentPopulation);
                data.appendChild(averageRainfall);
                data.appendChild(yearFounded);
                document.querySelector('div.cards').appendChild(card)
                
            }
        }
    });