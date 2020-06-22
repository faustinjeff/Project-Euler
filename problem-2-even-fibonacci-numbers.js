function fiboEvenSum(n) {
  let a = 1, b = 0, temp; 
  let arr = [];
  let num = n;

  while(num >= 0) {
    temp = a;
    a = a+b;
    b = temp;
    arr.push(a);
    num--;
  }
  //console.log(num)
  return arr.filter(e => e%2==0 && e < n).reduce(function(acc, value){
    return acc+value
  }, 0);
}

fiboEvenSum(10);
