/*LINK DOS ELEMENTOS HTML */
/*BOTÕES*/
const botaoCalcular = document.getElementById("b-calcular")
const botaoVoltar = document.getElementById("b-voltar")
const botaoLimpar = document.getElementById("b-limpar")

/*TELA DA CALCULADORA*/
const calculadoraTela = document.getElementById("calculadora")

/*RESPOSTA DE ERRO AO COLOCAR VALORES INCORRETOS */
const respostaErro = document.getElementById("resposta-erro")

/*SECTION DA PÁGINA HTML */
const section = document.getElementById("section")

/*RESULTADOS APÓS O CALCULO*/
const resultados = document.getElementById("resultados")

/*RESULTADO DO IMC*/
const resulSeuImc = document.getElementById("seu-imc")

/*CLASSIFICAÇÃO DO IMC*/
const imcClassificacao = document.getElementById("imc-clacificacao")

/*ELEMENTOS DA TABELA PARA MUDAR A COR DEPENDENDO DO IMC*/
const tabelaLinhaMagreza = document.getElementById("magreza")
const tabelaLinhaNormal = document.getElementById("normal")
const tabelaLinhaObesidadeI = document.getElementById("obesidade-i")
const tabelaLinhaObesidadeII = document.getElementById("obesidade-ii")
const tabelaLinhaObesidadeIII = document.getElementById("obesidade-iii")

/*INPUTS TIPO NUMBER*/
const inputAltura = document.getElementById("altura")
const inputPeso = document.getElementById('peso')

/*ARRAY COM OS OBJETOS QUE CONTEM OS IMCs E SUAS CLASSIFICAÇÕES*/
const classificacaoIMC = [
    {
        abaixo: 18.5,
        classificacao: "MAGREZA"
    },
    {
        pesoMin: 18.5,
        pesoMax: 24.9,
        classificacao: "NORMAL"
    },
    {
        pesoMin: 25.0,
        pesoMax: 29.9,
        classificacao: "OBESIDADE I"
    },
    {
        pesoMin: 30.0,
        pesoMax: 39.0,
        classificacao: "OBESIDADE II"
    },
    {
        maiorOuIgual: 40.0,
        classificacao: "OBESIDADE III"
    },
];


/*FUNÇÕES*/

/*FUNÇÃO QUE FAZ O CALCULO DO IMC E RETORNA O VALOR DO MESMO*/
const calculoIMC = (altura, peso) => {
    const imc = peso / (altura * altura)
    return imc.toFixed(2)
}

/*FUNÇÃO QUE VERIFICA O IMC E RETORNA SUA CLASSIFICAÇÃO*/
const verificacaoIMC = dado => {
    let classificacaoDado
    if (dado < classificacaoIMC[0].abaixo) {
        classificacaoDado = classificacaoIMC[0].classificacao
    } else if (dado < classificacaoIMC[1].pesoMax && dado >= classificacaoIMC[1].pesoMin) {
        classificacaoDado = classificacaoIMC[1].classificacao
    } else if (dado <= classificacaoIMC[2].pesoMax && dado >= classificacaoIMC[2].pesoMin) {
        classificacaoDado = classificacaoIMC[2].classificacao
    } else if (dado <= classificacaoIMC[3].pesoMax && dado >= classificacaoIMC[3].pesoMin) {
        classificacaoDado = classificacaoIMC[3].classificacao
    } else if (dado >= classificacaoIMC[4].maiorOuIgual) {
        classificacaoDado = classificacaoIMC[4].classificacao
    }
    return classificacaoDado
}

