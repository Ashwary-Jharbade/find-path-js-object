# Evaluate path in js object

- Write method findPath
- Should take two params:
    - object
    - keys separated by dots as string
- Return value if it exists at that path inside the object, else return undefined


Algorithm:
- Check if passed object and path are valid.   
  - If object is invalid: return undefined
  - If path is invalid: return undefined
- Split the path by the . seperator and store the result into a variable arr.
- Intialize another varialbe result with passed object.
- Iterate on the values of arr
  - Loop body
    - Store the ith value of result object into the result itself
    - Checking if result is undefined
      - If yes, return: undefined
      - If not, continue
  - Loop end
- return result once loop gets terminated
