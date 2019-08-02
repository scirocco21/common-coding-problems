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