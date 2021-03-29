//Toogle Menu
function toggleMenu() {
    document.getElementById("hamNav").classList.toggle("hide");
}
//fetch json
fetch("./local.json")
    .then((response) => response.json()) 
    .then((local) => {
        console.log(local);
        
        document.getElementById("name").textContent = local[i].name;
        document.getElementById("address").textContent = local[i].address;
        document.getElementById("phone").textContent = local[i].phone;
        document.getElementById('link').textContent = local[i].link;

        for (let i = 0; i < local.length; i++) {
            let card = document.createElement('section');
            let titleDiv = document.createElement('div');
            titleDiv.classList.add('card-title');
            let bodyDiv = document.createElement('div');
            bodyDiv.classList.add('card-body');

            let name = document.createElement('h2');
            name.textContent = local[i].name;
            titleDiv.appendChild(name);

            let address = document.createElement('h3');
            address.textContent = 'Address: ' + local[i].address;
            bodyDiv.appendChild(address);

            let phone = document.createElement('h3');
            phone.textContent = 'Phone: ' + local[i].phone;
            bodyDiv.appendChild(phone);
            let link = document.createElement('p');
            link.textContent = local[i].link;
            bodyDiv.appendChild(link);

            card.appendChild(titleDiv);

            card.appendChild(bodyDiv);

            document.getElementById('card').appendChild(card);
        }
    });



