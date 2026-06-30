// type assertion
let val: unknown = 20;
console.log((<string>val).length);  // undefined
let str = val as string
