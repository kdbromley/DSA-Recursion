const countSheep = function(sheep) {
  if(sheep === 0) {
    return 'All sheep have jumped over the fence';
  };
  return (countSheep((sheep-1)) + ': ' + 'Another sheep jumps over the fence');
}

let sheep = 3;


const powerCalculator =  function(base, exp) {
  if(exp < 0) {
    return 'Exponent should be >= 0';
  };
}

let base = 10;
let exp = 2;


const reverseString = function(string) {
  let res = string.split("");
  res.length
}

let string = 'func';
  
