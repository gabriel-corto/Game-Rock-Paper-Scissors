

function UserCardsGame(){
  const card_images = [
    {imgUrl: "assets/pedra.png", imgAlt: "Hand Stone Image"},
    {imgUrl: "assets/papel.png", imgAlt: "Hand Paper Image"},
    {imgUrl: "assets/tesoura.png", imgAlt: "Hand scissors Image"},
  ]

  const user_player = document.querySelector(".user-player")
  
  user_player.innerHTML += card_images.map((image) => {
    return(
      `<div class="card-game">
        <img src=${image.imgUrl} alt=${image.imgAlt}>
      </div>`
    )
  }).join("")
}
window.addEventListener("load",UserCardsGame())