'use strict';

function FindNumber(number){
    let tNumber = "";
    let length = number.toString();
    let numbers = [];

    //finds what the next digit in the number is and adds it to the beginning of an array
    //Divides by 10 then truncates to remove the number already added to the array
    for(const char of length){
        let num = number % 10;
        numbers.unshift(num);
        number = Math.trunc(number / 10);
    } //Probably could've done this way simpler

    length = length.length; //Don't question it
    for(const i of numbers){
        for(const j of _characters){         
            if(j.romanNumeral === i){
                if(i !== 1) tNumber += j.hiragana;
                //Needed to make sure the current digit is changed without adding new hira/kanji
                if(i === 0){
                    --length;
                    break;
                }
                //Adds the neccessary 10th power on to the end. eg/ 100, 1000, 10000
                switch(length){
                    case 5:
                        tNumber += "まん";
                        break;
                    
                    case 4:
                        if(i === 8){
                            tNumber = tNumber.slice(0,-1);　//Removes the last character of a string
                            tNumber += "っ";
                        }
                        tNumber += (i === 3) ? "ぜん" : "せん";
                        break;
                    
                    case 3:
                        if(i === 8 || i === 6){
                            tNumber = tNumber.slice(0,-1);
                            tNumber += "っ";
                        }
                        tNumber += (i === 3) ? "びゃく" : (i === 6 || i === 8) ? "ぴゃく" : "ひゃく";
                        break;

                    case 2:
                        tNumber += "じゅう";
                        break;

                    case 1:
                        if(i === 1) tNumber += j.hiragana; //Makes sure the number one is only added if its the last digit
                        break;
                }
                --length;
                break;
            }
        }
        //if(numbers.romanNumeral === number){
        //    character = numbers.hiragana;
        //    break;
        //}
    }
    return tNumber;
}

let _characters = [
    {
        "romanNumeral": 0,
        "hiragana": "",
        "kanji": ""
    },
    {
        "romanNumeral": 1,
        "hiragana": "いち",
        "kanji": "一"
    },
    {
        "romanNumeral": 2,
        "hiragana": "に",
        "kanji": "二"
    },
    {
        "romanNumeral": 3,
        "hiragana": "さん",
        "kanji": "三"
    },
    {
        "romanNumeral": 4,
        "hiragana": "よん",
        "kanji": "四"
    },
    {
        "romanNumeral": 5,
        "hiragana": "ご",
        "kanji": "五"
    },
    {
        "romanNumeral": 6,
        "hiragana": "ろく",
        "kanji": "六"
    },
    {
        "romanNumeral": 7,
        "hiragana": "なな",
        "kanji": "七"
    },
    {
        "romanNumeral": 8,
        "hiragana": "はち",
        "kanji": "八"
    },
    {
        "romanNumeral": 9,
        "hiragana": "きゅう",
        "kanji": "九"
    },
    {
        "romanNumeral": 10,
        "hiragana": "じゅう",
        "kanji": "十"
    },
    {
        "romanNumeral": 20,
        "hiragana": "にじゅう",
        "kanji": "二十"
    },
    {
        "romanNumeral": 30,
        "hiragana": "さんじゅう",
        "kanji": "三十"
    },
    {
        "romanNumeral": 40,
        "hiragana": "よんじゅう",
        "kanji": "四十"
    },
    {
        "romanNumeral": 50,
        "hiragana": "ごじゅう",
        "kanji": "五十"
    },
    {
        "romanNumeral": 60,
        "hiragana": "ろくじゅう",
        "kanji": "六十"
    },
    {
        "romanNumeral": 70,
        "hiragana": "ななじゅう",
        "kanji": "七十"
    },
    {
        "romanNumeral": 80,
        "hiragana": "はち",
        "kanji": "八十"
    },
    {
        "romanNumeral": 90,
        "hiragana": "きゅうじゅう",
        "kanji": "九十"
    },
    {
        "romanNumeral": 100,
        "hiragana": "ひゃく",
        "kanji": "百"
    },
    {
        "romanNumeral": 300,
        "hiragana": "さんびゃく",
        "kanji": "三百"
    },
    {
        "romanNumeral": 600,
        "hiragana": "ろっぴゃく",
        "kanji": "六百"
    },
    {
        "romanNumeral": 800,
        "hiragana": "はっぴゃく",
        "kanji": "八百"
    },
    {
        "romanNumeral": 1000,
        "hiragana": "せん",
        "kanji": "千"
    },
    {
        "romanNumeral": 3000,
        "hiragana": "さんぜん",
        "kanji": "三千"
    },
    {
        "romanNumeral": 8000,
        "hiragana": "はっせん",
        "kanji": "八千"
    },
    {
        "romanNumeral": 10000,
        "hiragana": "まん",
        "kanji": "万"
    }
];