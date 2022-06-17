
function contador(){
  let text = document.getElementById('texto');
  
  text.innerHTML += `<p>Contando de 1 até 10, marcando os pares</p>`

  let count = 1
  while (count <= 10) {
    if (count % 2 === 0){
      text.innerHTML += ` <mark>${count}</mark> &#x1F449;`
    }else{
      text.innerHTML += `${count} &#x1F449;`
      
    }
    count ++ // Corresponde a cont = cont + 1
  }
  text.innerHTML += ` &#x1F3C1;`
};
