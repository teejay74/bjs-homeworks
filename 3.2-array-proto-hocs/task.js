"use strict";
function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  // Замедление на половину секунды.
  sleep(100); // Можно использовать другое значение замедления.
  return args.reduce((sum, arg) => {
    return (sum += +arg);
  }, 0);
}

const compareArrays = (arr1, arr2) => {return (arr1.length === arr2.length && arr1.every((item, i) => item === arr2[i]))};

// function compareArrays( arr1, arr2 ) {
// 	let result = true;
// 		if(arr1.length === arr2.length) {
// 				function cheackElement(item, i) {
// 				return item === arr2[i];
// 			}
// 			result = arr1.every(cheackElement);
// 		}
// 		else {
// 			result = false;
// 		}	
// 	return result;
// }

function memorize(fn, limit) {
  let memory = [];
  return function (...args) {
      let arrayElementFound = memory.find(function viewMemory(item) {
        return compareArrays(item.args, args);
      });
      if (arrayElementFound != undefined) {
        console.log("Результат из памяти");
        return arrayElementFound.result;
      }
      let resultFn = fn(...args);
      if (memory.length == limit) {
        memory.splice(0, 1);
      }
      memory.push({ args: args, result: resultFn });
      return resultFn;
    }
  };

function testCase(testFunction, timer) {
  let testArgs = [
    [1, 2, 3],
    [1, 2],
    [1, 2, 3],
    [1, 2],
    [9, 5, 2, 4]
  ];
  console.time(timer);
  for (let i = 0; i <= 100; i++) {
    testArgs.forEach(function (item) {
      return testFunction(...item);
    });
  }

  console.timeEnd(timer);
}

const mSum = memorize(sum, 5);
console.log(mSum(3, 4));
console.log(mSum(1, 6, 5));
console.log(mSum(3, 4));
console.log(mSum(1, 6, 5));
console.log(mSum(1, 6, 5));
// mSum(3, 4);
testCase(mSum, "Таймер новой функции:");
testCase(sum, "Таймер старой функции:");

console.log(compareArrays([8, 9], [6])); // false, разные значения
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false, разные значения
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])); // false, разные значения
console.log(compareArrays([1, 2, 3], [2, 3, 1])); // false, разные индексы, хотя и одинаковые значения
console.log(compareArrays([8, 1, 2], [8, 1, 2])); // true
