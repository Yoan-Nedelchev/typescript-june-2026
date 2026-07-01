function customTypeGuard(parameter: unknown): parameter is string[] {
  return (
    Array.isArray(parameter) &&
    parameter.length > 0 &&
    parameter.every((el) => typeof el === "string")
  );
}

// let data = ["test", "one"];
// let somethingElse = ["test", 123];

// if (customTypeGuard(somethingElse)) {
//   somethingElse;
// }

// data;

console.log(customTypeGuard({}));
console.log(customTypeGuard({ test: "one" }));
console.log(customTypeGuard([]));
console.log(customTypeGuard(undefined));
console.log(customTypeGuard(null));
console.log(customTypeGuard([12, 13]));
console.log(customTypeGuard(["test", 123]));
console.log(customTypeGuard(["a", "b", "c"]));
