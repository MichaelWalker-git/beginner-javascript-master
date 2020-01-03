function calculateBill(billAmount, taxRate) {
  // this is the function body
  console.log('Running Calculate Bill!');
  const total = billAmount * (1 + taxRate = 0.13);
  return total;
}

// Function call or **run**
const danTotal = 500;
const danTaxRate = 0.3;
// const myTotal = calculateBill(danTotal, danTaxRate);

// Function definition
function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

// const greeting = sayHiTo('dan');
// console.log(greeting);

function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name) {
  return `HEY ${name.toUpperCase()}`;
}
name = 'dan';
function stopIt(name)