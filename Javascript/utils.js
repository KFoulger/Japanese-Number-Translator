'use strict';

//Translates the number given to it
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
    }
    return tNumber;
}

//Generates a random number in a specified range and translates it into hira
//Returns both the original and translated number
function getRandom(min, max){
    let rNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    let numberSet = [rNumber];
    numberSet.push(FindNumber(rNumber));
    return numberSet;
}