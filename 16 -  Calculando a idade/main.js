


function calculateAge(){
  const text = document.querySelector('#text');
  let date = new Date
  let year = date.getFullYear()

  let yearBorn = window.prompt('Qual ano você nasceu?');
  let age = parseInt(year) - parseInt(yearBorn);
  
  text.innerHTML = `<p>Quem nasceu em ${yearBorn} vai completar <strong>${age}</strong> anos em ${year}</p>`

}; 

/*
function calcidade() {
    let agora = new Date
    let ano = agora.getFullYear()

    let nasc = Number(window.prompt('Em que ano você nasceu?'))
    let idade = ano - nasc

    let saida = document.getElementById('saida')
    saida.innerHTML = `<p>Quem nasceu em ${nasc} vai completar <strong>${idade}</strong> anos em ${ano}.</p>`
}
*/

