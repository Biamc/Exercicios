function inicio(){
  let number = window.prompt ('Digite um numero')
  let number2= window.prompt('Digite outor numero')

document.getElementById('texto').innerHTML = `A soma de ${number} e ${number2} é igual a ${parseInt(number) + parseInt(number2)}!`
};
 
/*

    
 function somar() {
  let n1 = Number(window.prompt('Digite um número: '))
  let n2 = Number(window.prompt('Digite outro número:'))
  soma = n1 + n2

  let res = document.querySelector('#texto')
  res.innerHTML = `<p>A soma entre <mark>${n1}</mark> e <mark>${n2}</mark> é igual a <strong>${soma}</strong>!</p>`
        }
    


*/