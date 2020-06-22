function largestPalindromeProduct(n) {

let max = "";

  for( let i = 1; i <= n; i++) {
    max = max+"9";
  }

max = parseInt(max, 10);

let min = (max+1)/10;
let arr = [];

for(let i = min; i <= max; i++){
  for(let j = i; j <= max; j++) {
        arr.push(i*j);
  }

}

arr = arr.filter(n => (n).toString() === (n).toString().split("").reverse().join(""))

console.log(arr);
  return Math.max(...arr) ;
}

largestPalindromeProduct(2);
