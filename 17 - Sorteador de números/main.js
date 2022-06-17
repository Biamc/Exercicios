
const text =  document.querySelector('#text');
let number = null

function drawNumber(min, max){
  min = Math.floor(1);
  max = Math.floor(100);
  
 number = Math.floor(Math.random() * (max - min)) + min;
  
  
  text.innerHTML += `<p>Acabei de pensar no número <mark>${number}</mark>!</p>`;

}; 

function resetNumber (){
  number = null
  text.innerHTML = null
}

/*
function gerar() {
    let min = 1
    let max = 100
    let dif = max - min
    let aleatorio = Math.random() // Essa função gera um valor Real aleatório entre 0 e 1
    let num = min + Math.trunc(dif * aleatorio)
    
    let res = document.querySelector('section#result')
    res.innerHTML += `<p>Acabei de pensar no número <mark>${num}</mark>!</p>`
}

function limpar() { // Essa é a funcionalidade do outro botão, pra limpar tudo
    let res = document.querySelector('section#result')
    res.innerHTML = null // Vai esvaziar a section toda
}
*/

