
const text =  document.querySelector('#text');
const button = document.querySelector('#button');


function numberDrawn (){
  min = Math.floor(1);
  max = Math.floor(100);
  
  numberChosen = Math.floor(Math.random() * (max - min)) + min;
}
 

button.addEventListener('click', () => {

  let number = Number(window.prompt('Qual é o seu palpite?'))

  if ( numberChosen >number ){
    text.innerHTML += `<p>Você falou ${number}. Meu número é <strong>MAIOR</strong>!</p>`
  }else if(numberChosen < number){
    text.innerHTML += `<p>Você falou ${number}. Meu número é <strong>MENOR</strong>!</p>`
  }else{
    button.style.visibility  = 'hidden'
    text.innerHTML += `<p><strong>PARABÉNS!</strong> Você acertou! Eu tinha sorteado o valor ${numberChosen}</p>`
  }

})


