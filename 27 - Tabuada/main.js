const button = document.querySelector('#button')

button.addEventListener('click', () => {
   let text = document.getElementById('texto');
  let number = Number(document.querySelector('#input').value);
  let multi = 1

  while (multi <=10){
    text.innerHTML += `<p>${number} x ${multi} = ${number * multi}</p>`
    multi ++
  }
  
  
})



/*
text.innerHTML += `<p>Tabuada de ${number}</p>`
  text.innerHTML +=`<p> ${number} x 1 = ${number * 1}</p>`
  text.innerHTML +=`<p> ${number} x 2 = ${number * 2}</p>`
  text.innerHTML +=`<p> ${number} x 3 = ${number * 3}</p>`
  text.innerHTML +=`<p> ${number} x 4 = ${number * 4}</p>`
  text.innerHTML +=`<p> ${number} x 5 = ${number * 5}</p>`
  text.innerHTML +=`<p> ${number} x 6 = ${number * 6}</p>`
  text.innerHTML +=`<p> ${number} x 7 = ${number * 7}</p>`
  text.innerHTML +=`<p> ${number} x 8 = ${number * 8}</p>`
  text.innerHTML +=`<p> ${number} x 9 = ${number * 9}</p>`
  text.innerHTML +=`<p> ${number} x 10 = ${number * 10}</p>`
*/