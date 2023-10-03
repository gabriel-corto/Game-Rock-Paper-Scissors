
const form = document.querySelector("form") 
const main = document.querySelector("main")

form.addEventListener("submit", (event) => {
  event.preventDefault()

  const input = form.querySelector("input").value
  const user = document.querySelector(".card-profile")
  const player_content = document.querySelector(".player-content")
  
  if(input === ""){
    alert("HELLO! Input can not be Empty")
  }else {
    user.innerHTML = /*html*/
    `<i class="fa-solid fa-user-circle"></i>
      ${input}`
    player_content.innerHTML = input

    main.classList.add("show")
    form.style.display = 'none'
  }
  
})
