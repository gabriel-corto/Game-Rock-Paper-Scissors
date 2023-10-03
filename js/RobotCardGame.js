

function RobotCardsGame(){
  const card_images = [
    {imgUrl: "assets/pedra.png", imgAlt: "Hand Stone Image"},
    {imgUrl: "assets/papel.png", imgAlt: "Hand Paper Image"},
    {imgUrl: "assets/tesoura.png", imgAlt: "Hand scissors Image"},
  ]

  const robot_player = document.querySelector(".robot-player")
  
  robot_player.innerHTML += card_images.map((image) => {
    return(
      `<div class="card-game">
        <img src=${image.imgUrl} alt=${image.imgAlt}>
      </div>`
    )
  }).join("")
}
window.addEventListener("load",RobotCardsGame())