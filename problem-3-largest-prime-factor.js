function largestPrimeFactor(number) {
  let prime = 2;
  let largest = prime;

  while(prime <= number) {

      if(number%prime == 0) {
        number = number/prime;

      } else {
        prime++;
      }
  }

  return prime;
}

largestPrimeFactor(13195);
