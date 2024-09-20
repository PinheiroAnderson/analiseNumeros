let lista = []
let resultados = document.getElementById('resultados')
let numero = document.getElementById('txtnum')
let painel = document.getElementById('lista')

function add() {

    
    let valor = Number(numero.value)
    
    if ( valor > 0 && valor <= 100 ) {
        if (!lista.includes(valor)) {
            lista.push(valor)
            let item = document.createElement('option')
            item.text = `Valor ${valor} adicionado`
            painel.appendChild(item)
            resultados.innerHTML = ''
            
        } else {
            alert('Valor inválido! Já foi adicionado a lista!')
        }
    } else {
        alert('Valor inválido! Digite um número entre 1 e 100!')
    }
    numero.value = ''
    numero.focus()

}    

function check(){
    if (lista.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let total = lista.length
        let maior = lista[0]
        let menor = lista[0]
        let soma = 0
        
        for (let pos in lista) {
            soma += lista[pos]
            if (lista[pos] > maior)
                maior = lista[pos]
            if (lista[pos] < menor)
                menor = lista[pos]
        }
        let media = soma / total
        resultados.innerHTML = ` 
        <p>Total de números adicionados ${total}</p>
        <p>Maior número adicionado: ${maior}</p>
        <p>Menor número adicionado: ${menor}</p>
        <p>Soma dos números: ${soma}</p>
        <p>Média dos números: ${media.toFixed(2)}</p>
        `
    }    

}


function toggleTema() {
    const body = document.body;
    const btn = document.querySelector('.btn');

    if (body.classList.contains('light-theme')) {
        body.classList.replace('light-theme', 'dark-theme');
        btn.textContent = 'Tema claro';
    } else {
        body.classList.replace('dark-theme', 'light-theme');
        btn.textContent = 'Tema escuro';
    }
}
