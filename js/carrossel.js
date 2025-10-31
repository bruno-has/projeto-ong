const carrossel = document.querySelector('.carrossel')
let index = 1

const updateCarrossel = () => {
    let cards = carrossel.children
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.zIndex = 1
        cards[i].style.opacity = 0.3
        cards[i].style.transform = 'translateX(100px) scale(0.8) rotateY(-30deg)'
    }

    const anterior = (index - 1 + cards.length) % cards.length
    const proximo = (index + 1) % cards.length

    // Card anterior
    cards[anterior].style.transform = 'translateX(-100px) scale(0.8) rotateY(30deg)'
    // Card central
    cards[index].style.transform = 'translateX(0) scale(1) rotateY(0deg)'
    cards[index].style.zIndex = 2
    cards[index].style.opacity = 1
    // Card seguinte
    cards[proximo].style.transform = 'translateX(100px) scale(0.8) rotateY(-30deg)'
}

const btnVoltar = document.querySelector('.btn-voltar')
const btnAvancar = document.querySelector('.btn-avancar')
btnVoltar.addEventListener('click', () => {
    index = (index - 1 + 3) % 3
    updateCarrossel()
})

btnAvancar.addEventListener('click', () => {
    index = (index + 1) % 3
    updateCarrossel()
})