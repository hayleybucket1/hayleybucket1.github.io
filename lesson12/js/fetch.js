
fetch("./local.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.log(jsonObject);
    
    const local = jsonObject['local'];
    for (let i = 0; i < local.length; i++) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        h2.textContent = local[i].name;
        card.appendChild(h2);

        let address = document.createElement('p');
        address.textContent = "Address: " + local[i].address;
        card.appendChild(address);

        let phone = document.createElement('p');
        phone.textContent = "Phone: " + local[i].phone;
        card.appendChild(phone);

        let link = document.createElement('a');
        link.textContent = local[i].link;
        link.setAttribute("href", local[i].link);
        card.appendChild(link);

        let image = document.createElement('img');
        image.setAttribute('src', local[i].imageurl);
        image.setAttribute('alt', local[i].name + local[i].order)
        card.appendChild(image);

        document.querySelector('div.cards').appendChild(card);
    }
});
window.addEventListener("DOMContentLoaded", function(){
    document.getElementById('sList').addEventListener("click", function() {
        document.getElementBy("cards1").classList.remove("grid");
    });
    document.getElementById("sGrid").addEventListener("click", function() {
        document.getElementById("cards1").classList.add("grid");
    });
});



//for (let i = 0; i < local.length; i++) {
//    let card = document.createElement('section');
//    let h2 = document.createElement('h2');

//    h2.textContent = local[i].name;

  //  card.appendChild(h2);

    //document.querySelector('div.cards').appendChild(card);
//}