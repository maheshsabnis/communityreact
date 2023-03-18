let obj = {
  k1: 'A',
  k2: 'B',
  f1: function(){
      console.log('====================================')
      console.log('Function')
      console.log('====================================')
  }  
};

let keys = Object.keys(obj);

console.log('====================================');
console.log(keys);
console.log('====================================');


console.log(`${keys[0]} and ${obj[keys[0]]}`);

let values = Object.values(obj);

console.log('====================================');
console.log(values);
console.log('====================================');