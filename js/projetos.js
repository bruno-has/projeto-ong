/* Filtro dos projetos */
const filtros = document.querySelectorAll('.filtro')
const projetos = document.querySelectorAll('.card-projeto')

filtros.forEach(botao => {
    botao.addEventListener('click', () => {
        // Remove classe ativo do botão anterior
        document.querySelector('.filtro.ativo').classList.remove('ativo')

        // Adiciona classe ativo no botão clicado
        botao.classList.add('ativo')

        const categoria = botao.getAttribute('data-categoria')
        
        /* Remove os projetos não selecionados */
        projetos.forEach(projeto => {
            projeto.classList.remove('oculto')

            if (categoria !== 'todos' && projeto.getAttribute('data-categoria') !== categoria) {
                projeto.classList.add('oculto')
            }
        })
    })
})