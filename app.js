const adviceId = document.getElementById("advice-id")
const adviceText = document.getElementById("advice-text")
const changeBtn = document.getElementById("change-btn")


let numberOfRandomAdvice = 100


getAdvice()
async function getAdvice() {
    const addvice = await fetch(`https://api.adviceslip.com/advice/${getRandomId()}`)
    const res = await addvice.json()
    updateUi(res)
}

const interval = setInterval(() => {
    getAdvice()
}, 30000)


function updateUi(response) {
    const advice = response.slip.advice
    id = response.slip.id

    adviceText.textContent = ''
    adviceId.textContent = ''

    adviceText.textContent = advice
    adviceId.textContent = id

}


changeBtn.addEventListener("click", () => {
    clearInterval(interval)
    getAdvice()
    // setInterval(() => {
    //     getAdvice()
    // }, 30000)

})


function getRandomId() {
    randomId = Math.floor(Math.random() * numberOfRandomAdvice)
    return randomId
}

