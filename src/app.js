/*
* File: app.js
* Author: Marty McFly
* Copyright: 2023, Marty McFly
* Group: Szoft I-2-E
* Date: 2023-01-26
* Github: https://github.com/nevem/
* Licenc: GNU GPL
*/

// selectorok ID alapján
const asideElem = document.querySelector("#aside");
const bsideElem = document.querySelector("#bside");
const csideElem = document.querySelector("#cside");
const dsideElem = document.querySelector("#dside");
const calcButton = document.querySelector("#calcButton");
const areaElem = document.querySelector("#area");

//eseménykezelő
calcButton.addEventListener('click', () => {
    // 13, 4, 7, 4
    // console.log('működik')
    let aside = Number(asideElem.value);
    let bside = Number(bsideElem.value);
    let cside = Number(csideElem.value);
    let dside = Number(dsideElem.value);
    //console.log(aside)
    let area = calcArea(aside, bside, cside, dside);
    //console.log(area)
    areaElem.value = area;
});

function calcArea(a, b, c, d) {
    let terulet = ( (a + c)/(4*(a - c)) ) 
    * Math.sqrt(
        (a + b - c + d) *
        (a - b - c + d) *
        (a + b - c - d) *
        (-a + b + c + d)
    )
    return terulet;

}
