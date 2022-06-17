const button = document.querySelector('#button');

button.addEventListener('click', () => {
  let text = document.querySelector('#texto');
  let number = Number(document.querySelector('#input').value);
  let result = 1;
  
  text.innerHTML += `<h2>Calculando ${number} </h2>`
  let multipliclator = number;
  while (multipliclator > 1) {
    text.innerHTML += `${multipliclator} x `
    result *= multipliclator
    multipliclator--
  }
   
  text.innerHTML += `1 = ${result}`


  

    
  
})
  
    


/*for (let i = firstMulti; i>1; i--) {
  
  result * i
}*/

