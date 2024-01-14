$(document).ready(function() {
    $('#numero-contato').mask('(00) 00000-0000');
})

const form = document.getElementById('form-agenda')

const contatos = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    calculaTotalContatos();
    removerContato();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if (contatos.includes(inputNomeContato.value)) {
        alert(`O contato: ${inputNomeContato.value} já foi inserido`);
    } else if (numeros.includes(inputNumeroContato.value)) {
        alert(`O número: ${inputNumeroContato.value} já foi inserido`);
    } else {
        contatos.push(inputNomeContato.value);
        numeros.push(inputNumeroContato.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += `<td><i class="bi bi-trash3 trash-icon" onclick="removerContato('${inputNomeContato.value}')"></i></td>`
        linha += '</tr>'

        linhas += linha;
    }
    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function calculaTotalContatos() {
    let totalContatos = contatos.length;
    document.getElementById('total-contatos').innerHTML = `${totalContatos} contato(s) salvo(s)`;
}

function removerContato(nomeContato) {
    const index = contatos.indexOf(nomeContato) /* a função está encontrando o índice do nome do conatto no array de contatos */
    if (index > -1) {
        contatos.splice(index, 1) /* altera o conteúdo de uma lista, removendo o nome e o número do contato antigo */
        numeros.splice(index, 1)
        linhas = '' /* redefine as linhas para uma string vazia */
        for (let i = 0; i < contatos.length; i ++) {
            let linha = '<tr>'
            linha += `<td>${contatos[i]}</td>`
            linha += `<td>${numeros[i]}</td>`
            linha += `<td><i class="bi bi-trash3 trash-icon" onclick="removerContato('${contatos[i]}')"></i></td>`
            linha += '</tr>'

            linhas += linha;
        }

        atualizaTabela();
        calculaTotalContatos();
    }
}