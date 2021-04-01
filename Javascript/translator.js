'use strict';

document.getElementById('translate').addEventListener('click', function(){
    let base = parseInt(document.getElementById("number").value);
    let translated = FindNumber(base);
    document.getElementById('hira').innerText = translated[0];
    document.getElementById('kanji').innerText = translated[1];
})

document.getElementById('random').addEventListener('click', function(){
    window.location.href = "numberTest.html";
})

/*
document.getElementById('genRandom').addEventListener('click', function(){
    let min = document.getElementById('minRange').innerText;
    let max = document.getElementById('maxRange').innerText;

    let numberSet = getRandom(min, max);
    document.getElementById('hira').innerText = numberSet[1];

})
*/