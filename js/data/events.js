"use strict"

/*
tikslas: Jei norime stebeti paspaudimus ant elemento, tai reikia atspaussdinti jo tekstini turini.
1. susirasti dominanti elementa;
2.inicijuoti įvikio stebejima, duodami nuoroda i funkcija, kuria reikia iskviesti vykdyti;
3.Nurodyti ka daryti kai ivyks stebimas ivykis ant norimo elemento;
*/

// 1.
const pirmas= document.querySelector('.btn.pirmas');
const antras= document.querySelector('.btn.antras');

// 2.

pirmas.addEventListener('click', pirmosiosVeiksmas);
antras.addEventListener('click', antrosiosVeiksmas);


// 3.
let pirmojiKartai =0;
function pirmosiosVeiksmas(){
    pirmojiKartai++;
    return console.log('Pirmasis buvo paspaustas', pirmojiKartai);

}
let antrosiosPaspaudimoKiekis=0;
function antrosiosVeiksmas(){
    antrosiosPaspaudimoKiekis++
    return console.log('Antras buvo paspaustas', antrosiosPaspaudimoKiekis);
    
}