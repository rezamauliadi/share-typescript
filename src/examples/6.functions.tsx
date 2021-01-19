/***********************************/
/*        Type of a function       */
/***********************************/

/* For named function ==> function method(param: type): type {} */
/* For anonymous function ==> const method: (param: type) => type = function (param) {} */

function add(num1: number, num2: number): number {
  return num1 + num2;
}

function printNumber(num: number): void {
  console.log(num);
}

let addNumbers;
// let addNumbers: (n1: number, n2: number) => number;

addNumbers = add;
// console.log(addNumbers(5, 5));

addNumbers = printNumber;
// console.log(addNumbers(5, 5));

/***********************************/
/*        Function as Callback     */
/***********************************/

function checkRoleAndExecute(role: string, callback: (r: string) => void) {
  if (role === "admin") {
    callback(role);
  } else {
    console.log("forbidden role");
  }
}

checkRoleAndExecute("admin", (role) => {
  console.log(role);
});

// checkRoleAndExecute('admin', (role, age) => {
//   console.log(role);
// })

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

function Functions() {
  return <div>Functions (see console)</div>;
}

export default Functions;
