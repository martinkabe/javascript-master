'use strict';

let some_arr = [1, 2, 3, 4, 5];
function accumulate(val1, val2) {
    return val1 + val2;
}

let accumulator = 0;
for (let i = 0; i < some_arr.length; i++) {
    accumulator = accumulate(accumulator, some_arr[i]);
}

let accumulator_result = `Accumulator is ${accumulator}`;
console.log(accumulator_result);

function add(val1, val2) {
    return val1 + val2;
}

let result_add = some_arr.map(add);
console.log(`Add is ${result_add}`);

// Swith statement
const day = 'Thursday';

switch (day) {
    case 'Monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'Tuesday':
        console.log('Prepare theory videos');
        break;
    case 'Wednesday':
    case 'Thursday':
        console.log('Write code examples');
        break;
    case 'Friday':
        console.log('Record videos');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('Enjoy the weekend :-D');
        break;
    default:
        console.log('Not a valid day!');
}


