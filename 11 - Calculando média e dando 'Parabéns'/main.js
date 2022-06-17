

function calculator(){
  
  const text = document.querySelector('#text')
  let name = window.prompt('Qual é o nome do(a) aluno(a)?')
  let grade1 = window.prompt(`Qual foi a primeira nota de ${name} ?`)
  let grade2 = window.prompt(`Qual foi a segunda nota de ${name} ?`)
  let media = (parseFloat(grade1) + parseFloat(grade2)) / 2

  text.innerHTML = `<p>Calculando a média final de ${name}.</p>`
  text.innerHTML += `<p>As notas obtidas foram ${grade1} e ${grade2}.</p>`
  text.innerHTML += `<p>A media final será ${media}.</p>`
  
  if (media >= 7) {
    text.innerHTML += `Amensagem que temos é: <strong style='color:red'>Parabéns!</strong>`
  }else{
    text.innerHTML += `Amensagem que temos é: <strong style='color:red'>Estude um pouco mais!</strong>`
  }
 
};

