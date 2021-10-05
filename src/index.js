// Object initialization
const obj = {
  a: {
    b: {
      c: 12,
      j: false,
    },
    k: null,
  },
};

/**
 * @description: FUnction evalute the valid object path
 * @argument: Function accepts two parameters Object and string
 * @returns: Function return evaluated value of path or undefined
 */ 
const findPath = (obj, path) => {
  const arr = path.split(".");
  let result = obj;
  for (let i of arr) {
    result = result[i];
    if (result === undefined) {
        return undefined;
    }
  }
  return result;
};

// Function calling
console.log(findPath(obj, "a.b.c")); // 12
console.log(findPath(obj, "a.b")); // {c: 12, j: false}
console.log(findPath(obj, "a.b.d")); // undefined
console.log(findPath(obj, "a.c")); // undefined
console.log(findPath(obj, "a.b.c.d")); // undefined
console.log(findPath(obj, "a.b.c.d.e")); // undefined
console.log(findPath(obj, "a.b.j")); //false
console.log(findPath(obj, "a.b.j.k")); //undefined
console.log(findPath(obj, "a.k")); //null
