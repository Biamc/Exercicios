
const text =  document.querySelector('#text');
const button = document.querySelector('#button');

function season(){
  let month = window.prompt('Digite o mês em extenso (ex: Setembro)')
// O método toUpperCase() transforma todas as letras de uma string para maiúsculas
  switch(month.toUpperCase()) {
    case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO':
      text.innerHTML = `No mês de ${month} a estação é <mark><strong>INVERNO</mark></strong>!`
      break
    case 'ABRIL':case 'MAIO':case 'JUNHO':
          text.innerHTML = `No mês de ${month} a estação é <mark><strong>PRIMAVERA</mark></strong>!`
      break

    case 'JULHO':case 'AGOSTO':case 'SETEMBRO':
      text.innerHTML = `No mês de ${month} a estação é <mark><strong>VERÃO</mark></strong>!`
      break
    case 'OUTUBRO':case 'NOVEMBRO':case 'DEZEMBRO':
      text.innerHTML = `No mês de ${month} a estação é <mark><strong>OUTONO</mark></strong>!`
      break
    default:
      text.innerHTML = `No mês de ${month} a estação é <mark><strong>INDEFINIDA</mark></strong>!`
    }

  }
  

 
/*

function estação() { // Sim, é possível usar acentuação
    let mês = prompt('Digite o mês em extenso (ex: Setembro)')
    let saída = document.querySelector('section#saida')
    let estação
    switch (mês.toUpperCase()) { // O método toUpperCase() transforma todas as letras de uma string para maiúsculas
        case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO': // Podemos testar múltiplos casos em uma mesma linha, desse jeito
            estação = 'INVERNO'
            break // Nunca se esqueça do break!!!
        case 'ABRIL': case 'MAIO': case 'JUNHO':
            estação = 'PRIMAVERA'
            break
        case 'JULHO': case 'AGOSTO': case 'SETEMBRO':
            estação = 'VERÃO'
            break
        case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO':
            estação = 'OUTONO'
            break
        default:
            estação = 'INDEFINIDA'
            break
    }
    saída.innerHTML = `<p>No mês de <mark>${mês}</mark>, estamos na estação <mark><strong>${estação}</strong></mark>.</p>`
}
*/


