let valorMaximo = 707200;
let valorBase = gerarValorCustas();

let valorBaseFormatado = formatarValor(valorBase);
let valor = document.getElementById('valor');
valor.innerHTML = `$${valorBaseFormatado}`;


let valorCustas = document.querySelectorAll('.conteudo__lista__valores__botao');
console.log(valorCustas[0].value);


// Função para gerar valor aleatorio //

function gerarValorCustas() {
    let valorGerado = parseInt(Math.random() * valorMaximo);
    return valorGerado;
}

///////////////////////////////////////

// Função para converter numero em dinheiro //

function formatarValor(atual) {
    let valorFormatado = atual.toLocaleString('pt-br', {minimumFractionDigits: 2});
    return valorFormatado;
}

//////////////////////////////////////////////


// Funções para comparar botao com o valor //

function a() {
    if (valorBase <= 1403) {
        valorCustas[0].classList.add('conteudo__lista__valores__botao-certo');
        valorCustas[0].classList.remove('conteudo__lista__valores__botao'); 
    } else {
        valorCustas[0].classList.add('conteudo__lista__valores__botao-errado');
        valorCustas[0].classList.remove('conteudo__lista__valores__botao'); 
    }
}

function b() {
    if ((valorBase > 1403) && (valorBase <= 5302) ) {
        valorCustas[1].classList.add('conteudo__lista__valores__botao-certo');
        valorCustas[1].classList.remove('conteudo__lista__valores__botao'); 
    } else {
        valorCustas[1].classList.add('conteudo__lista__valores__botao-errado');
        valorCustas[1].classList.remove('conteudo__lista__valores__botao'); 
    }
}

function c() {
    if ((valorBase > 5302) && (valorBase <= 8838) ) {
        valorCustas[2].classList.add('conteudo__lista__valores__botao-certo');
        valorCustas[2].classList.remove('conteudo__lista__valores__botao'); 
    } else {
        valorCustas[2].classList.add('conteudo__lista__valores__botao-errado');
        valorCustas[2].classList.remove('conteudo__lista__valores__botao'); 
    }
}

function d() {
    if ((valorBase > 8838) && (valorBase <= 17680) ) {
        valorCustas[3].classList.add('conteudo__lista__valores__botao-certo');
        valorCustas[3].classList.remove('conteudo__lista__valores__botao'); 
    } else {
        valorCustas[3].classList.add('conteudo__lista__valores__botao-errado');
        valorCustas[3].classList.remove('conteudo__lista__valores__botao'); 
    }
}

function e() {
    if ((valorBase > 17680) && (valorBase <= 35360) ) {
        valorCustas[4].classList.add('conteudo__lista__valores__botao-certo');
        valorCustas[4].classList.remove('conteudo__lista__valores__botao'); 
    } else {
        valorCustas[4].classList.add('conteudo__lista__valores__botao-errado');
        valorCustas[4].classList.remove('conteudo__lista__valores__botao'); 
    }
}

function f() {
    if ((valorBase > 35360) && (valorBase <= 70720) ) {
        valorCustas[5].classList.add('conteudo__lista__valores__botao-certo');
        valorCustas[5].classList.remove('conteudo__lista__valores__botao'); 
    } else {
        valorCustas[5].classList.add('conteudo__lista__valores__botao-errado');
        valorCustas[5].classList.remove('conteudo__lista__valores__botao'); 
    }
}

function g() {
    if ((valorBase > 70720) && (valorBase <= 106080) ) {
        valorCustas[6].classList.add('conteudo__lista__valores__botao-certo');
        valorCustas[6].classList.remove('conteudo__lista__valores__botao'); 
    } else {
        valorCustas[6].classList.add('conteudo__lista__valores__botao-errado');
        valorCustas[6].classList.remove('conteudo__lista__valores__botao'); 
    }
}

function h() {
    if ((valorBase > 106080) && (valorBase <= 141440) ) {
        valorCustas[7].classList.add('conteudo__lista__valores__botao-certo');
        valorCustas[7].classList.remove('conteudo__lista__valores__botao'); 
    } else {
        valorCustas[7].classList.add('conteudo__lista__valores__botao-errado');
        valorCustas[7].classList.remove('conteudo__lista__valores__botao'); 
    }
}

function i() {
    if ((valorBase > 141440) && (valorBase <= 176800) ) {
        valorCustas[8].classList.add('conteudo__lista__valores__botao-certo');
        valorCustas[8].classList.remove('conteudo__lista__valores__botao'); 
    } else {
        valorCustas[8].classList.add('conteudo__lista__valores__botao-errado');
        valorCustas[8].classList.remove('conteudo__lista__valores__botao'); 
    }
}

function j() {
    if ((valorBase > 176800) && (valorBase <= 212160) ) {
        valorCustas[9].classList.add('conteudo__lista__valores__botao-certo');
        valorCustas[9].classList.remove('conteudo__lista__valores__botao'); 
    } else {
        valorCustas[9].classList.add('conteudo__lista__valores__botao-errado');
        valorCustas[9].classList.remove('conteudo__lista__valores__botao'); 
    }
}

function k() {
    if ((valorBase > 212160) && (valorBase <= 247520) ) {
        valorCustas[10].classList.add('conteudo__lista__valores__botao-certo');
        valorCustas[10].classList.remove('conteudo__lista__valores__botao'); 
    } else {
        valorCustas[10].classList.add('conteudo__lista__valores__botao-errado');
        valorCustas[10].classList.remove('conteudo__lista__valores__botao'); 
    }
}

function l() {
    if ((valorBase > 247520) && (valorBase <= 282880) ) {
        valorCustas[11].classList.add('conteudo__lista__valores__botao-certo');
        valorCustas[11].classList.remove('conteudo__lista__valores__botao'); 
    } else {
        valorCustas[11].classList.add('conteudo__lista__valores__botao-errado');
        valorCustas[11].classList.remove('conteudo__lista__valores__botao'); 
    }
}

function m() {
    if ((valorBase > 282880) && (valorBase <= 303851) ) {
        valorCustas[12].classList.add('conteudo__lista__valores__botao-certo');
        valorCustas[12].classList.remove('conteudo__lista__valores__botao'); 
    } else {
        valorCustas[12].classList.add('conteudo__lista__valores__botao-errado');
        valorCustas[12].classList.remove('conteudo__lista__valores__botao'); 
    }
}

function n() {
    if ((valorBase > 303851) && (valorBase <= 353600) ) {
        valorCustas[13].classList.add('conteudo__lista__valores__botao-certo');
        valorCustas[13].classList.remove('conteudo__lista__valores__botao'); 
    } else {
        valorCustas[13].classList.add('conteudo__lista__valores__botao-errado');
        valorCustas[13].classList.remove('conteudo__lista__valores__botao'); 
    }
}

function o() {
    if ((valorBase > 353600) && (valorBase <= 707200) ) {
        valorCustas[14].classList.add('conteudo__lista__valores__botao-certo');
        valorCustas[14].classList.remove('conteudo__lista__valores__botao'); 
    } else {
        valorCustas[14].classList.add('conteudo__lista__valores__botao-errado');
        valorCustas[14].classList.remove('conteudo__lista__valores__botao'); 
    }
}

/////////////////////////////////////////////