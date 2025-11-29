function openMenuMobile() {
    document.querySelector('.elements').classList.add('open');
    document.querySelector('#close').classList.add('open');

}
function closeMenuMobile() {
    document.querySelector('.elements').classList.remove('open');
    document.querySelector('#close').classList.remove('open');

}


var vDateJour = document.getElementById("divDateJour");
var vBtnQF = document.getElementById("btnQF");

vBtnQF.addEventListener("click", afficherConseil);

var d = new Date();

afficherDate();

function afficherDate() {
    vDateJour.innerHTML = d.toDateString();
}

function afficherConseil() {
    var numJourSem = d.getDay();

    var monConseil;

    switch (numJourSem) {
        case 0:
            monConseil = "Si vous vous levez, pensez à vous habiller";
            break;
        case 1:
            monConseil = "Le lundi, je suis comme Robinson Crusoé, j'attends Vendredi..";
            break;
        case 2:
            monConseil = "Le mardi n'est pas si mal... C'est le signe que vous avez survécu au lundi";
            break;
        case 3:
            monConseil = " Croyez en vous et vous aurez déjà fait la moitié du chemin ! !";
            break;
        case 4:
            monConseil = "Ne me parlez pas le jeudi, mon esprit est déjà à demain";
            break;
        case 5:
            monConseil = "Le vendredi est l'occasion de réfléchir aux choses que nous n'avons pas encore effectuées.";
            break;
        case 6:
            monConseil = " Cherchez une activité pour faire la grâce matinée demain!";
            break;
    }
    document.getElementById("divConseil").innerHTML = monConseil;
}
