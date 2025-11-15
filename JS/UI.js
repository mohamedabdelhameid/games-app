// display games and game details
let cardsContainer = document.getElementById("cards");

class DisplayGames {
  constructor() {
    this.gameDetailsId = "";
  }

  display() {
    let games = gamesList.games || [];

    cardsContainer.innerHTML = "";

    for (let i = 0; i < games.length; i++) {
      let containerDiv = document.createElement("div");
      let cardBody = document.createElement("div");
      let cardBodyHeader = document.createElement("div");
      let cardBodyFooter = document.createElement("div");
      let imgCard = document.createElement("img");
      let hr = document.createElement("hr");
      let heading3 = document.createElement("h5");
      let paragraph = document.createElement("p");
      let customSpan = document.createElement("span");
      let additionSpan1 = document.createElement("span");
      let additionSpan2 = document.createElement("span");

      containerDiv.setAttribute("class", "custom-card");
      containerDiv.setAttribute("class", "custom-card");
      paragraph.setAttribute("class", "text-center");

      imgCard.src = `${games[i].thumbnail}`;
      imgCard.alt = `img card`;
      imgCard.setAttribute("class", "cardImg w-100");

      cardBody.setAttribute("class", "card-body p-2");
      cardBodyHeader.setAttribute("class", "d-flex justify-content-between");

      customSpan.setAttribute("class", "customSpan");

      cardBodyFooter.setAttribute(
        "class",
        "d-flex justify-content-between p-2"
      );

      additionSpan1.setAttribute("class", "additionSpan");
      additionSpan2.setAttribute("class", "additionSpan");

      heading3.innerText = `${games[i].title}`;
      customSpan.innerText = `Free`;
      paragraph.innerText = `${games[i].short_description
        .split(" ")
        .slice(0, 10)
        .join(" ")}`;
      additionSpan1.innerText = `${games[i].genre}`;
      additionSpan2.innerText = `${games[i].platform}`;
      containerDiv.onclick = () => {
        this.gameDetailsId = +`${games[i].id}`;

        gamesDetail.checkId();
      };

      containerDiv.append(imgCard);
      containerDiv.append(hr);
      containerDiv.append(cardBody);
      containerDiv.append(hr);
      containerDiv.append(cardBodyFooter);
      cardBody.append(cardBodyHeader);
      cardBody.append(paragraph);
      cardBodyHeader.append(heading3);
      cardBodyHeader.append(customSpan);
      cardBodyFooter.append(additionSpan1);
      cardBodyFooter.append(additionSpan2);

      cardsContainer.append(containerDiv);
    }
  }
}

let displayAllGames = new DisplayGames();
displayAllGames.display();

class DisplayGameDetails {
  // constructor() {
  //   this.gameDetail = gamesDetail.gameDetail || [];
  // }

  displayDetails() {
    let gameDetailContent = gamesDetail.gameDetail || [];

    document.getElementById("gameDetails").innerHTML = `
    <div class="container">
      <div class="header d-flex justify-content-between align-items-center">
        <h1>${gameDetailContent.title} Details</h1>
        <span class="close" id="close"> X </span>
      </div>
      <div class="body row justify-content-between align-items-center">
        <div class="imgCover col-12 col-md-4">
          <img src="${gameDetailContent.thumbnail}" alt="images sliders" class="w-100" />
        </div>
        <div class="contentDetails col-12 col-md-8">
          <h3>title : ${gameDetailContent.title}</h3>
          <h3>
            category : <span>${gameDetailContent.genre}</span>
          </h3>
          <h3 class="my-3">
            platform : <span>${gameDetailContent.platform}</span>
          </h3>
          <h3>
            status : <span>${gameDetailContent.status}</span>
          </h3>
          <p>${gameDetailContent.description}</p>
          <button class="btn btn-outline-warning">
            <a href="${gameDetailContent.game_url}" class="text-light text-decoration-none" target="_blank">
              show game
            </a>
          </button>
        </div>
      </div>
    </div>
    `;

    document.getElementById("close").onclick = () => {
      document.getElementById("gameDetails").classList.add("d-none");
      document.getElementById("cards").classList.remove("d-none");
    };
  }
}

let displayGameDetail = new DisplayGameDetails();
