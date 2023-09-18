const form = document.getElementById('form-agenda')

const contatos = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    calculaTotalContatos();
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
        linha += '</td>'

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