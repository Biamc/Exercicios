const button = document.querySelector('#button')

button.addEventListener('click', () => {
   let text = document.getElementById('texto');
  let number = Number(document.querySelector('#input').value);
  let number2 = Number(document.querySelector('#input2').value);
  text.innerHTML += `<p>Contando de ${number} até ${number2}</p>`

  if (number < number2){
    while (number <= number2) {
    
      text.innerHTML += ` ${number} &#x1F449;` 
      number ++
    }
  }else if (number > number2) {
    while (number >= number2){
      text.innerHTML += ` ${number} &#x1F449;` 
      number --
    }
    
  }else  {
    text.innerHTML += `Não é possível contar, pois os números são iguais`
  }

   
  
  text.innerHTML += ` &#x1F3C1;`
})


/*
function contagem() {
    let saida = document.getElementById('saida')
    let num = Number(document.getElementById('fnum').value)
    saida.innerHTML += `<h2>Contando de 0 até ${num}</h2>`
    let cont = 0
    while (cont <= num) {
        saida.innerHTML += ` ${cont} &#x1F449;`
        cont ++
    }
    saida.innerHTML += ` &#x1F3C1;`
}
*/
