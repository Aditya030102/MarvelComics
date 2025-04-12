
// script.js
const comics = [
  { title: "Spider-Man: Homecoming", hero: "spiderman", image: "https://i.imgur.com/zvWU9yG.jpg" },
  { title: "Iron Man: Extremis", hero: "ironman", image: "https://i.imgur.com/z4d4kWk.jpg" },
  { title: "Thor: God of Thunder", hero: "thor", image: "https://i.imgur.com/sFf3zqW.jpg" },
  { title: "Captain America: Winter Soldier", hero: "captain", image: "https://i.imgur.com/OyEEX8j.jpg" },
  { title: "Spider-Man: Into the Spider-Verse", hero: "spiderman", image: "https://i.imgur.com/AjMYWwb.jpg" },
  { title: "Iron Man: The Invincible", hero: "ironman", image: "https://i.imgur.com/kR1Dp04.jpg" },
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
