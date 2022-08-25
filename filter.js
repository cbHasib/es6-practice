/* 
2) You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
return/get all the elements which are divisible by 10 using
array.filter() method.
 */
const givenArr = [33, 50, 79, 78, 90, 101, 30 ];
const devideElement = givenArr.filter(num => num % 10 === 0);
console.log(devideElement);



/* 
৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে 
শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো 
 */
const randomNum = [213, 23, 45, 34, 78, 34, 45, 234, 89, 345, 445];
const oddNum = randomNum.filter(num => num % 2 !== 0);
console.log(oddNum);