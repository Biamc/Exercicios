
function contador(){
  let text = document.getElementById('texto');
  let count = document.querySelector('#input').value;
  text.innerHTML += `<p>Contando de ${count} até 0</p>`

  
  while (count >= 1) {
    
      text.innerHTML += ` ${count} &#x1F449;` 
      count -- // Corresponde a cont = cont - 1
    }
   
  
  text.innerHTML += ` &#x1F3C1;`
};

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
