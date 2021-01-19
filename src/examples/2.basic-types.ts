/******************************************/
/*               3 Primitives             */
/******************************************/

let isDone: boolean = false;

let decimal: number = 6;
let float: number = 2.4;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
// let big: bigint = 100n; // new in ES2020

let hello: string = "Hello";
let world: string = "World!";
let text: string = `${hello} ${world}!`;

/* TS can do inference from the variable value. */
let aVariable = "typescript";
let aVariable2 = 15;

/* The difference between "const" and "let" */
const aConst = "typescript";
let aLet = "typescript";

/******************************************/
/*           Array and Tuple              */
/******************************************/

let list: number[] = [1, 2, 3];
let nums: Array<number> = [1, 2, 3];

let person: [string, number];
person = ["Budi", 10]; // OK
// person = [10, "Budi"]; // Error

// const listProp = list[5];
// const personProp = person[5];

// console.log(listProp, personProp);

/******************************************/
/*               Object                   */
/******************************************/

let obj: object = {
  name: "Budi",
  age: 15,
  hasPhone: true,
};

// console.log(obj.name);

/* TS doesn't recognize the properties defined in the object variable. */
/* TS can give autocomplete capability with explicit type definition. */

let obj2: {
  name: string;
  age: number;
  hasPhone: boolean;
} = {
  name: "Budi",
  age: 15,
  hasPhone: true,
};

console.log(obj2.name);

/******************************************/
/*          Any, Void, Unknown            */
/******************************************/

let response: any = getResponse();
let newObj: any = { name: "Budi" };

function warn(): void {
  console.log("This is a warning message");
}

let notSure: unknown = 10;
notSure = "maybe a string instead"; // OK
notSure = false; // OK

/******************************************/
/*                Union                   */
/******************************************/

function formatNumber(input: number | string) {
  return input;
}

/******************************************/
/*         Null, Undefined, Never         */
/******************************************/

let data: object | null = getDataFromAPI();

// in TSX
function Alert(props: any) {
  const color: string | undefined = props.color;
  console.log(color);

  return "...the Alert component";
}

function showError(message: string): never {
  throw new Error(message);
}

/*
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

// just helpers
function getResponse() {
  return "any";
}
function getDataFromAPI() {
  return null;
}
console.log(isDone, decimal, float, hex, octal, binary, text, aConst, aLet);
console.log(aVariable, aVariable2, list, nums, person, obj, obj2);
console.log(response, newObj, notSure, warn);
console.log(formatNumber, data, Alert, showError);

export {};
