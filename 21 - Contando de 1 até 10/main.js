
function contador(){
  let text = document.getElementById('texto');
  
  text.innerHTML += `<p>Contando de 1 até 10</p>`

  let count = 1
  while (count <= 10) {
      text.innerHTML += ` ${count} &#x1F449;`
      count ++ // Corresponde a cont = cont + 1
  }
  text.innerHTML += ` &#x1F3C1;`
};
