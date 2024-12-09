function foo(x) {
  if (x === null) {
    return 0; // Handle null case
  } else if (typeof x !== 'number') {
    throw new Error('Invalid input type'); //Explicit error handling for non-numbers
  }
  return x + 1; 
}