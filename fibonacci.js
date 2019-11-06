// Iterative solution in linear time 
function fib(n) {
  const result = [0,1];
    for (let i = 2; i <= n; i++) {
      result[i] = result[i-1] + result[i-2]
    }
  return result[n - 1]
}

// naive recursive solution
function fib(n) {
  if (n < 2 ) {
    return n
  }
  return fib(n-1) + fib(n-2)
}

// memoized fibonacci function
function slowFib(n) {
  if (n < 2 ) {
    return n
  }
// make recursive calls to the memoized version of fib, not slowFib
  return fib(n-1) + fib(n-2)
}
// memoizer function returns new function that improves performance of its input function
function memoize(fn) {
  const cache = {};
  return function(num) {
    if (cache[num]) {
      return cache[num];
    }
    cache[num] = fn(num);
    return cache[num]
  }
}

const fib = memoize(slowFib)
