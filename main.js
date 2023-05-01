function gerarTabuada() {
    var numero = parseInt(document.getElementById('numero').value)
    var tabela = document.getElementById('tabela-tabuada');

    tabela.innerHTML = ""

    for (var i = 1; i <= 10; i++) {
        var resultado = numero * i
        var linha = "<tr><td>" + numero + " x " + i + "</td><td>=</td><td>" + resultado + "</td></tr>";

        tabela.innerHTML += linha

    }
}

function limpar() {
    var tabela = document.getElementById('tabela-tabuada');
    tabela.innerHTML = "";
}


//DARK MODE

const chk = document.getElementById('chk')
chk.addEventListener('change', () => {
    document.body.classList.toggle('dark')
})