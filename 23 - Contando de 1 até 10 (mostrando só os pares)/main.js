
function contador(){
  let text = document.getElementById('texto');
  
  text.innerHTML += `<p>Números pares de 1 até 10</p>`

  let count = 1
  while (count <= 10) {
    if (count % 2 === 0){
      text.innerHTML += ` <mark>${count}</mark> &#x1F449;`
    }
    count ++ 
  }
  text.innerHTML += ` &#x1F3C1;`
};

/*
function contar() {
    let saida = document.getElementById('saida')

    saida.innerHTML += `<h2>Números pares de 1 até 10</h2>`
    let cont = 2
    while (cont <= 10) {
        saida.innerHTML += ` ${cont} &#x1F449;`
        cont += 2 // Corresponde a cont = cont + 2
    }
    saida.innerHTML += ` &#x1F3C1;`
*/
