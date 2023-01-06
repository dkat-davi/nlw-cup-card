let isIgnite = false
function changeCard(event) {
    const card = event.currentTarget
    
    isIgnite
    ? card.style.backgroundImage = "url(../assets/bg-explorer.svg)"
    : card.style.backgroundImage = "url(../assets/bg-ignite.svg)"

    isIgnite = !isIgnite
}