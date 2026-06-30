// string
let greeting: string = "Hello, TypeScript";

// boolean
let isOpen: boolean = true;

// number
let count: number = 42;

// bigint
let bigCount: bigint = 9007199254740991n;

// null
let nothingHere: null = null;

// undefined
let undefinedValue: undefined = undefined;

// symbol
let uniqueKey: symbol = Symbol("unique");

// any
let anything: any = 42;
anything = true;

// unknown
let uncertain: unknown = "Could be anything";
uncertain = 99;

if (typeof uncertain === "string") {
  uncertain.toLocaleUpperCase();
}

// void
function logMessage(msg: string): void {
  console.log("some string");
}

// never
function throwError(message: string, someParam?: string): never {
  throw new Error(message);
}