/////////////////////////////////////////////
// Pontuação ////////////////////////////////
let valorAcertos = 0;
let valorResultado = document.querySelector('.conteudo__valor__pontos__valor');
function pontuacao(){
    valorAcertos++;
    pauseTempo();
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
        valorCustas[cancelado].setAttribute('disabled', '');
    }
    botaoReiniciar.classList.add('conteudo__valor__reiniciar-ativado');
    bordaValores.classList.add('conteudo__lista__inativo');
    pauseTempo();
    removerLinha();
}
function desativar(inativo) {
    inativo.classList.add('conteudo__lista__valores__botao-errado');
    inativo.classList.remove('conteudo__lista__valores__botao');
}
/////////////////////////////////////////////
// Começar //////////////////////////////////
let valorCustas = document.querySelectorAll('.conteudo__lista__quantidade');
let valorBase = 0;
let bordaValores = document.getElementById('borda');
let botaoPlay = document.querySelector('.conteudo__valor__icone');
function reiniciarValor() {
    pauseTempo();
    bordaValores.classList.remove('conteudo__lista__inativo');
    valor.classList.remove('conteudo__valor__aleatorio-inativo');
    botaoReiniciar.classList.remove('conteudo__valor__reiniciar-ativado');
    botaoPlay.setAttribute('src', 'img/reset.png');
    valorBase = gerarValorCustas();
    reiniciarSequencia();
    reiniciarCarimbos();
    limparBotoes();
    adicionarLinha();
}
function gerarValorCustas() {
    const valorMaximo = 707200;
    let valorGerado = parseInt(Math.random() * valorMaximo);
    let valorBaseFormatado = formatarValor(valorGerado);
    let valor = document.getElementById('valor');
    valor.innerHTML = `$${valorBaseFormatado}`;
    startTempo();
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
// Converter numero em dinheiro /////////////
function formatarValor(atual) {
    let valorFormatado = atual.toLocaleString('pt-br', {minimumFractionDigits: 2});
    return valorFormatado;
}
/////////////////////////////////////////////
// Limpar botões ////////////////////////////
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
// Tempo ////////////////////////////////////
let tempo = 0;
function startTempo() {
    tempo = setTimeout(cancelarBotoes, 5000);
}
function pauseTempo() {
    clearTimeout(tempo);
}
/////////////////////////////////////////////
// Acertar //////////////////////////////////
function acertos() {
    pontuacao();
    valorBase = gerarValorCustas();
    limparBotoes();
    adicionarLinha();
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
// Comparar botao com o valor ///////////////
function compararValor(vMin, vMax, botao) {
    if ((valorBase > vMin) && (valorBase <= vMax) && (valorErros < 3)) {
        acertos();
    } else {
        erros(botao);
    }
}
/////////////////////////////////////////////
// Linha ////////////////////////////////////
const linhaFrente = document.getElementById('linha');
function adicionarLinha() {
    if (linhaFrente.classList.contains('conteudo__linha__ativa-a')) {
        linhaFrente.classList.remove('conteudo__linha__ativa-a');
        linhaFrente.classList.add('conteudo__linha__ativa-b');
    } else {
        linhaFrente.classList.remove('conteudo__linha__ativa-b');
        linhaFrente.classList.add('conteudo__linha__ativa-a');
    }
}
function removerLinha() {
    linhaFrente.classList.remove('conteudo__linha__ativa-a');
    linhaFrente.classList.remove('conteudo__linha__ativa-b');
}
/////////////////////////////////////////////
