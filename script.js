console.log("===== MÓDULO 1: FUNDAMENTOS E LÓGICA =====");

// EXERCÍCIO 1: Calculadora de Média
function calcularMedia(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

const media = calcularMedia(8, 7, 9);

console.log("Média:", media);

if (media >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}


// EXERCÍCIO 2: Verificador de Tipo
function verificarTipo(variavel) {
    console.log("A variável é do tipo " + typeof variavel);
}

verificarTipo("Olá");
verificarTipo(25);
verificarTipo(true);


// EXERCÍCIO 3: Operador Ternário para Status
const idade = 20;

const status = idade >= 18
    ? "Maior de idade"
    : "Menor de idade";

console.log(status);


// EXERCÍCIO 4: Tabuada com for
const numero = 7;

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}


// EXERCÍCIO 5: Dia da Semana com switch
const diaSemana = 3;

switch (diaSemana) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
        break;
    case 4:
        console.log("Quarta");
        break;
    case 5:
        console.log("Quinta");
        break;
    case 6:
        console.log("Sexta");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Número inválido");
}


console.log("===== MÓDULO 2: FUNÇÕES E ARRAYS =====");

// EXERCÍCIO 6: Arrow Function
const calcularArea = (base, altura) => base * altura;

console.log("Área do retângulo:", calcularArea(5, 3));


// EXERCÍCIO 7: Lista de Compras
const listaDeCompras = ["Arroz", "Feijão", "Batata"];

listaDeCompras.push("Macarrão");
listaDeCompras.unshift("Suco");
listaDeCompras.pop();

console.log("Lista final:", listaDeCompras);


// EXERCÍCIO 8: Filtrando, Mapeando e Reduzindo Alunos
const alunos = [
    { nome: "Ana", nota: 8.5, idade: 20 },
    { nome: "João", nota: 6.7, idade: 22 },
    { nome: "Maria", nota: 9.3, idade: 19 },
    { nome: "Carlos", nota: 5.0, idade: 21 },
    { nome: "Beatriz", nota: 7.8, idade: 20 }
];

// 1. Filtrar alunos aprovados
const aprovados = alunos.filter(aluno => aluno.nota >= 7);
console.log("Alunos aprovados:", aprovados);

// 2. Criar uma lista apenas com os nomes
const nomesAlunos = alunos.map(aluno => aluno.nome);
console.log("Nomes dos alunos:", nomesAlunos);

// 3. Calcular a média de idade
const somaIdades = alunos.reduce((soma, aluno) => {
    return soma + aluno.idade;
}, 0);

const mediaIdade = somaIdades / alunos.length;
console.log("Média de idade:", mediaIdade);

// 4. Encontrar o primeiro aluno com nota menor que 6
const alunoEncontrado = alunos.find(aluno => aluno.nota < 6);
console.log("Aluno com nota menor que 6:", alunoEncontrado);


// ===== MÓDULO 3: INTERAÇÃO COM O DOM =====

// EXERCÍCIO 9: Mudar Texto com um Clique
const titulo = document.getElementById("titulo");
const btnMudar = document.getElementById("btnMudar");

if (titulo && btnMudar) {
    btnMudar.addEventListener("click", function () {
        titulo.innerText = "Título Alterado com Sucesso!";
    });
}


// EXERCÍCIO 10: Contador Simples
let contagem = 0;

const contador = document.getElementById("contador");
const btnIncrementar = document.getElementById("btnIncrementar");

if (contador && btnIncrementar) {
    btnIncrementar.addEventListener("click", function () {
        contagem++;
        contador.innerText = contagem;
    });
}


// EXERCÍCIO 11: Destacar Parágrafos
const paragrafos = document.querySelectorAll(".paragrafo");
const btnDestacar = document.getElementById("btnDestacar");

if (btnDestacar) {
    btnDestacar.addEventListener("click", function () {
        paragrafos.forEach(function (paragrafo) {
            paragrafo.classList.add("destaque");
        });
    });
}


// EXERCÍCIO 12: Espelho de Digitação
const campoInput = document.getElementById("campoInput");
const textoRefletido = document.getElementById("textoRefletido");

if (campoInput && textoRefletido) {
    campoInput.addEventListener("input", function () {
        textoRefletido.innerText = campoInput.value;
    });
}


// ===== DESAFIO FINAL: CALCULADORA COM DOM =====

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

const btnSoma = document.getElementById("btnSoma");
const btnSub = document.getElementById("btnSub");
const btnMulti = document.getElementById("btnMulti");
const btnDiv = document.getElementById("btnDiv");

const resultado = document.getElementById("resultado");

// Funções das operações
function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}

// Função auxiliar para ler os números
function calcular(operacao) {
    const valor1 = Number(num1.value);
    const valor2 = Number(num2.value);

    // Impede o cálculo se os campos estiverem vazios
    if (num1.value.trim() === "" || num2.value.trim() === "") {
        resultado.innerText = "Digite os dois números.";
        return;
    }

    if (operacao === "somar") {
        resultado.innerText = somar(valor1, valor2);
    } else if (operacao === "subtrair") {
        resultado.innerText = subtrair(valor1, valor2);
    } else if (operacao === "multiplicar") {
        resultado.innerText = multiplicar(valor1, valor2);
    } else if (operacao === "dividir") {
        if (valor2 === 0) {
            resultado.innerText = "Não se divide por 0.";
        } else {
            resultado.innerText = dividir(valor1, valor2);
        }
    }
}

// Eventos dos botões
if (num1 && num2 && resultado) {
    if (btnSoma) {
        btnSoma.addEventListener("click", function () {
            calcular("somar");
        });
    }

    if (btnSub) {
        btnSub.addEventListener("click", function () {
            calcular("subtrair");
        });
    }

    if (btnMulti) {
        btnMulti.addEventListener("click", function () {
            calcular("multiplicar");
        });
    }

    if (btnDiv) {
        btnDiv.addEventListener("click", function () {
            calcular("dividir");
        });
    }
}