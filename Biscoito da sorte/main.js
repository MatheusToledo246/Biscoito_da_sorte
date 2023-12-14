//Váriaveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnOpen = document.querySelector("#btnOpen")
const btnReset = document.querySelector("#btnReset")


const luck = [
    "Sorte é estar pronto quando a oportunidade vem.",
    "Sorte na vida é sentir a felicidade de viver.",
    "Sorte é reconhecer as boas oportunidades.",
    "A sorte me acompanha, a intriga não me amarra os pés",
    "Sorte é isto. Merecer e ter",
    "Minha sorte é ter o teu abraço.",
    "A perseverança é a mãe da boa sorte",
    "Às vezes não conseguir, é uma tremenda sorte.",
    "Eu quero a sorte de um amor tranquilo.",
    "A sorte bate em cada porta",
    "Talento é 1% inspiração e 99% transpiração."
]

let randomNumber = Math.round(Math.random() * 10) 

//Evento
btnOpen.addEventListener('click', handleOpenClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e) {
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
})

//Funções 
function handleOpenClick(event) {
    event.preventDefault()
    toggleScreen()
    screen2.querySelector(".screen2 p").innerText =luck[randomNumber]
}

function handleResetClick() {
    toggleScreen()
    randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

