function foo(x) {
  // Handle null and undefined gracefully
  if (x === null || x === undefined) {
    return 0; // Return 0 for null or undefined inputs
  } else if (typeof x !== 'number') {
    throw new Error('Invalid input type'); //Throw error for non-numbers
  }
  return x + 1; 
}