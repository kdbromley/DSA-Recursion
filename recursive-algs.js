function countSheep(sheep) {
  //Base Case
  if(sheep === 0) {
    console.log('All sheep have jumped over the fence');
  };
  //Recursive Case
  console.log(sheep + ': Another sheep jumps over the fence');
  return countSheep(sheep - 1)
}

countSheep(3)


function powerCalculator(b, e) {
  //Error case
  if(e<0) return 'e must be >=0';
  if(e === 0) return 1;
  //Base case
  if(e === 1) return b;
  //Recursive case
  return b * powerCalculator(b, (e - 1))
}

console.log(powerCalculator(10,2))


function reverse(string) {
  //Base case
  if(string.length < 2) return string;
  //Recursive case
  return reverse(string.slice(1, string.length)) + string[0]
}

console.log(reverse('dog'));


function triangularNum(n) {
  //Error case
  if(n<1) return 0;
  //Base case
  if(n === 1) return n;
  //Recursive case
  return n + triangularNum(n - 1)
}

console.log(triangularNum(5))


  
