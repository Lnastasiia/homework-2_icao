
/*const Icao = {
    '0': 'Zero', '1': 'One', '2': 'Two', '3': 'Three', '4': 'Four', '5': 'Five', '6': 'Six', '7': 'Seven', '8': 'Eight', '9': 'Nine',
    'a': 'Alpha', 'b': 'Bravo', 'c': 'Charlie', 'd': 'Delta', 'f': 'Foxtrot', 'g': 'Golf', 'h': 'Hotel', 'i': 'India',
    'k': 'Kilo', 'l': 'Limo', 'm': 'Mike', 'n': 'November', 'o': 'Oscar', 'p': 'Papa', 'q': 'Quebec', 'r': 'Romeo',
    's': 'Sierra', 't': 'Tango', 'u': 'Uniform', 'v': 'Victor', 'w': 'Whiskey', 'x': 'X-ray', 'y': 'Yankee', 'z': 'Zulu',
    }*/

let arrAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let arrText = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel', 'India', 'Juliet', 'Kilo', 'Lima', 'Mike', 'November', 'Oscar', 'Papa', 'Quebec', 'Romeo', 'Sierra', 'Tango', 'Uniform', 'Victor', 'Wiskey', 'X-ray', 'Yankee', 'Zulu', 'Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    

let inputStr = prompt('Введите буквенно-цифровое выражение');

console.log('Буквенно-цифровое выражение:', inputStr);

let arrinputStr = inputStr
                        .toLowerCase()
                        .split('');
                        
                         
console.log( 'inputStr', arrinputStr );

let result = [];

for (let j = 0; j < arrinputStr.length; j++){

    for (let i = 0; i < arrAlphabet.length; i++){
        if(arrinputStr[j] == arrAlphabet[i]){
            result.push(arrText[i]);
            
        }
    }
}
console.log('Result', result);
result = result.join(' ');
console.log('Выражение алфавитом ICAO:', result);
