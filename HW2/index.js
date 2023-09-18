function getName() {
  let name = document.querySelector("input").value;
  return name;
}

let i = 0;

function displayAlbum(data) {
  console.log(data);
  const album1 = data.data[i++];
  console.log(album1);

  //imposto l'id del div grazie alla ricerca nella searchebar
  let nameDiv = getName() + "Section";
  let divId = document.querySelector(getName());

  console.log(nameDiv);
  switch (getName()) {
    case (divId = getName()): {
      //card
      // document.getElementById(getName()).classList.remove("d-none");

      
      // let p= document.createElement('p');
      // p.innerText='ciao'
      
      // let cardImg = document.createElement("img");
      // cardImg.className = "card-img-top";
      // cardImg.setAttribute("src", album1.album.cover);
      
      // document.getElementById(nameDiv).appendChild(primoDiv);
      // document.getElementById('#card').appendChild(cardImg);
      
      // fine card
      // let primoDiv = document.createElement("div");
      // primoDiv.className="card";
      // primoDiv.id='card'

      // creo card

      //imagine album
      let element = document.createElement("img");
      element.className = "immagine";
      element.setAttribute("src", album1.album.cover);
      document.getElementById(nameDiv).appendChild(element);

      //titolo album
      let span = document.createElement("span");
      span.id = "albumTitle";
      span.innerText = album1.album.title;
      document.getElementById(nameDiv).appendChild(span);
      document.getElementById(getName()).classList.remove("d-none");
    }
  }

}
function getAlbum() {
  let ricerca = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
  fetch(ricerca + getName())
    .then((response) => response.json())
    .then(displayAlbum)
    .catch((error) => {
      console.log(error.message);
    });
}
