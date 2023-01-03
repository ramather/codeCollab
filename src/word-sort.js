import { bubbleSort } from "./sorts.js"
const str = "hello this is going to be our example string yada yada yada"
const str2 = "the quick brown fox jumps over the lazy dog"

const sortedChars = (str) => {
    // gets rid of spaces and splits string into an array
    const arr = str.replace(/\s/g, '').split('')
    // sorts the string (we have to write our own sorting functions)
    const sortedArr = bubbleSort(arr)
    // returns array as a string
    return sortedArr.join('')
}

console.log(sortedChars(str))
console.log(sortedChars(str2))

