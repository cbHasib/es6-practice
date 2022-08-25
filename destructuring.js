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
console.log(contact);




/* 
৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন 
এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে। 
*/
const numArray = ['Asif', 'Marzia', 'Hasib', 'Aurony'];
const [, , third] = numArray;
console.log(third);

