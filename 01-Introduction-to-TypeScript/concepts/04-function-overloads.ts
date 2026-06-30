function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: string | number, b: string | number): string | number {
  if (typeof a === "string" && typeof b === "string") {
    // narrowed
    return a + b;
  } else if (typeof a === "number" && typeof b === "number") {
    //narrowed
    return a * b;
  }
  throw new Error("Parameters must be both strings or both numbers");
}