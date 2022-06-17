
const text =  document.querySelector('#text');
const button = document.querySelector('#button');

function chooseANumber(){
  let number1 = Number(window.prompt('Primeiro valor:'))
  let number2 = Number(window.prompt('Segundo valor:'))
  let somar = [1]
  let subtrair = [2]
  let multiplicar = [3]
  let dividir = [4]

  let operation = window.prompt(`Os valores informados ${number1} e ${number2}.
  O que vamos fazer?
  [1] Somar
  [2] Subtrair
  [3] Multiplicar
  [4] Dividir`)


  if (operation == somar){
    text.innerHTML = `${number1} + ${number2} = ${(number1 + number2)}`
  }else if (operation == subtrair){
    text.innerHTML = `${number1} - ${number2} = ${(number1 - number2)}`
  }else if (operation == multiplicar ){
    text.innerHTML = `${number1} x ${number2} = ${(number1 * number2)}`
  }else if (operation == dividir) {
    text.innerHTML = `${number1} / ${number2} = ${(number1 / number2)}`
  }else{
    text.innerHTML = `OPÇÃO INVALIDA! você digitou ${number1} e ${number2}, mas não sei o que fazer com eles.`
  }
}
 
/*
function chooseANumber() {
    let n1 = Number(prompt('Primeiro valor:'))
    let n2 = Number(prompt('Segundo valor:'))
    let op = Number(prompt(`Valores informados: ${n1} e ${n2}. \nO que vamos fazer? \n[1] Somar \n[2] Subtrair \n[3] Multiplicar \n[4] Dividir`))

    let saida = document.getElementById('saida')
    saida.innerHTML = `<h2>Calculando...</h2>`
    switch (op) { // A estrutura switch basicamente permite você testar valores dentro de uma variável ou expressão. Ela é compatível apenas com números inteiros e strings
        case 1:
            saida.innerHTML += `<p>${n1} + ${n2} = <strong>${n1+n2}</strong></p>`
            break // O break é obrigatório em cada case. Se não for colocado, acontecerá a execução de vários comandos indesejados de outros cases
        case 2:
            saida.innerHTML += `<p>${n1} - ${n2} = <strong>${n1-n2}</strong></p>`
            break
        case 3:
            saida.innerHTML += `<p>${n1} x ${n2} = <strong>${n1*n2}</strong></p>`
            break
        case 4:
            saida.innerHTML += `<p>${n1} / ${n2} = <strong>${(n1/n2).toLocaleString('pt-BR')}</strong></p>` // O método toLocaleString() é muito útil para mostrar números de forma mais compatível com o que usamos aqui no Brasil.
            break
        default: // Se o usuário não digitar nenhum dos valores acima, vai cair aqui
            saida.innerHTML += `<p>OPÇÃO INVÁLIDA! Você digitou ${n1} e ${n2}, mas não sei o que fazer com eles. </p>`
            break
    }
}
*/


