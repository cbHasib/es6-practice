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