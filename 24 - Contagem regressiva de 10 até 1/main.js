
function contador(){
  let text = document.getElementById('texto');
  
  text.innerHTML += `<p>Contagem Regressiva de 10 a 1</p>`

  let count = 10
  while (count >= 1) {
   
    text.innerHTML += `${count} &#x1F449;` 
     count -- // Corresponde a cont = cont - 1
    }
  text.innerHTML += ` &#x1F3C1;`
};

