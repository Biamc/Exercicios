
const button = document.querySelector('#button')

button.addEventListener('click', () => {
  const text = document.querySelector('#text')
  let number = window.prompt('Digite um numero!')
  let number2 = window.prompt('Digite outro numero!')
  
  if (number > number2){
  text.innerHTML = `<p>Analisando os valores ${parseFloat(number)} e ${parseFloat(number2)}, o maior valor é <strong>${parseFloat(number)}</strong>.</p>`
}else if(number===number2){
  text.innerHTML = `<p>Analisando os valores ${parseFloat(number)} e ${parseFloat(number2)}, ambos são <strong>IGUAIS</strong>.</p>`
}else{
  text.innerHTML = `<p>Analisando os valores ${parseFloat(number)} e ${parseFloat(number2)}, o maior valor é <strong>${parseFloat(number2)}</strong>.</p>`
}
});

