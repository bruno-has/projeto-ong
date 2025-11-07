/* -------------- MÁSCARAS INPUTS -------------- */
document.addEventListener('input', (e) => {
    const pergunta = e.target;

    if (pergunta.id === 'cpf') {
        pergunta.value = pergunta.value
        .replace(/\D/g, '')                     // Remove qualquer caractere que não seja número
        .replace(/(\d{3})(\d)/, '$1.$2')        // Adiciona o primeiro ponto após os 3 primeiros digitos
        .replace(/(\d{3})(\d)/, '$1.$2')        // Adiciona o segundo ponto após os próximos 3 dígitos
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Adiciona o traço antes dos 2 últimos números
    }

    if (pergunta.id === 'telefone') {
        pergunta.value = pergunta.value
        .replace(/\D/g, '')                     // Remove qualquer caractere que não seja número
        .replace(/(\d{2})(\d)/, '($1) $2')      // Adiciona os parênteses em volta do DDD
        .replace(/(\d{5})(\d{4})$/, '$1-$2');   // Coloca o traço entre os 5 primeiros e os 4 últimos digitos
    }

    if (pergunta.id === 'cep') {
        pergunta.value = pergunta.value
        .replace(/\D/g, '')                     // Remove qualquer caractere que não seja número
        .replace(/(\d{5})(\d{3})$/, '$1-$2');   // Adiciona o traço após os 5 primeiros dígitos
    }
})


/* -------------- VALIDAÇÃO DE FORMULÁRIOS -------------- */
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#formulario-cadastro')
    const nasc = document.querySelector('#nascimento')

    // Verifica idade mínima de 18 anos no cadastro 
    if (form) {
        form.addEventListener('submit', (e) => {
            const dataNasc = new Date(nasc.value)
            const hoje = new Date()
            
            let idade = hoje.getFullYear() - dataNasc.getFullYear()
            let mes = hoje.getMonth() - dataNasc.getMonth()
            
            if (mes < 0 || (mes === 0 && hoje.getDate() < dataNasc.getDate())) {
                idade -= 1
            }
            
            if (idade < 18) {
                alert('Não é permitido cadastro de menores de 18 anos.')
                nasc.value = ''
                nasc.focus()
            } else {
                alert('[Simulação] Cadastro realizado com sucesso!')
                form.reset()
            }
            e.preventDefault() // Impede o envio real do formulário
        })
    }

    const formulario = document.querySelector('#formulario-doacao')
    const inputValor = document.querySelector('#ivalor')
    const projeto = document.querySelector('#iopcao')

    // Verifica se doação é maior que 0 e se a opção de projeto está selecionada
    if (formulario) {
        formulario.addEventListener('submit', (e) => {
            
            const valor = parseFloat(inputValor.value)
            
            // Verifica se a doação é maior que 0
            if (isNaN(valor) || valor <= 0) {
                alert('Insira um valor maior que 0 para a doação')
                inputValor.focus()
                return
            }
            
            // Verifica se a opção de projeto foi selecionada
            if (projeto.selectedIndex === 0) {
                alert('Selecione um projeto antes de continuar.')
                projeto.focus()
                return
            }
            
            const projetoSelecionado = projeto.options[projeto.selectedIndex].text
            alert(`Você doou R$${valor.toFixed(2)} para o projeto "${projetoSelecionado}". Obrigado por sua contribuição!`)
            formulario.reset()

            e.preventDefault() // Impede o envio real do formulário
        })
    }

    // Preenche select automaticamente se a URL contér algum parâmetro 
    const parametro = new URLSearchParams(window.location.search)
    const seletorCadastro = parametro.get('categoria')
    const seletorProjeto = parametro.get('iopcao')
    if (seletorCadastro) {
        const categoria = document.querySelector('#categoria')
        categoria.value = seletorCadastro
    }
    
    if (seletorProjeto) {
        const opcao = document.querySelector('#iopcao')
        opcao.value = seletorProjeto
    }
})  

    
