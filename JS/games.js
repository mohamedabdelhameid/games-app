// fetch games
let routes = document.querySelectorAll(".route");

routes.forEach((e) => {
  e.onclick = () => {
    routes.forEach((r) => r.classList.replace("active", "non-active"));
    e.classList.replace("non-active", "active");
    gamesList.setGenre(e.innerText);
    gamesList.fetchGames();
  };
});

class Games {
  constructor(genreNew) {
    this.genre = genreNew;
    this.games = [];
  }

  setGenre(newGenre) {
    this.genre = newGenre;
  }

  async fetchGames() {
    document.getElementById("loading").classList.replace("d-none", "d-flex");
    const response = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${this.genre}`,
      {
        headers: {
          "x-rapidapi-key":
            "94677e6310msh97fd18e81525e3ep17c19fjsn7e7cbae0cd51",
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        },
      }
    );

    const result = await response.json();
    this.games = result;

    displayAllGames.display();
    document.getElementById("loading").classList.replace("d-flex", "d-none");
  }
}

let gamesList = new Games("mmorpg");
gamesList.fetchGames();
