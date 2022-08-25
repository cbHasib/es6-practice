// Practice Problem 1
/* 
1) Write an arrow function that will take 3 parameters, will multiply
the parameters and will return the result.

2) Write the following sentence in three lines and print the result:
I am a web developer. I love to code. I love to eat biryani.

3) Write an arrow function that will take 2 parameters: One parameter
will come from you and the other parameter will be a default
parameter. Add these two parameters and return the result.
 */

// 1
const threeMultiply = (number1 = 0, number2 = 1, number3 = 1) =>
  number1 * number2 * number3;
// console.log(threeMultiply(2, 4, 5));

// 2
const sentencePrint = `I am a web developer.
I love to code.
I love to eat biryani.`;
// console.log(sentencePrint);

// 3
const addTwo = (number, num = 5) => number + num;
// console.log(addTwo(8));







// Practice Problem 2
/* 
Write an arrow function where it will do the following:
a) It will take an array where the array elements will be the
name of your friends
b) Check if the length of each element is even, push elements
with even length to a new array and return the result
 */

// Solve
const friends = ["Marzia", "Anik", "Mahi", "Mahim", "Sujon", "Sojib"];
const evenLengthFriends = (arr) => {
  const arrEven = [];
  for (const friend of arr) {
    if (friend.length % 2 === 0) {
      arrEven.push(friend);
    }
  }
  return arrEven;
};
// console.log(evenLengthFriends(friends));







// Practice Problem 3
/* 
Write an arrow function where it will do the following:
a) Square each array element
b) Calculate the sum of the squared elements
c) Return the average of the sum of the squared elements
 */
const numberArray = [2, 3, 4, 5];
const squareSum = arr => {
    let sum = 0;
    for(const element of arr){
        const square = element * element;
        sum += square
    }
    return sum;
}
// console.log(squareSum(numberArray));









// Practice Problem 4
/* 
Write an arrow function where it will do the following:
a) It will take two array inputs
b) Combine the two arrays and assign them in a new array
c) Find the maximum number from the new array and return the
result
 */
const arr1 = [24, 4, 12, 245,  43, 23, 34, 234, 456, 24, 23];
const arr2 = [324, 334, 36, 24, 57, 457, 465];
const numArr = [...arr1, ...arr2];
const findMax = array => Math.max(...array);
// console.log(findMax(numArr));























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
// console.log(evenArray);

const newEvenArray = oddArray.map(num => num + 1);
// console.log(newEvenArray);





/* 
2) You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
return/get all the elements which are divisible by 10 using
array.filter() method.
 */
const givenArr = [33, 50, 79, 78, 90, 101, 30 ];
const devideElement = givenArr.filter(num => num % 10 === 0);
// console.log(devideElement);




/* 
3) Now do the same task of question 2. But do this using array.find()
method. Then compare the output of question 2 & question 3.
*/
const devideElementFind = givenArr.find(num => num % 10 === 0);
// console.log(devideElementFind);










/* 
1) You have an array [ 1, 9, 17, 22 ]. Add the all elements
of this array and give output. Do this using for loop &
array.reduce() method.
 */
const reduceArray = [ 1, 9, 17, 22 ];
let arrSum = 0;
for(const num of reduceArray){
    arrSum += num;
}
// console.log(arrSum);

const sumOfArray = reduceArray.reduce((previous, current) => previous+current, 0);
// console.log(sumOfArray);







/* 
Challenging Follow above array of objects. So, you have 3 objects as
array element. Can you find out the total sum from here?

20 + 15 + 22 = 57 . The output will be 57

What are you thinking? Yeah! Do it with for loop. I know you can do it.
But! Wait !! Wait !!! Do the same task using array.reduce() method.
 */
const people = [
    {name: 'Meena', age: 20},
    {name: 'Rina', age: 15},
    {name: 'Suchorita', age: 22}
];
let ageSum = 0;
for(const person of people){
    ageSum += person.age;
}
// console.log(ageSum);

const ageSumByReduce = people.reduce((previous, current) => previous + current.age, 0);
// console.log(ageSumByReduce);






// Console the value of age
const student = {
    name: 'Fredie',
    age: 26
}
// console.log(student.age);




// Console the value of city
let data = {
    location: [
        {
            latitude: '34.5, 37.8',
            longitude: '98.77, 58.7',
            city: 'Hydrabad',
            country: 'India',
        }
    ]
};
// console.log(data.location[0].city);








/*
● Console the value of email
● Console the value of address
● Console the value of city
● Console the value of lat
● Console the value of company name
*/
const user = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }
// console.log(user.email);
// console.log(user.address);
// console.log(user.address.city);
// console.log(user.address.geo.lat);
// console.log(user.company.name);










































































