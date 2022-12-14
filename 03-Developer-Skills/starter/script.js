// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// Coding challenge - calculate temperature amplitude (temp max - temp min)
console.log('----------------- Coding challenge -----------------');
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const n = temperatures.length;

const calcTempAmplitude = function (arr) {
  let minVal, maxVal;
  minVal = maxVal = arr[0];

  for (let i = 1; i < n; i++) {
    if (typeof arr[i] == 'number') {
      if (arr[i] > maxVal) maxVal = arr[i];
      if (arr[i] < minVal) minVal = arr[i];
    }
  }
  return {
    Min: minVal,
    Max: maxVal,
    tempAmplitude: maxVal - minVal,
  };
};

const tempAmplitude = calcTempAmplitude(temperatures);
console.log(
  `Min = ${tempAmplitude.Min}, Max = ${tempAmplitude.Max}, temperature amplitude = ${tempAmplitude.tempAmplitude}`
);

console.log('----------------- Coding challenge -----------------');
const some_arr = [17, 21, 23];

const printForecast = function (arr) {
  const n_arr = some_arr.length;

  let tempResults = '';
  let dayIncr = 1;
  for (let i = 0; i < n_arr; i++) {
    tempResults += `${some_arr[i]}°C in ${dayIncr} days ... `;
    dayIncr++;
  }
  return tempResults;
};

console.log(printForecast(some_arr));
