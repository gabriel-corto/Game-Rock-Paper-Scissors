

function UserCardsGame(){
  const card_images = [
    {Url: "assets/pedra.png", Alt: "Hand Stone Image"},
    {Url: "assets/papel.png", Alt: "Hand Paper Image"},
    {Url: "assets/tesoura.png", Alt: "Hand scissors Image"},
  ]

  const user_player = document.querySelector(".user-player")
  
  user_player.innerHTML += card_images.map((image) => {
    return(
      `<div class="card-game">
        <img src=${image.Url} alt=${image.Alt}>
      </div>`
    )
  }).join("")
}
window.addEventListener("load",UserCardsGame())