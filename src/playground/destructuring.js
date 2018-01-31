

// const person = {
//     name: 'Tom',
//     age: 27,
//     location: {
//         city: 'Bristol',
//         temp: 92
//     }
// };

// const { name = 'Anonymous', age } = person;

// console.log(`${name} is ${age}`);

// const { temp: temperature, city } = person.location;
 
// console.log(`It's ${temperature} in ${city}`);

// const book = {
//     title: 'Sapiens',
//     author: 'Some guy',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);


// const address = ['1299 S Juniper Street', 'Philidelphia', 'Pensylvania', '19244'];

// const [, , state = 'New York'] = address;

// console.log(`you are in ${city} ${state}`);

const item = ['Coffee (hot)', '£2', '£2.50', '££2.75' ];

const [drink, , medium] = item;

console.log(`A medium ${drink} costs ${medium}`);