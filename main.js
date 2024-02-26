// let user = 'John Doe';
// console.log(user);
//
// let student = 'sofia';
// console.log(student);
//
// user = student;
// console.log(user);
//
// let test = 1;
// test++;
// console.log(test)
// Boolean(test)
// console.log(Boolean(test));


// let arr = [2, 3, 5, 8];
// let arrMult = 1
// for (let i = 0; i < arr.length; i++) {
//         arrMult *= arr[i]
//     }
// console.log(arrMult)
//
// for (let i = 0; i < 10; i++);
// alert(i);


// let arr = [2, 5, 8, 15, 0, 6, 20, 3];
// let arrNumber = 1;
// let i = 0;
//  for (let i = 0; i>5, i<10; i++ ){
//   arrNumber*= arr[1]
//  }
//   if (i>5 ){
//    console.log(i)}
//   else if (i<10){
//    console.log(arrNumber)}
//  else {
//    console.log('Не подходит')
//   }
// console.log(arrNumber);


// let palindrome = 'шалаш';
// if (isPalindrome(palindrome)){
//  console.log(palindrome)
// } else {
//  console.log('Нет')
// }

// function palindrome(str) {
//  return true;
// }
// if (palindrome()) {
//  console.log(palindrome())
// } else{
//  console.log('nan')
// }


// let a = 7;
// let b = 2;
// let w = Math.min(a,b);
// console.log(w)
//
// let x = 33;
// let y = 8;
// let z = Math.max(x,y);
// console.log(z)
//
// let g = 9;
// let o = 90;
// if (g>o){
//  console.log(g, 'g больше')
// } else{
//  console.log(o, 'o больше')
// }


let length = 10;
let min = 0;
let max = 100;
let numbers = [...Array(length)];
for (let i = 0; i < numbers.length; i++) {
    numbers[i] = Math.round(Math.random() * 100);
}
const newArr = numbers.map(function (item, i, numbers) {
    console.log(i + ": " + item + " (массив:" + numbers + ")");
    if (item === 0) {
        return 'zero'
    }
    if (item % 100 === 0) {
        return item / 100 + 'zero zero'
    }
    if (item % 10 === 0) {
        return item / 10 + 'zero'
    }
    return item
});
console.log("newArr", newArr)
console.log(numbers);




