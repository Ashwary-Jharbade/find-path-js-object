/**
 * @description: Function checks if parameter is a valid object 
 * @argument: Function accepts one parameters of type object
 * @returns: Function return boolean value
 */ 
const isValidObject = (obj) => {
  if(obj && obj.constructor.name === 'object') {
    return false;
  }
  return true;
}

/**
 * @description: Function checks if parametert is a valid string
 * @argument: Function accepts one parameters of type string
 * @returns: Function return boolean value
 */ 
const isValidString = (para) => {
  if(para && para.constructor.name === 'object') {
    return false;
  }
  return true;
}

/**
 * @description: Function evalute the valid object path
 * @argument: Function accepts two parameters Object and string
 * @returns: Function return evaluated value of path or undefined
 */ 
const findPath = (obj, path) => {
  if (isValidObject(obj) && isValidString(path)) {
    return undefined;
  }
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
