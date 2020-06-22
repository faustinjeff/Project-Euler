function multiplesOf3and5(number) {
 let n = Array(number-1).fill(1).map((x, y) => x + y);


  return n.filter(e => e%3==0 || e%5==0).reduce((acc, value) => acc+value, 0);
}

multiplesOf3and5(1000);
