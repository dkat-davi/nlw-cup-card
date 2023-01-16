let isIgnite = false
function changeCard(event) {
    const card = event.currentTarget
    
    isIgnite
    ? card.style.backgroundImage = "url(https://dkat-davi.github.io/nlw-cup-card/assets/bg-explorer.svg)"
    : card.style.backgroundImage = "url(https://dkat-davi.github.io/nlw-cup-card/assets/bg-ignite.svg)"

    isIgnite = !isIgnite
}