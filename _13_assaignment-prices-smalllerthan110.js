const prices = [100, 250, 50, 89];
prices.forEach((item,i,arr) => arr[i] = item * 1.1);
console.log(prices);

console.log(prices.filter((item) => item < 110).map((item) => item * 1.1));
