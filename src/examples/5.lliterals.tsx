/***********************************/
/*          Standar Literal        */
/***********************************/
let person: {
  name: string;
  gender: "male" | "female";
};

person = {
  name: "Budi",
  gender: "male",
};

// person = {
//   name: "mawar",
//   gender: "perempuan",
// };

console.log(person);

/***********************************/
/*            With Alias           */
/***********************************/
type ButtonColor = "red" | "blue" | "green" | "yellow";

function createButton(color: ButtonColor) {
  return `a button with ${color} color`;
}
console.log(createButton("blue"));
// console.log(createButton("orange"));

/***********************************/
/*          Number Literal         */
/***********************************/
type TransactionType = {
  id: string;
  amount: number;
  beneficiary: string;
  bank: string;
  status: 0 | 1 | 2;
};

const transaction: TransactionType = {
  id: "T1",
  amount: 1000,
  beneficiary: "Budi",
  bank: "bca",
  status: 2,
};

console.log(transaction);
// console.log(createButton("orange"));

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

function Literals() {
  return <div>Literal (see console)</div>;
}

export default Literals;
