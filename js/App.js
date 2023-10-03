
function Play() {
  const UserCardsGame = document.querySelectorAll(".user-player .card-game")

  UserCardsGame.forEach((card_game) => {
    card_game.addEventListener("click", () => {

      const RenderCardGame = document.querySelector(".render_card_user")
      const CurremtCard = RenderCardGame.querySelector("img")
      
      const thisImage = card_game.querySelector("img")
      .getAttribute("src")

      const getAltImg = card_game.querySelector("img")
      .getAttribute("alt")
      
      CurremtCard.setAttribute("src", `${thisImage}`)
      CurremtCard.setAttribute("alt", `${getAltImg}`)
      CurremtCard.classList.add("animated")

      setTimeout(() => {
        CurremtCard.classList.remove("animated")
      }, 600)

      setTimeout(() => {
        const RobotCardsGame = [
          {
            imgUrl: "assets/pedra.png", 
            imgAlt: "Hand Stone Image"
          },
          {
            imgUrl: "assets/papel.png", 
            imgAlt: "Hand Paper Image"
          },
          {
            imgUrl: "assets/tesoura.png", 
            imgAlt: "Hand scissors Image"
          },
        ]

        const RobotCard = RobotCardsGame[Math.floor(Math.random() * RobotCardsGame.length)]

        const render_card_robot_player = document.querySelector(".render_card_robot_player")
        const Robot = render_card_robot_player.querySelector("img")

        Robot.setAttribute("src", `${RobotCard.imgUrl}`)
        Robot.setAttribute("alt", `${RobotCard.imgAlt}`)
        Robot.classList.add("animated")

        setTimeout(() => {
          Robot.classList.remove("animated")
        }, 600)

        const RobotPlayer = Robot.getAttribute("src")
        const UserPlayer = CurremtCard.getAttribute("src")
        const game_output = document.querySelector(".game-output")

        const stone = 'assets/pedra.png'
        const paper = 'assets/papel.png'
        const scissors = 'assets/tesoura.png'

        //UserPlayer Play Paper and PC Play Stone
        //UserPlayer Play Stone e PC Play scissors
        //UserPlayer Play scissors e PC Play Paper

        const userText = document.querySelector(".user").innerHTML
        const laptopText = document.querySelector(".laptop").innerHTML

        if(UserPlayer === paper && RobotPlayer === stone || UserPlayer === stone && RobotPlayer === scissors || UserPlayer === scissors && RobotPlayer === paper){
          game_output.innerHTML = `${userText} Venceu`
        }

        //If All UserPlayer Tentavive is Equals to RobotPlayer CardGame
        else if(UserPlayer === paper && RobotPlayer === paper || UserPlayer === stone && RobotPlayer === stone || UserPlayer === scissors && RobotPlayer === scissors){
          game_output.innerHTML = "Empate"
        }

        //If All UserPlayer Tentative is Diferent RobotPlayer CardGame
        else {
          game_output.innerHTML = `${laptopText} Venceu`
        }
       
      }, 600)
    })
  })
}
window.addEventListener("load", () => {

  setTimeout(() => {
    Play()
  }, 600)
})
