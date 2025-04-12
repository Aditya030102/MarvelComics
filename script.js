
// script.js
const comics = [
  { title: "Spider-Man: Homecoming", hero: "spiderman", image: "https://m.media-amazon.com/images/I/61Rltz6BB+L._AC_UF894,1000_QL80_.jpg" },
  { title: "Iron Man: Extremis", hero: "ironman", image: "https://m.media-amazon.com/images/I/615Dgl+QelL._UF1000,1000_QL80_.jpg" },
  { title: "Thor: God of Thunder", hero: "thor", image: "https://m.media-amazon.com/images/I/813hHW0KmcL.jpg" },
  { title: "Captain America: Winter Soldier", hero: "captain",image: "https://m.media-amazon.com/images/I/71YEQOc-UnL._AC_UF1000,1000_QL80_.jpg" },
  { title: "Spider-Man: Into the Spider-Verse", hero: "spiderman", image: "https://m.media-amazon.com/images/I/81fdOe6LbdL._AC_UF1000,1000_QL80_.jpg" },
  { title: "Iron Man: The Invincible", hero: "ironman", image: "https://i.ebayimg.com/00/s/MTQ0OFg5Mzg=/z/50AAAOSwNIVmaedQ/$_57.JPG?set_id=880000500F" },
];

let currentComics = [...comics];

function displayComics(data) {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";
  data.forEach((comic) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${comic.image}" alt="${comic.title}" />
      <div class="info">
        <h3>${comic.title}</h3>
        <p>Hero: ${comic.hero.replace(/^(.)/, (c) => c.toUpperCase())}</p>
      </div>
    `;
    gallery.appendChild(card);
  });
}

document.getElementById("filter").addEventListener("change", function () {
  const selected = this.value;
  if (selected === "all") {
    currentComics = [...comics];
  } else {
    currentComics = comics.filter((comic) => comic.hero === selected);
  }
  displayComics(currentComics);
});

function shuffleComics() {
  currentComics.sort(() => Math.random() - 0.5);
  displayComics(currentComics);
}

function sortComics() {
  currentComics.sort((a, b) => a.title.localeCompare(b.title));
  displayComics(currentComics);
}

displayComics(currentComics);
