/***********************************/
/*             Aliases             */
/***********************************/

/* Aliasing types declaration with "type" keyword */
// type DataType = object | null ;

function processData(data: object | null) {
  return data;
}
processData({});

/* Aliasing explicit object properties */
type PersonType = {
  name: string;
  age: number;
  hasPhone: boolean;
};

let person: PersonType = {
  name: "Budi",
  age: 15,
  hasPhone: true,
};

console.log(person);

/***********************************/
/*            Interface            */
/***********************************/

interface PersonInterface {
  name: string;
  age: number;
  hasPhone: boolean;
}

const person2: PersonInterface = {
  name: "Budi",
  age: 15,
  hasPhone: true,
};

console.log(person2);

export {};
