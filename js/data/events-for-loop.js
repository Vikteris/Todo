"use strict"

// 1.

const mygtukai =document.querySelectorAll(".btn")

// 2.
for(let k= 0; k<mygtukai.length; k++){
    mygtukai[k].addEventListener('click', paspaudimas);
}

// 3.

let paspaudimoKiekis = Array(mygtukai.length).fill(0);

function paspaudimas(event){
    const paspaustasElementas= event.target;
    const duomenys= paspaustasElementas.dataset;
    const index=parseInt(duomenys.number);
    // console.log(event.target);  // event arba event.target; ir concole prasiičekini info apie rodoma dalyka.
    // console.log(duomenys);
    console.log(paspaudimoKiekis);
    
    paspaudimoKiekis[index - 1]++;
    
    return console.log(`Paspaustas ${index} ${paspaudimoKiekis[index -1]} kartu.`);
}

console.log(paspaudimoKiekis);
