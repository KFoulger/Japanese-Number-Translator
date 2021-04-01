'use strict';
let numberSet;

document.getElementById('genRandom').addEventListener('click', function(){
    let min = parseInt(document.getElementById('minRange').value);
    let max = parseInt(document.getElementById('maxRange').value);

    numberSet = getRandom(min, max);
    document.getElementById('hira').style.color = '#000000';
    document.getElementById('hira').innerText = numberSet[1];
})

document.getElementById('genKanji').addEventListener('click', function(){
    let min = parseInt(document.getElementById('minRange').value);
    let max = parseInt(document.getElementById('maxRange').value);

    numberSet = getRandom(min, max);
    document.getElementById('kanji').style.color = '#000000';
    document.getElementById('kanji').innerText = numberSet[2];
})

document.getElementById('check').addEventListener('click', function(){
    let answer = parseInt(document.getElementById('translation').value);

    if(answer === numberSet[0]){
        document.getElementById('hira').style.color = '#00EC00';
    }
    else{
        document.getElementById('hira').style.color = '#EC0000';
    }
})

document.getElementById('kCheck').addEventListener('click', function(){
    let answer = parseInt(document.getElementById('kTranslation').value);

    if(answer === numberSet[0]){
        document.getElementById('kanji').style.color = '#00EC00';
    }
    else{
        document.getElementById('kanji').style.color = '#EC0000';
    }
})