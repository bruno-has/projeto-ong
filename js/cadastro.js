document.addEventListener('input', (e) => {
    const pergunta = e.target;

    if (pergunta.id === 'cpf') {
        pergunta.value = pergunta.value
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    }

    if (pergunta.id === 'telefone') {
        pergunta.value = pergunta.value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d{4})$/, '$1-$2');
    }

    if (pergunta.id === 'cep') {
        pergunta.value = pergunta.value
        .replace(/\D/g, '')
        .replace(/(\d{5})(\d{3})$/, '$1-$2');
    }
})


document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#formulario-cadastro')
    const nasc = document.querySelector('#nascimento')
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
                alert('(Simulação) Cadastro realizado com sucesso!')
                form.reset()
            }
            e.preventDefault()
        })
    }

    const formulario = document.querySelector('#formulario-doacao')
    const inputValor = document.querySelector('#ivalor')
    const projeto = document.querySelector('#iopcao')
    if (formulario) {
        formulario.addEventListener('submit', (e) => {
            
            const valor = parseFloat(inputValor.value)
            
            if (isNaN(valor) || valor <= 0) {
                alert('Insira um valor maior que 0 para a doação')
                inputValor.focus()
                return
            }
            
            if (projeto.selectedIndex === 0) {
                alert('Selecione um projeto antes de continuar.')
                projeto.focus()
                return
            }
            
            const projetoSelecionado = projeto.options[projeto.selectedIndex].text
            alert(`Você doou R$${valor.toFixed(2)} para o projeto "${projetoSelecionado}". Obrigado por sua contribuição!`)
            formulario.reset()

            e.preventDefault()
        })
    }
})  
    