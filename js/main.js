function load() {
    alert("Página carregada");
}

function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigada por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigada por clicar");
}

function redirecionar() {
//    window.open("https://globallabs.academy/");
//    window.location.href = "https://globallabs.academy/";
}

function trocar(elemento) {
    elemento.innerHTML = "Obrigado por passar o mouse";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto");
}

function voltar(elemento) {
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}

/*
function soma(n1, n2) {
    return n1 + n2;
}
alert(soma(5, 10));
*/
/*
var validar = 0;
function validaIdade(idade) {
    if(idade>=18){
        validar = true;
    }else {
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade? ");
validaIdade(idade);
console.log((validar))
*/
/*
function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome);
}*/ 
//alert(setReplace("Vai Japão", "Japão", "Brasil"));

/*
var d = new Date();
alert(d.getDay());
alert(d.getMonth());
alert(d.getHours());
alert(d.getMinutes());
*/

/*
var count;
for(count=0;count<=5;count++) {
    alert(count);
}
*/

/*
count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
}
*/
/*var idade = prompt("Qual sua idade? ");
if (idade >= 18) {
    alert("Maior de idade");
}else {
    alert("Menor de idade");
}*/



/*var frutas = [{nome: "maçã", cor: "vermelha"}, {nome: "uva", cor: "roxa"}];
console.log(frutas);
alert(frutas[1].nome);*/


/*var fruta = {nome: "maçã", cor: "vermelha"};
console.log(fruta.nome);
alert(fruta.cor); */

//var lista = ["maçã","pera","laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista.toString());
//console.log(lista.join(" - "))
//alert(lista.toString());


//var nome = "Vera Ueda";
//var idade = 58;
//var idade2 = 30
//var frase = "Japão é o melhor time de futebol do mundo"
//alert(nome + " tem " + idade + " anos.");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade);
//console.log(frase.toLowerCase());
//alert(frase.replace("Japão", "Brasil"));

