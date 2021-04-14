'use strict';

document.getElementById('translate').addEventListener('click', function(){
    let base = parseInt(document.getElementById("number").value);
    let translated = FindNumber(base);
    document.getElementById('hira').innerText = translated[0];
    document.getElementById('kanji').innerText = translated[1];
})

