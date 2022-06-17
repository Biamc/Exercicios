const button = document.querySelector('#button');

button.addEventListener('click',() => {
  
  let number = window.prompt ('Digite um numero') 
  let numberAbs = Math.abs(parseFloat(number))
  let numberInteiro = Math.trunc(parseFloat(number))
  let numberProximo = Math.round(parseFloat(number))
  let numberRaiz2 = Math.sqrt(parseFloat(number))
  let numberRaiz3 =  Math.cbrt(parseFloat(number))
  let numberquadrado = Math. pow(parseFloat(number), 2)
  let numbercubo = Math. pow(parseFloat(number), 3)

  const text = document.getElementById('texto');

  text.innerHTML = `<p>O seu valor absoluto é ${numberAbs}</p>`;
  text.innerHTML += `<p>A sua parte inteira é ${numberInteiro}</p>`;
  text.innerHTML += `<p>O valor inteiro mais próximo é ${numberProximo}</p>`;
  text.innerHTML += `<p>A sua raiz quadrada é ${numberRaiz2}</p>`
  text.innerHTML += `<p>A sua raiz cúbica é ${numberRaiz3}`
  text.innerHTML += `<p></p>O valor de ${number}² é ${numberquadrado}</p>`
  text.innerHTML += `<p>O valor de ${number}³ é ${numbercubo}</p>`
})



 
/*
    
  
 
 
  
        function media() {
            let nom = window.prompt('Qual é o nome do aluno?') // Já que o nome não é um número e sim letras, não é preciso colocar Number() para fazer a covnersão
            let n1 = Number(window.prompt(`Qual foi a primeira nota de ${nom}?`))
            let n2 = Number(window.prompt(`Além de ${n1}, qual foi a outra nota de ${nom}?`))
            med = (n1 + n2)/2 // Se você não colocar os parênteses para forçar a precedência, seu cálculo vai dar um resultado errado, já que a divisão será feita antes.

            let res = document.getElementById('situacao')
            res.innerHTML = `<p>Calculando a média final de <mark>${nom}</mark>.</p>`
            res.innerHTML += `<p>As notas obtidas foram <mark>${n1} e ${n2}</mark>.</p>` // O += é necessário, pois indica um pedido de "mantenha a frase anterior, adicionando essa outra frase". Se não fosse ele, a linha anterior seria apagada.
            res.innerHTML += `<p>A média final será <mark>${med}</mark>.</p>`
        }
    
    


*/