
const button = document.querySelector('#button')

button.addEventListener('click', () => {
  const text = document.querySelector('#text')
  let number = window.prompt('Digite um numero!')
  
  if (number % 2 === 0){
  text.innerHTML = `<p>O número ${parseFloat(number)} que foi digitado é <strong>PAR</strong>.</p>`
}else{
  text.innerHTML = `<p>O número ${parseFloat(number)} que foi digitado é <strong>IMPAR</strong>.</p>`
}
});

