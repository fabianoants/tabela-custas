/////////////////////////////////////////////
// Pontuação ////////////////////////////////
let valorAcertos = 0;
let valorResultado = document.querySelector('.conteudo__valor__pontos__valor');
function pontuacao(){
    valorAcertos++;
    valorResultado.innerHTML = `${valorAcertos}`;
}
/////////////////////////////////////////////
// Tentativas ///////////////////////////////
let carimbosSemEfeito = document.querySelectorAll('.conteudo__tentativas__carimbos');
let valorErros = 0;
function tentativas() {
    valorErros++;
    if (valorErros === 1) {
        carimbosSemEfeito[0].classList.add('conteudo__tentativas__com-carimbo');
        carimbosSemEfeito[0].classList.remove('conteudo__tentativas__sem-carimbo');
    } 
    if (valorErros === 2) {
        carimbosSemEfeito[1].classList.add('conteudo__tentativas__com-carimbo');
        carimbosSemEfeito[1].classList.remove('conteudo__tentativas__sem-carimbo');
    }
    if (valorErros === 3) {
        carimbosSemEfeito[2].classList.add('conteudo__tentativas__com-carimbo');
        carimbosSemEfeito[2].classList.remove('conteudo__tentativas__sem-carimbo');
    }
}
/////////////////////////////////////////////
// Encerrar /////////////////////////////////
const botaoReiniciar = document.querySelector('.conteudo__valor__reiniciar');
function cancelarBotoes() {
    for (let cancelado = 0; cancelado < valorCustas.length; cancelado++) {
        const zerado = valorCustas[cancelado];
        valorCustas[cancelado] = desativar(zerado);
        valor.classList.add('conteudo__valor__aleatorio-inativo');
    }
    botaoReiniciar.classList.add('conteudo__valor__reiniciar-ativado');
    bordaValores.classList.add('conteudo__lista__inativo');
}
function desativar(inativo) {
    inativo.classList.add('conteudo__lista__valores__botao-errado');
    inativo.classList.remove('conteudo__lista__valores__botao');
}
/////////////////////////////////////////////
// Começar //////////////////////////////////
let bordaValores = document.getElementById('borda');
let botaoPlay = document.querySelector('.conteudo__valor__icone');
function reiniciarValor() {
    bordaValores.classList.remove('conteudo__lista__inativo');
    valor.classList.remove('conteudo__valor__aleatorio-inativo');
    botaoReiniciar.classList.remove('conteudo__valor__reiniciar-ativado');
    botaoPlay.setAttribute('src', 'img/reset.png');
    valorBase = gerarValorCustas();
    reiniciarSequencia();
    reiniciarCarimbos();
    limparBotoes();
}
function gerarValorCustas() {
    const valorMaximo = 707200;
    let valorGerado = parseInt(Math.random() * valorMaximo);
    let valorBaseFormatado = formatarValor(valorGerado);
    let valor = document.getElementById('valor');
    valor.innerHTML = `$${valorBaseFormatado}`;
    return valorGerado;
}
function reiniciarSequencia() {
    valorAcertos = 0;
    valorResultado.innerHTML = `${valorAcertos}`;
    valorErros = 0;
}
function reiniciarCarimbos() {
    for (let carimbo = 0; carimbo < carimbosSemEfeito.length; carimbo++) {
        const carimboLimpo = carimbosSemEfeito[carimbo];
        carimboLimpo.classList.remove('conteudo__tentativas__com-carimbo');
        carimboLimpo.classList.add('conteudo__tentativas__sem-carimbo');
    }
}
/////////////////////////////////////////////
// Gerar valor aleatorio ////////////////////
let valorCustas = document.querySelectorAll('.conteudo__lista__quantidade');
let valorBase = 0;

/////////////////////////////////////////////
// Converter numero em dinheiro /////////////
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
    resetar.removeAttribute('disabled');
}
/////////////////////////////////////////////
// Acertar //////////////////////////////////
function acertos() {
    pontuacao();
    valorBase = gerarValorCustas();
    limparBotoes();
}
/////////////////////////////////////////////
// Errar ////////////////////////////////////
function erros(errado) {
    errado.setAttribute('disabled', '');
    errado.classList.add('conteudo__lista__valores__botao-errado');
    errado.classList.remove('conteudo__lista__valores__botao');
    tentativas();
    if (valorErros === 3) {
        cancelarBotoes();
    }
}
/////////////////////////////////////////////
// Funções para comparar botao com o valor //
function a() {
    if ((valorBase <= 1403) && (valorErros < 3)) {
        acertos();
    } else {
        erros(valorCustas[0]);
    }
}
function b() {
    if ((valorBase > 1403) && (valorBase <= 5302) && (valorErros < 3)) {
        acertos();
    } else {
        erros(valorCustas[1]);
    }
}
function c() {
    if ((valorBase > 5302) && (valorBase <= 8838) && (valorErros < 3)) {
        acertos();
    } else {
        erros(valorCustas[2]);
    }
}
function d() {
    if ((valorBase > 8838) && (valorBase <= 17680) && (valorErros < 3)) {
        acertos();
    } else {
        erros(valorCustas[3]);
    }
}
function e() {
    if ((valorBase > 17680) && (valorBase <= 35360) && (valorErros < 3)) {
        acertos();
    } else {
        erros(valorCustas[4]);
    }
}
function f() {
    if ((valorBase > 35360) && (valorBase <= 70720) && (valorErros < 3)) {
        acertos();
    } else {
        erros(valorCustas[5]);
    }
}
function g() {
    if ((valorBase > 70720) && (valorBase <= 106080) && (valorErros < 3)) {
        acertos();
    } else {
        erros(valorCustas[6]);
    }
}
function h() {
    if ((valorBase > 106080) && (valorBase <= 141440) && (valorErros < 3)) {
        acertos();
    } else {
        erros(valorCustas[7]);
    }
}
function i() {
    if ((valorBase > 141440) && (valorBase <= 176800) && (valorErros < 3)) {
        acertos();
    } else {
        erros(valorCustas[8]);
    }
}
function j() {
    if ((valorBase > 176800) && (valorBase <= 212160) && (valorErros < 3)) {
        acertos();
    } else {
        erros(valorCustas[9]);
    }
}
function k() {
    if ((valorBase > 212160) && (valorBase <= 247520) && (valorErros < 3)) {
        acertos();
    } else {
        erros(valorCustas[10]);
    }
}
function l() {
    if ((valorBase > 247520) && (valorBase <= 282880) && (valorErros < 3)) {
        acertos();
    } else {
        erros(valorCustas[11]);
    }
}
function m() {
    if ((valorBase > 282880) && (valorBase <= 303851) && (valorErros < 3)) {
        acertos();
    } else {
        erros(valorCustas[12]);
    }
}
function n() {
    if ((valorBase > 303851) && (valorBase <= 353600) && (valorErros < 3)) {
        acertos();
    } else {
        erros(valorCustas[13]);
    }
}
function o() {
    if ((valorBase > 353600) && (valorBase <= 707200) && (valorErros < 3)) {
        acertos();
    } else {
        erros(valorCustas[14]);
    }
}
/////////////////////////////////////////////
