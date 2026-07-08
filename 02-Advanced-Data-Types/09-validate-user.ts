type User = {
  id: number | string;
  username: string;
  passwordHash: string | string[];
  status: "Locked" | "Unlocked" | "Deleted";
  email?: string;
};

function validateUser(param: unknown): param is User {
  // This is not the best solution. Think about how it can be refactor for readability and maintainability.
  if (
    param &&
    typeof param === "object" &&
    "id" in param &&
    ((typeof param.id === "string" && param.id.length === 14) ||
      (typeof param.id === "number" && param.id > 100)) &&
    "username" in param &&
    typeof param.username === "string" &&
    param.username.length >= 5 &&
    param.username.length <= 10 &&
    "passwordHash" in param &&
    ((typeof param.passwordHash === "string" &&
      param.passwordHash.length === 20) ||
      (Array.isArray(param.passwordHash) &&
        param.passwordHash.length === 4 &&
        param.passwordHash.every(
          (el) => typeof el === "string" && el.length === 8,
        ))) &&
    "status" in param &&
    (param.status === "Locked" || param.status === "Unlocked")
  ) {
    return true;
  }
  return false;
}

console.log(
  validateUser({
    id: 120,
    username: "testing",
    passwordHash: "123456-123456-123456",
    status: "Deleted",
    email: "something",
  }),
);
console.log(
  validateUser({
    id: "1234-abcd-5678",
    username: "testing",
    passwordHash: "123456-123456-123456",
    status: "Unlocked",
  }),
);
console.log(
  validateUser({
    id: "20",
    username: "testing",
    passwordHash: "123456-123456-123456",
    status: "Deleted",
    email: "something",
  }),
);
console.log(
  validateUser({
    id: 255,
    username: "Pesho",
    passwordHash: ["asdf1245", "qrqweggw", "123-4567", "98765432"],
    status: "Locked",
    email: "something",
  }),
);
console.log(
  validateUser({
    id: "qwwe-azfg-ey38",
    username: "Someone",
    passwordHash: ["qwezz8jg", "asdg-444", "12-34-56"],
    status: "Unlocked",
  }),
);
console.log(
  validateUser({
    id: 1344,
    username: "wow123",
    passwordHash: "123456-123456-1234567",
    status: "Locked",
    email: "something@abv.bg",
  }),
);
