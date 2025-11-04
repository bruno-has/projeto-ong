/* Abrir e Fechar menu */
const btnMenu = document.querySelector('.btn-nav')
const listaMenu = document.querySelector('.lista-nav')
btnMenu.addEventListener('click', (event) => {
    event.stopPropagation()
    listaMenu.classList.toggle('mostrar')
})

/* Fechar menu ao clicar fora */
document.addEventListener('click', (event) => {
    if (listaMenu.classList.contains('mostrar') && !listaMenu.contains(event.target)) {
        listaMenu.classList.remove('mostrar')
    }
})

/* Simulação botão */
const links = document.querySelectorAll('.link')
links.forEach((link) => {
    link.addEventListener('click', () => {
        alert('[Simulação] Arquivo baixado com sucesso!')
    })
})