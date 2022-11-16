'use strict';

const age3 = (birthYear) => 2037 - birthYear;
const age = age3(1991);
console.log(age);

const yearUntilRetirement = (birthYear) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return retirement;
};

console.log(`Years until retirement = ${yearUntilRetirement(1991)}`);

// Calc average
const some_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const average = (arr) => {
  let sum = 0;
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }
  return sum / n;
};

const result_average = average(some_arr);
console.log(`Average of those numbers is ${result_average}`);
console.log(some_arr);

// Objects
// const jonas = {
//     firstName: 'Martin',
//     lastName: 'Kovarik',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Stephen']
// };
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

const jonas = {
  firstName: 'Martin',
  lastName: 'Kovarik',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Stephen'],
  hasDriverLicense: false,
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} old teacher, and he has ${
      this.hasDriverLicense ? 'a' : 'no'
    } driver's license.`;
  },
};

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.getSummary());

// Coding challenge
console.log('\n------------------ Coding challenge ------------------------\n');
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    const bmi = this.mass / this.height ** 2;
    this.bmi = bmi;
    return this.bmi;
  },
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    const bmi = this.mass / this.height ** 2;
    this.bmi = bmi;
    return this.bmi;
  },
};

let result;
if (mark.calcBMI() > john.calcBMI()) {
  result = `Mark's BMI (${mark.bmi}) is higher than John's BMI (${john.bmi}).`;
} else if (mark.calcBMI() < john.calcBMI()) {
  result = `John's BMI (${john.bmi}) is higher than Mark's BMI (${mark.bmi}).`;
} else {
  result = `John and Mark have the same BMI (${john.bmi}).`;
}
console.log(result);

console.log('\n----------------- DICE ----------------\n');

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end ...');
}

// Coding challenge
console.log('\n------------------ Coding challenge ------------------------\n');
// calculate standard deviation
let another_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const dev = function (arr) {
  const avg = average(arr);
  const n = arr.length;
  let tempSum = 0;
  for (let i = 0; i < n; i++) {
    tempSum += (arr[i] - avg) ** 2;
  }
  return Math.sqrt(tempSum / (n - 1));
};

console.log(`Standard deviation is ${dev(another_arr)}`);
console.log('end');
