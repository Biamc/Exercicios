
const button = document.querySelector('#button')

button.addEventListener('click', () => {
  const text = document.querySelector('#text');
  let dateNow = new Date();
  let dateNowString = dateNow.toDateString();
  let dayWeek = dateNowString.slice(0,3);
  let day = dateNowString.slice(8,10);
  let month = dateNowString.slice(4,7);
  let year = dateNowString.slice(11,15);
  let dateTime = dateNow.toTimeString();
  let hour = dateTime.slice(0,2);
  let minutes = dateTime.slice(3,5);
  let seconds = dateTime.slice(6,8);
  
   text.innerHTML = `<p>Dia: <mark>${day}</mark> </p>`
   text.innerHTML += `<p>Mês: <mark>${month}</mark> </p>`
   text.innerHTML += `<p>Ano: <mark>${year}</mark> </p>`
   text.innerHTML += `<p>Dia da semana: <mark>${dayWeek}</mark> </p>`
   text.innerHTML += `<p>Hora: <mark>${hour}</mark> </p>`
   text.innerHTML += `<p>Minutos: <mark>${minutes}</mark> </p>`
   text.innerHTML += `<p>Segundos: <mark>${seconds}</mark> </p>`

}); 

/*
function info() {
    let meses = new Array('Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez')
    let semana = new Array ('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb')
    let agora = new Date
    let saida = document.getElementById('saida')
    let dia = agora.getDate()
    let mes = agora.getMonth() // Jan = 0 | Fev = 1 | Mar = 2 e assim vai...
    let ano = agora.getFullYear()
    let sem = agora.getDay()  // Dom = 0 | Seg = 1 | Ter = 2 e assim vai...
    let hora = agora.getHours()
    let min = agora.getMinutes()
    let seg = agora.getSeconds()
    saida.innerHTML = `<p>Dia: <mark>${dia}</mark></p>`
    saida.innerHTML += `<p>Mês: <mark>${meses[mes]}</mark></p>`
    saida.innerHTML += `<p>Ano: <mark>${ano}</mark></p>`
    saida.innerHTML += `<p>Dia da semana: <mark>${semana[sem]}</mark></p>`
    saida.innerHTML += `<p>Hora: <mark>${hora}</mark></p>`
    saida.innerHTML += `<p>Minutos: <mark>${min}</mark></p>`
    saida.innerHTML += `<p>Segundos: <mark>${seg}</mark></p>`
}
*/