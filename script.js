let valorCustas = document.querySelectorAll('.conteudo__lista__valores__botao');

// Pontuação ////////////////////////////////
let valorAcertos = 0;
function pontuacao(){
    valorAcertos++;
    let valorResultado = document.querySelector('.conteudo__valor__pontos__valor');
    valorResultado.innerHTML = `${valorAcertos}`;
}
/////////////////////////////////////////////

// Função para gerar valor aleatorio ////////
let valorBase = gerarValorCustas();
function gerarValorCustas() {
    const valorMaximo = 707200;
    let valorGerado = parseInt(Math.random() * valorMaximo);
    let valorBaseFormatado = formatarValor(valorGerado);
    let valor = document.getElementById('valor');
    valor.innerHTML = `$${valorBaseFormatado}`;
    return valorGerado;
}
/////////////////////////////////////////////

// Função para converter numero em dinheiro /
function formatarValor(atual) {
    let valorFormatado = atual.toLocaleString('pt-br', {minimumFractionDigits: 2});
    return valorFormatado;
}
/////////////////////////////////////////////

// Função para limpar botões ////////////////
function limparBotoes() {
    for (let contagem = 0; contagem < valorCustas.length; contagem++) {
        const contador = valorCustas[contagem];
        valorCustas[contagem] = resetaClass(contador);
    }
}
function resetaClass(resetar) {
    resetar.classList.remove('conteudo__lista__valores__botao-errado');
    resetar.classList.add('conteudo__lista__valores__botao');
}
/////////////////////////////////////////////

// Funções para comparar botao com o valor //
function acertos() {
    pontuacao();
    valorBase = gerarValorCustas();
    limparBotoes();
}

function erros(errado) {
    errado.classList.add('conteudo__lista__valores__botao-errado');
    errado.classList.remove('conteudo__lista__valores__botao');
}

function a() {
    if (valorBase <= 1403) {
        acertos();
    } else {
        erros(valorCustas[0]);
    }
}

function b() {
    if ((valorBase > 1403) && (valorBase <= 5302) ) {
        acertos();
    } else {
        erros(valorCustas[1]);
    }
}

function c() {
    if ((valorBase > 5302) && (valorBase <= 8838) ) {
        acertos();
    } else {
        erros(valorCustas[2]);
    }
}

function d() {
    if ((valorBase > 8838) && (valorBase <= 17680) ) {
        acertos();
    } else {
        erros(valorCustas[3]);
    }
}

function e() {
    if ((valorBase > 17680) && (valorBase <= 35360) ) {
        acertos();
    } else {
        erros(valorCustas[4]);
    }
}

function f() {
    if ((valorBase > 35360) && (valorBase <= 70720) ) {
        acertos();
    } else {
        erros(valorCustas[5]);
    }
}

function g() {
    if ((valorBase > 70720) && (valorBase <= 106080) ) {
        acertos();
    } else {
        erros(valorCustas[6]);
    }
}

function h() {
    if ((valorBase > 106080) && (valorBase <= 141440) ) {
        acertos();
    } else {
        erros(valorCustas[7]);
    }
}

function i() {
    if ((valorBase > 141440) && (valorBase <= 176800) ) {
        acertos();
    } else {
        erros(valorCustas[8]);
    }
}

function j() {
    if ((valorBase > 176800) && (valorBase <= 212160) ) {
        acertos();
    } else {
        erros(valorCustas[9]);
    }
}

function k() {
    if ((valorBase > 212160) && (valorBase <= 247520) ) {
        acertos();
    } else {
        erros(valorCustas[10]);
    }
}

function l() {
    if ((valorBase > 247520) && (valorBase <= 282880) ) {
        acertos();
    } else {
        erros(valorCustas[11]);
    }
}

function m() {
    if ((valorBase > 282880) && (valorBase <= 303851) ) {
        acertos();
    } else {
        erros(valorCustas[12]);
    }
}

function n() {
    if ((valorBase > 303851) && (valorBase <= 353600) ) {
        acertos();
    } else {
        erros(valorCustas[13]);
    }
}

function o() {
    if ((valorBase > 353600) && (valorBase <= 707200) ) {
        acertos();
    } else {
        erros(valorCustas[14]);
    }
}
/////////////////////////////////////////////