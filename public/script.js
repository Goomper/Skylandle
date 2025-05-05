document.addEventListener("DOMContentLoaded", async () => {
    const menu = document.getElementById("menubuttonpos")
    let menuopen = false
    menu.addEventListener("click", async () => {
        if (menuopen) {
            menuopen = false
            document.getElementById("menu").style.display = "none"
        } else {
            menuopen = true
            document.getElementById("menu").style.display = "grid"
        }
        menu.classList.toggle("change");
    })

    const resetbutton = document.getElementById("resetbutton")
    resetbutton.addEventListener("click", async () => {
        resetbutton.style.color = "red"
    })
    const chasebutton = document.getElementById("chasebutton")
    let chaseenabled = false
    chasebutton.addEventListener("click", async () => {
        if (chaseenabled === false) {
            chaseenabled = true
        } else {
            chaseenabled = false
        }
        console.log(chaseenabled)
    })
    const seriesbutton = document.getElementById("seriesbutton")
    let seriesenabled = false
    seriesbutton.addEventListener("click", async () => {
        if (seriesenabled === false) {
            seriesenabled = true
        } else {
            seriesenabled = false
        }
        console.log(seriesenabled)
    })

    const guessresponse = await fetch("/api/guesses")
    const guessdata = await guessresponse.json()
    const guesses = guessdata.guesses

    const skylanderresponse = await fetch("/api/skylanders")
    const skylandersdata = await skylanderresponse.json()
    const skylanders = skylandersdata.skylanders

    const currentskylanderresponse = await fetch("/api/currentskylander")
    const currentskylanderdata = await currentskylanderresponse.json()
    const currentskylander = currentskylanderdata.currentskylander

    const guessContainer = document.getElementById("BoxRows")

    guesses.reverse()

    guesses.forEach(guess => {
        const BoxRow = document.createElement("div")
        BoxRow.classList.add("BoxRow")
        guessContainer.appendChild(BoxRow)


        const nameBox = document.createElement("div")
        nameBox.classList.add("Box")
        BoxRow.appendChild(nameBox);

        const name = document.createElement("p")
        name.innerText = guess.name
        name.classList.add("name")
        nameBox.appendChild(name)


        const gameBox = document.createElement("div")
        gameBox.classList.add("Box")
        BoxRow.appendChild(gameBox);

        const game = document.createElement("p")
        game.innerText = guess.game
        game.classList.add("game")
        gameBox.appendChild(game)


        const elementBox = document.createElement("div")
        elementBox.classList.add("Box")
        BoxRow.appendChild(elementBox);

        const element = document.createElement("p")
        element.innerText = guess.element
        element.classList.add("element")
        elementBox.appendChild(element)


        const typeBox = document.createElement("div")
        typeBox.classList.add("Box")
        BoxRow.appendChild(typeBox);

        const type = document.createElement("p")
        type.innerText = guess.type
        type.classList.add("type")
        typeBox.appendChild(type)

        
        const seriesBox = document.createElement("div")
        seriesBox.classList.add("Box")
        BoxRow.appendChild(seriesBox);

        const series = document.createElement("p")
        series.innerText = guess.series
        series.classList.add("series")
        seriesBox.appendChild(series)


        const chaseBox = document.createElement("div")
        chaseBox.classList.add("Box")
        BoxRow.appendChild(chaseBox);

        const chase = document.createElement("p")
        chase.innerText = guess.chase
        chase.classList.add("chase")
        chaseBox.appendChild(chase)
        console.log(currentskylander.name)
        
        if (guess.name === currentskylander.name) {
            nameBox.style.backgroundColor = "green"
        } else {
            nameBox.style.backgroundColor = "red"
        }
        if (guess.game === currentskylander.game) {
            gameBox.style.backgroundColor = "green"
        } else {
            gameBox.style.backgroundColor = "red"
        }
        if (guess.element === currentskylander.element) {
            elementBox.style.backgroundColor = "green"
        } else {
            elementBox.style.backgroundColor = "red"
        }
        if (guess.type === currentskylander.type) {
            typeBox.style.backgroundColor = "green"
        } else {
            typeBox.style.backgroundColor = "red"
        }
        if (guess.series === currentskylander.series) {
            seriesBox.style.backgroundColor = "green"
        } else {
            seriesBox.style.backgroundColor = "red"
        }
        if (guess.chase === currentskylander.chase) {
            chaseBox.style.backgroundColor = "green"
        } else {
            chaseBox.style.backgroundColor = "red"
        }
    })
})