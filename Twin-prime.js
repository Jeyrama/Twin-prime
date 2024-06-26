/*
A twin prime is a prime number that differs from another prime number by 2. 
Write a function named is_twin_prime which takes an int parameter 
and returns true if it is a twin prime, else false.

Examples:
  given 5, which is prime
  5 + 2 = 7, which is prime 
  5 - 2 = 3, which is prime
  hence, 5 has two prime twins and it is a Twin Prime.

  given 7, which is prime
  7 - 2 = 5, which is prime
  7 + 2 = 9. which is not prime
  hence, 7 has one prime twin, and it is a Twin Prime.

  given 9, which is not prime 
  hence, 9 is not a Twin Prime

  given 953, which is prime
  953 - 2 = 951, which is not prime
  953 + 2 = 955, which is not prime 
  hence, 953 is not a Twin Prime
*/


// Solution

function isTwinPrime(n) {
  if (n%2 == 0) return false;
  if (n==3 || n==5) return true;
  if (((n-1)/6)%1!=0 && ((n+1)/6)%1!=0) return false;
  if (2*(n+1)%12!=0 && 2*(n-1)%12!=0) return false;
  return isPrime(n) && (isPrime(n+2) || isPrime(n-2));
}

function isPrime(n) {
  if (n<2 || n%2==0 || n%3==0) return n==2 || n==3;
  for (let p=5; p*p<=n; p+=6) if (n%p==0 || n%(p+2)==0) return false;
  return true;
}

// or