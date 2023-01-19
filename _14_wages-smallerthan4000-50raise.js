const wages = [3000, 4000, 5000, 6000, 6500];

console.log(wages);

let wagesIncrease = wages.filter(wage => wage < 4000).map(wage => wage * 1.5);

console.log(wagesIncrease);

