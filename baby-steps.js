var arr = process.argv.slice(2).map(x => Number(x));
const reducer = (previousValue, currentValue) => previousValue + currentValue;
console.log(arr.reduce(reducer))
