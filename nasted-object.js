// Console the value of age
const student = {
    name: 'Fredie',
    age: 26
}
console.log(student.age);




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
console.log(data.location[0].city);








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
console.log(user.email);
console.log(user.address);
console.log(user.address.city);
console.log(user.address.geo.lat);
console.log(user.company.name);








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
console.log(nastedObj.education?.examYear); // expected: [2012, 2015, 2018, 2020]
console.log(nastedObj.jsc?.examYear); // expected: undefined
console.log(nastedObj.ssc?.result); // expected: undefined
console.log(nastedObj.education.ssc?.result); // expected: GPA 5
