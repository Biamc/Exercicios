let count = 0;


function contador(){
  count++;
  
  document.getElementById('texto').innerHTML = `O contador está com <mark>${count}</mark> cliques.`
};

function zerarContador (){
  count = 0;
  document.getElementById('texto').innerHTML = `O contador está com <mark>${count}</mark> cliques.`
};
