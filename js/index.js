// Obyektlarga aloqador masalalar

// 1-masala

// const person = {
//     name: `Oltinbek`,
//     age: 14,
//     job: `Developer`
// }
// console.log(person);

// 2-masala

// const person = {
//     name: `Oltinbek`,
//     age: 14,
//     job: `Developer`
// }
// person.name = `Olimov Oltinbek`
// console.log(person);

// 3-masala

// const person = {
//     name: `Oltinbek`,
//     age: 14,
//     job: `Developer`
// }
// person.address = `st. A.Navoi, 2-house, 28-flat`;
// console.log(person);

// 4-masala

// const person = {
//     name: `Oltinbek`,
//     age: 14,
//     job: `Developer`
// }
// delete person.job;
// console.log(person);

// 5-masala

// const person = {
//     name: `Oltinbek`,
//     age: 14,
//     job: `Developer`,
//     telefon(){
//         console.log(`Mobil raqam: +998 90.408-78-03     Uy raqam: +998 91.284-15-89`);
//     }
// }
// person.telefon();

// 6-masala

// const person = {
//     name: `Oltinbek`,
//     age: 14,
//     job: `Developer`
// }

// for (const key in person) {
//     console.log(key + `: ` + person[key]);
// }

// 7-masala

// const person = {
//     name: `Oltinbek`,
//     age: 14,
//     job: `Developer`
// }
// console.log(`age` + ': ' + `${person.age}`);

// 8-masala

// O'TMAGANMIZ

// Umumlashtiruvchi masalalar.

// 1-masala

// function countDigitThree(number) {
//     let numStr = number.toString();
    
//     let count = 0;
    
//     for (let i = 0; i < numStr.length; i++) {
//         if (numStr[i] == '3') {
//             count++;
//         }
//     }
    
//     return count;
// }

// console.log(countDigitThree(1313113313131));

// 2-masala

// function toqSonlarBilanMassivYarat(n) {
//     let toqSonlar = []; 
    
//     for (let i = 1; i <= n; i++) {
//         if (i % 2 != 0) {
//             toqSonlar.push(i);
//         }
//     }
    
//     return toqSonlar;
// }

// console.log(toqSonlarBilanMassivYarat(9));

// 3-masala

// function withoutStar(string) {
//     return string.replaceAll(`*`, ``)
// }

// console.log(withoutStar(`Salom * men * Oltinbek`));

// 4-masala

// TUSHUNMADIM

// 5-masala

// tushunmadim

// 6-masala

// function stringToArray(str) {
//     let arr = [];

//     for (let i = 0; i < str.length; i++) {
//         arr.push(str.charAt(i));
//     }

//     return arr; 
// }

// console.log(stringToArray(`salom`));

// 7-masala

// function arrayToString(arr) {
    

//     return arr.join(''); 
// }
// console.log(arrayToString([1, 2, 3, 4]));

// 8-masala

// function byIncludes(str, word) {
//     return str.includes(word);
// }
// console.log(byIncludes(`salom dunyo`, 'salom'));

// 9-masala

// function countLetter(str) {
//     let res = {};

//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
        
//         if (res[char]) {
//             res[char]++;
//         } else {
//             res[char] = 1;
//         }
//     }

//     return res;
// }

// console.log(countLetter(`ssaalloomm`));

// 10-masala

// function concatenateStringsFromArray(arr) {
    
//     let result = "";

//     for (let i = 0; i < arr.length; i++) {
//         result += arr[i];
//     }

//     return result; 
// }
// console.log(concatenateStringsFromArray(`salomdunyo`));

// 11-masala

// tushunmadim

// 12-masala

// function reverseConcatenateArray(arr) {
//     return arr.reverse().join('');
// }

// console.log(reverseConcatenateArray([1, 2, 3, 4]));

// 13-masala

// function splitStringIntoArray(str) {
//     return str.split(/\s+/);
// }

// console.log(splitStringIntoArray( "Hello world how are you"));

// 14-masala

// function reverseWordsInString(str) {
//     return str.split(/\s+/).reverse().join(' ');
// }

// console.log(reverseWordsInString(`salom dunyo`));

// 15-masala

// function getLengthsOfStrings(arr) {
//     return arr.map(function (item) {
//         return item.length
//     });
// }

// console.log(getLengthsOfStrings(["apple", "banana", "cherry"]));

// 16-masala

// function removeSpecialCharacters(str) {
//     return str.replace(/[!@#$%^&*(),.?":{}|<>]/g, '');
// }

// console.log(removeSpecialCharacters("Hello! How are you?"));

// 17-masala

// function truncateString(str, maxLength) {
//     if (str.length <= maxLength) {
//         return str;
//     } else {
//         return str.substring(0, maxLength) + "...";
//     }
// }

// console.log(truncateString("Hello! How are you?"));

// 18-masala

// function capitalizeFirstLetter(arr) {
//     return arr.map(function (value) {
//         return value.charAt(0).toUpperCase() + value.slice(1)
//     });
// }

// console.log(capitalizeFirstLetter(["apple", "banana", "cherry"]));

// 19-masala

// function filterWordsStartingWith(arr, startWord) {
//     return arr.filter(function (item) {
//         return item.startsWith(startWord);
//     });
// }

// console.log(filterWordsStartingWith(["apple", "banana", "cherry", "apricot", "pear"], 'ap'));

// 20-masala

function reverseLettersInWords(str) {
    return str.split(/\s+/).map(word => word.split('').reverse().join('')).join(' ');
}

console.log(reverseLettersInWords( "Hello world how are you"));