/* 
১. কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে জানতেই হবে। 
তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো।
*/
const goal = 'Web Developer';
let salary = 500;

/* 
২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। 
একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার 
টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। 
 */
const newObj = {
    name: 'Hasibul Hasan',
    age: 25
}
const myString = `My name is ${newObj.name}.
I'm ${newObj.age} years old. ${goal} is my life goal.`;
// console.log(myString);







/* 
৩.১ একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। 
এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে। 
 */
const devisionFive = number => number / 5;
// console.log(devisionFive(45));




/* 
৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। 
প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো 
 */
const sumMultiply = (num1, num2) => (num1 + 2) * (num2 + 2);
// console.log(sumMultiply(2, 5));




/* 
৩.৩ এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। 
যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে। 
*/
const multiplyThree = (num1, num2, num3) => num1 * num2 * num3;
// console.log(multiplyThree(2, 6, 4));




/* 
৩.৪ এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের।
সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। 
*/
const multiplyTwo = (num1, num2) => {
    num1 += 2;
    num2 += 2;
    const multiply = num1 * num2;
    return multiply;
}
// console.log(multiplyTwo(2, 7));







/* 
৪. [হোম ওয়ার্ক] একটু গুগলে সার্চ দাও: javascript function declaration vs arrow function তারপর 
কয়েকটা আর্টিকেল পড়ে বুঝার চেষ্টা করো। 
 */
// OK 





// ৪.৫. জাভাস্ক্রিপ্ট এর var, let, const এর মধ্যে প্রার্থক্য কি? 
// Done




/* 
৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। 
প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 
 */
const numberArr = [3, 5, 2, 8, 1];
const multiplyFive = numberArr.map(x => x * 5);
// console.log(multiplyFive);





/* 
৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে 
শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো 
 */
const randomNum = [213, 23, 45, 34, 78, 34, 45, 234, 89, 345, 445];
const oddNum = randomNum.filter(num => num % 2 !== 0);
// console.log(oddNum);




/* 
৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে 
৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। 
 */
const product = [
    {name: 'Cycle', price: 7000},
    {name: 'Mobile', price: 20000},
    {name: 'Laptop', price: 50000},
    {name: 'Watch', price: 3000},
    {name: 'Speaker', price: 4000},
];
const findTarget = product.find(x => x.price === 50000);
// console.log(findTarget);






/* 
৭.৫ [এক্সট্রা] জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো। 
 */
// map er maddhome sob array er sob data kicu kore change kora jay. return hisebe sei change kora data gulo array hisebe pawa jay
// forEach o map er moto same kaj kore kintu kono return kore na
// filter er maddhome ekta array theke condition wise sob data k new array te dekha jay. return hisebe new array k return kore
// find o filter er moto same kaj korleo. find sudhu matro first pawa result k return kore





/* 
৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। 
 */

const simpleObj = {
    name: 'Hasib',
    institute: 'University of Rajshahi',
    district: 'Pabna',
    phone: '01780568256'
}
const {name, institute, district, phone} = simpleObj;
const contact = `I'm ${name},
Currently, studying in ${institute}. I'm from ${district}.
My contact Number is: ${phone}
`;
// console.log(contact);







/* 
৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন 
এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে। 
*/
const numArray = ['Asif', 'Marzia', 'Hasib', 'Aurony'];
const [, , third] = numArray;
// console.log(third);






/* 
১০. তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা 
প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড 
প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭। 
 */
const sumThree = (num1, num2, num3 = 7) => num1 + num2 + num3;
// console.log(sumThree(3, 5));








/* 
১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। 
    আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। 
    এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট )
*/
const nastedObj = {
    name: 'Hasibul Hasan',
    address: {
        line: 'Pabna Sadar',
        postal: 6600,
    },
    education: {
        ssc: {
            school: 'Monipur High School',
            result: 'GPA 5',
            passingYear: 2018
        },
        hsc: {
            college: 'St Joseph Higher Secondary School',
            result: 'GPA 5',
            passingYear: 2020
        },
        bsc: {
            institute: 'University of Rajshahi',
            department: 'Population Science and Human Resource Development',
            session: '2020-21'
        },
        examYear: [2012, 2015, 2018, 2020]
    }
}


/* 
১২. উপরের অবজেক্ট এ ডট এর আগে যে প্রশ্নবোধক চিহ্ন দিয়ে যে অপশনাল চেইনিং করা যায়। সেটা একটু প্রাকটিস করো। 
 */
// console.log(nastedObj.education?.examYear); // expected: [2012, 2015, 2018, 2020]
// console.log(nastedObj.jsc?.examYear); // expected: undefined
// console.log(nastedObj.ssc?.result); // expected: undefined
// console.log(nastedObj.education.ssc?.result); // expected: GPA 5