/*FUNÇÃO QUE RESETA AS CORES DA TEBELA DE RESULTADOS*/
const coresNormaisTabela = () => {
    /*VOLTANDO A CORES NORMAIS*/
    tabelaLinhaMagreza.style.fontWeight = ""
    tabelaLinhaMagreza.style.fontSize = ""
    tabelaLinhaMagreza.style.color = ""
    tabelaLinhaNormal.style.fontWeight = ""
    tabelaLinhaNormal.style.fontSize = ""
    tabelaLinhaNormal.style.color = ""
    tabelaLinhaObesidadeI.style.fontWeight = ""
    tabelaLinhaObesidadeI.style.fontSize = ""
    tabelaLinhaObesidadeI.style.color = ""
    tabelaLinhaObesidadeII.style.fontWeight = ""
    tabelaLinhaObesidadeII.style.fontSize = ""
    tabelaLinhaObesidadeII.style.color = ""
    tabelaLinhaObesidadeIII.style.fontWeight = ""
    tabelaLinhaObesidadeIII.style.fontSize = ""
    tabelaLinhaObesidadeIII.style.color = ""
}


/*EVENTOS DOM */

/*AO CLICAR NO BOTÃO CALCULAR, FAZ O CALCULO UTILIZANDO AS FUNÇÕES ACIMA*/
botaoCalcular.addEventListener('click', () => {
    const valueAltura = Number(inputAltura.value)
    const valuePeso = Number(inputPeso.value);
    const imc = Number(calculoIMC(valueAltura, valuePeso));
    const claIMC = verificacaoIMC(imc);


    /*VALIDAÇÃO DE DADOS*/
    if (imc > 0 && valueAltura !== 0) {
        section.style.height = "428px";
        resultados.style.display = "flex";
        calculadoraTela.style.display = "none";
        resulSeuImc.innerHTML = imc;
        imcClassificacao.innerHTML = claIMC;

        /*MUDANDO A COR DA TABELA DE ACORDO COM O IMC DO USUÁRIO*/
        if (claIMC === "MAGREZA") {
            coresNormaisTabela()
            tabelaLinhaMagreza.style.fontWeight = "500"
            tabelaLinhaMagreza.style.fontSize = "1rem"
            tabelaLinhaMagreza.style.color = "#e6cd5e"

        } else if (claIMC === "NORMAL") {
            coresNormaisTabela()
            tabelaLinhaNormal.style.fontWeight = "500"
            tabelaLinhaNormal.style.fontSize = "1rem"
            tabelaLinhaNormal.style.color = "#78df89"
        } else if (claIMC === "OBESIDADE I") {
            coresNormaisTabela()
            tabelaLinhaObesidadeI.style.fontWeight = "500"
            tabelaLinhaObesidadeI.style.fontSize = "1rem"
            tabelaLinhaObesidadeI.style.color = "#f7a576"
        } else if (claIMC === "OBESIDADE II") {
            coresNormaisTabela()
            tabelaLinhaObesidadeII.style.fontWeight = "500"
            tabelaLinhaObesidadeII.style.fontSize = "1rem"
            tabelaLinhaObesidadeII.style.color = "#f78976"
        }
        else if (claIMC === "OBESIDADE III") {
            coresNormaisTabela()
            tabelaLinhaObesidadeIII.style.fontWeight = "500"
            tabelaLinhaObesidadeIII.style.fontSize = "1rem"
            tabelaLinhaObesidadeIII.style.color = "#fd5e5e"
        }

    }
    if (valueAltura === 0 || valuePeso === 0) {
        section.style.height = "478px"
        respostaErro.innerHTML = "Digite valores acima de 0"

    }

})

/*AO CLICAR LIMPA A MENSAGEM DE ERRO E DIMINUI A SECTION APÓS TIRAR A MENSAGEM DE ERRO*/
botaoLimpar.addEventListener('click', () => {

    section.style.height = "428px";
    respostaErro.innerHTML = ''


})

/*AO CLICAR VOLTA PARA PÁGINA INICIAL DA CALCULADORA*/
botaoVoltar.addEventListener("click", () => {
    resultados.style.display = "none";
    calculadoraTela.style.display = "flex";
    section.style.height = "428px";
    respostaErro.innerHTML = ''
})