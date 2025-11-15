// fetch game details
class GamesDetails {
  constructor() {
    this.gameDetail = [];
  }

  async checkId() {
    if (typeof displayAllGames.gameDetailsId === "number") {
      document.getElementById("loading").classList.replace("d-none", "d-flex");
      const response = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${displayAllGames.gameDetailsId}`,
        {
          headers: {
            "x-rapidapi-key":
              "94677e6310msh97fd18e81525e3ep17c19fjsn7e7cbae0cd51",
            "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
          },
        }
      );

      const result = await response.json();
      this.gameDetail = result;

      displayGameDetail.displayDetails();
      document.getElementById("cards").classList.add("d-none");
      document.getElementById("gameDetails").classList.remove("d-none");
      document.getElementById("loading").classList.replace("d-flex", "d-none");
    }
  }
}

let gamesDetail = new GamesDetails();
