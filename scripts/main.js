/*

var monTitre = document.querySelector('h1');
monTitre.textContent = 'Hello world!';
*/


/*

document.querySelector('html').onclick = function() {
    alert('Aïe, arrêtez de cliquer !!');
}

*/

var monBouton = document.querySelector('button');
var monTitre = document.querySelector('h1');

function définirNomUtilisateur() {
  var monNom = prompt('Veuillez saisir votre nom.');
  localStorage.setItem('nom', monNom);
  monTitre.textContent = 'Mozilla est cool, ' + monNom;
}



if(!localStorage.getItem('nom')) {
  définirNomUtilisateur();
} else {
  let nomEnregistré = localStorage.getItem('nom');
  monTitre.textContent = 'Mozilla est cool, ' + nomEnregistré;

  monBouton.onclick = function() {
  définirNomUtilisateur();
}
}