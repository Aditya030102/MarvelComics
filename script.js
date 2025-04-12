
// script.js
const comics = [
  { title: "Spider-Man: Homecoming", hero: "spiderman", image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FSpider-Man-Homecoming-Junior-Novel-Marvel%2Fdp%2F1504753879&psig=AOvVaw1NXvOu7CQ6FkdoRPrFpVI5&ust=1744570893382000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPCRgJeX04wDFQAAAAAdAAAAABAE" },
  { title: "Iron Man: Extremis", hero: "ironman", image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FIron-Man-Extremis-Prose-Novel%2Fdp%2F0785165185&psig=AOvVaw2R-erRaVNl-nIC2hKSzHTi&ust=1744570987284000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDRssOX04wDFQAAAAAdAAAAABAE" },
  { title: "Thor: God of Thunder", hero: "thor", image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fultimatecomics.com%2Fproduct%2Fthor-god-of-thunder-1-125-esad-ribic-variant-jason-aaron-marvel-2012%2F&psig=AOvVaw2nCK3NaQ4GDCgDHJdkuVIw&ust=1744571039246000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODZgtmX04wDFQAAAAAdAAAAABAR" },
  { title: "Captain America: Winter Soldier", hero: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FCAPTAIN-AMERICA-SOLDIER-COMPLETE-COLLECTION%2Fdp%2F1302927337&psig=AOvVaw0fxbntyOjbDdoMPrYx-VyY&ust=1744571151538000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIDTwI6Y04wDFQAAAAAdAAAAABAE" },
  { title: "Spider-Man: Into the Spider-Verse", hero: "spiderman", image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FSpider-Verse-Christos-Gage%2Fdp%2F0785190368&psig=AOvVaw2VkrsIUIPBlLJVjunof09f&ust=1744571213724000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNjtmayY04wDFQAAAAAdAAAAABAE" },
  { title: "Iron Man: The Invincible", hero: "ironman", image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ebay.com%2Fitm%2F226190657924&psig=AOvVaw3pW7kzzDu4ddWKyA5SS7Nl&ust=1744571245723000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOiO9ryY04wDFQAAAAAdAAAAABAE" },
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
