const button = document.querySelector('#button');

button.addEventListener('click',() => {
  let name = window.prompt('Qual é o nome do aluno?')
  let number = window.prompt ('Digite um numero')
  let number2= window.prompt('Digite outor numero')

  const text = document.getElementById('texto');
text.innerHTML = ` Calculando a média final de <mark>${name}</mark>.
As notas obtidas foram <mark>${number}</mark> e <mark>${number2}</mark>.
A média final será <mark>${(parseFloat(number) + parseFloat(number2)) / 2}</mark>.`
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