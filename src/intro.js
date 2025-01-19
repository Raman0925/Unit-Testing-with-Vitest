// Lesson: Writing your first tests

export function max(a, b) {
  return (a > b) ? a : b;
}

// Exercise
export function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
  if (n % 3 === 0) return 'Fizz';
  if (n % 5 === 0) return 'Buzz';
  return n.toString();
}
export function calculateAverage(array){
  if(array.length===0) return 0;
  return array.reduce((sum,currentNumber)=>sum+currentNumber,0)/array.length;
}