/* 
1) You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
Now convert this array into an even array (array with even
numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
method. Hints: add one to any odd number and it will become an even
number.
 */
const oddArray = [ 1, 3, 5, 7, 9 ];
const evenArrayFor = [];
for(const num of oddArray){
    evenArrayFor.push(num+1)
}
console.log(evenArray);

const newEvenArray = oddArray.map(num => num + 1);
console.log(newEvenArray);




/* 
৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। 
প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 
 */
const numberArr = [3, 5, 2, 8, 1];
const multiplyFive = numberArr.map(x => x * 5);
// console.log(multiplyFive);
