
function Play() {
  const UserCardsGame = document.querySelectorAll(".user-player .card-game")

  UserCardsGame.forEach((card_game) => {
    card_game.addEventListener("click", () => {

      const RenderCardGame = document.querySelector(".render_card_user")
      const CurremtCard = RenderCardGame.querySelector("img")
      
      const thisImage = card_game.querySelector("img").getAttribute("src")
      CurremtCard.setAttribute("src", `${thisImage}`)

      CurremtCard.classList.add("animated")
      setTimeout(() => {
        CurremtCard.classList.remove("animated")
      }, 600)

      setTimeout(() => {
        const ComputerCardGame = [
          {imgUrl: "assets/pedra.png"},
          {imgUrl: "assets/papel.png"},
          {imgUrl: "assets/tesoura.png"},
        ]

        const ComputerCard = ComputerCardGame[Math.floor(Math.random() * ComputerCardGame.length)]

        const render_card_vs_player = document.querySelector(".render_card_vs_player")
        const pc = render_card_vs_player.querySelector("img")

        pc.setAttribute("src", `${ComputerCard.imgUrl}`)
        pc.classList.add("animated")
        setTimeout(() => {
          pc.classList.remove("animated")
        }, 600)

        const computer = pc.getAttribute("src")
        const user = CurremtCard.getAttribute("src")
        const game_output = document.querySelector(".game-output")

      }, 600)
    })
  })
}
window.addEventListener("load", () => {
  setTimeout(() => {
    Play()
  }, 600)
})

