"use strict"


/* 
TODO darba aprasančcio objekto savybes:
- description
-created_on
- deadline
-status: todo, in-progress, done
*/


let todo_list = [
    {
        description: 'Pasiruošti rytojui',
        created_on: '2020-05-05 19:03',
        deadline: '2020-05-06 12:55',
        status : 'todo',
    },
    {
        description: 'Pasiruošti mašina dažymui',
        created_on: '2020-05-05 19:05',
        deadline: '2020-05-06 09:00',
        status : 'todo',
    },
    {
        description: 'Klausyti paskaitos',
        created_on: '2020-05-05 19:04',
        deadline: '2020-05-06 13:00',
        status : 'todo',
    },
];


// console.log(todo_list);


for (let i = 0; i <todo_list.length; i++) {
    const todo = todo_list[i];
    const sentence = `Darbas kuri reikia paaryti yra "${todo.description}" ir ji atlikti reikia iki ${todo.deadline} siuo metu yra  busenoje "${todo.status}".`;
    console.log( sentence );


    // console.log(todo_list[i]);
    // console.log(todo_list[i].description);
}



// const people = [
//     {
//         name: 'Milaknis',
//         age: 32,
//         zaidzia: true
//     },
//     {
//         name: 'Grigonis',
//         age: 28,
//         zaidzia: false

//     },
//     {
//         name: 'Jankunas',
//         age: 36,
//         zaidzia: true

//     },
//     {
//         name: 'Landale',
//         age: 24,
//         zaidzia: true

//     }
// ];

// for ( let i= 0; i<people.length; i++) {
//     const person = people[i];
//     console.log(person);

//     if( person.zaidzia){
//         console.log(`Krepsininkas ${person.name} yra ${person.age} metu amžiaus.`);
        
//     }else {
//         console.log(`Krepsininkas ${person.name} nezaidzia`);

//     }
// }
