//Part 1: Thinking Functionally
//Take an array of numbers and return the sum
//let numbers = [1, 2, 3];
function sum(numbers) {
    let total = 0;
    for (let number of numbers) { // lets you loop the array
        total += number
    }
    return total
}
console.log(sum (numbers))

//Take an array of numbers and return the average
let avg = [4, 5, 6]
function average(avg){
    let total = 0;
    for(let number of avg) {
        total += number
    }
    return total / avg.length


}
console.log(average(avg))

// Take an array of strings and return the longest string
let str = ["build", "chicken", "dog"]
function longeststring(str) {
    let longest = "";
    for(let string of str){
        if(string.length > longest.length) {
            longest = string;
        }
    }
    return longest
}
console.log(longeststring(str))