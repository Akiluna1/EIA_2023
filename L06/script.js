let age = prompt("Bist du alt genung um dieses Spiel zu Spielen? Gib dein Alter ein")

function isAdult(age) {
    if (age >= 18) {
       return true;
    } else {
       return false;
    }
 }
 
 if (isAdult(age)) {
    prompt ("Du kannst das Spiel spielen!");
 } else {
    prompt ("Du solltest jetzt lieber abschalten");
 }
 
 let array =["Du spazierst in der gegend rum","Du siehst eine Katze auf der Straße","Du denkst dir OMGOMG wie toll!<3","Du gehst zur Katze"]
prompt(array[0])
prompt(array[1]);
prompt(array[2])
prompt(array[3]);

let decision = prompt("Streichelst du die Katze sofort oder pspsp du zuerst?");

if(decision == "streicheln"|| decision=="Streicheln"){
    prompt("Der Katze hat es nicht gefallen das du sie einfach so gestreichelt hast. Sie faucht dich an un rennt weg! (ง︡'-'︠)ง")
    prompt("Du gehst traurig weiter")
}
else if(decision == "pspsp"|| decision=="PSPSP"){
    prompt("Die Katze findet es toll das du psppspspspsps gemacht hast. Sie streckt sich zu dir hin und du streichelst sie! ≧◠ᴥ◠≦")
    prompt("Du gehst glücklich weiter")
}
else {
    prompt('Keine korrekte Eingabe entweder streicheln oder pspsp');
 }

 
 