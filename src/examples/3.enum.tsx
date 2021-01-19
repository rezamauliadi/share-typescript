enum Role {
  ADMIN,
  MAKER,
  DEVELOPER,
  APPROVER,
}

let user: Role = Role.MAKER; // 1
let user2: string = Role[1]; // "MAKER"

console.log("user:", user);
console.log("user2:", user2);

/***********************************/
/*           WITH VALUE            */
/***********************************/

enum RoleWithValue {
  Admin = "ADMIN",
  Maker = "MAKER",
  Developer = "DEVELOPER",
  Approver = "APPROVER",
}

let roleValue = RoleWithValue.Maker; // "MAKER"

console.log("roleValue:", roleValue);

/***********************************/
/*           USE CASE              */
/***********************************/

enum BigFlipRole {
  ADMIN,
  MAKER,
  DEVELOPER,
  APPROVER,
}

type RoleType = keyof typeof BigFlipRole;

function canCreateTransaction(role: RoleType) {
  const roleRank = BigFlipRole[role];
  return roleRank <= BigFlipRole.MAKER;
}

console.log(canCreateTransaction("ADMIN")); // true --- 0 <= 1
console.log(canCreateTransaction("DEVELOPER")); // false --- 2 <= 1
// console.log(canCreateTransaction("A STRING")); // Error

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

function Enums() {
  return <div>Enum (see console)</div>;
}

export default Enums;
