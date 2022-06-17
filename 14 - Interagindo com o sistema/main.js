
const button = document.querySelector('#button')

button.addEventListener('click', () => {
  const text = document.querySelector('#text')
  let dateNow = new Date
   
     text.innerHTML = `<p>O que eu recebi do sistema foi <mark>${dateNow}</mark> </p>`

}); 

/*
dayName = new Array('sunday','monday','tuesday','wendsday','thursday','friday','saturday');
  monthName = new Array ('january','february','march','april','may','june','july','august','september','october','november','december');

  h = today.getHours();
  m = today.getMinutes();
  s = today.getSeconds();
*/