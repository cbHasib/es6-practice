/* 
3) Now do the same task of question 2. But do this using array.find()
method. Then compare the output of question 2 & question 3.
*/
const devideElementFind = givenArr.find(num => num % 10 === 0);
console.log(devideElementFind);



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
console.log(findTarget);