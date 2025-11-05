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

/* MODO ESCURO */
const btnModoEscuro = document.querySelector('#btn-modo-escuro')
const sol = document.querySelector('#sol')
const lua = document.querySelector('#lua')

// Seleciona o elemento raiz do documento
const root = document.documentElement   

function modoClaro() {
    root.style.setProperty('--fundo-principal', '#f1f1f1')
    root.style.setProperty('--fundo-conteudo', '#fff')
    root.style.setProperty('--fundo-transparente', 'rgba(255, 255, 255, 0.9)')
    root.style.setProperty('--texto', '#000')
    root.style.setProperty('--sombra-fraca', '0px 1px 2px rgba(0, 0, 0, 0.5)')
    sol.style.display = 'block'
    lua.style.display = 'none'
    btnModoEscuro.style.backgroundColor = 'transparent'
    btnModoEscuro.style.textAlign = 'left'

    // Guarda o modo atual no armazenamento local 
    localStorage.setItem('modo', 'claro')   
}

function modoEscuro() {
    root.style.setProperty('--fundo-principal', '#000')
    root.style.setProperty('--fundo-conteudo', '#0f0f0f')
    root.style.setProperty('--fundo-transparente', 'rgba(0, 0, 0, 0.9)')
    root.style.setProperty('--texto', '#fff')
    root.style.setProperty('--sombra-fraca', '0px 1px 2px rgba(255, 255, 255, 0.5)')
    sol.style.display = 'none'
    lua.style.display = 'block'
    btnModoEscuro.style.backgroundColor = '#222'
    btnModoEscuro.style.textAlign = 'right'

    // Guarda o modo atual no armazenamento local
    localStorage.setItem('modo', 'escuro')
}


/* Verifica em qual modo está salvo no armazenamento ao ser clicado */
if (btnModoEscuro) {
    btnModoEscuro.addEventListener('click', () => {
        const modoAtual = localStorage.getItem('modo')
    
        if (modoAtual === 'escuro') {
            modoClaro()
        } else {
            modoEscuro()
        }
    })

}

/* Carrega modo salvo ao iniciar ou mudar de página */
const modoSalvo = localStorage.getItem('modo')
if (modoSalvo === 'escuro') {
    modoEscuro()
} else {
    modoClaro()
}