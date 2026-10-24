const numbers = [10, 20, 30, 40];

const result = numbers.reduce((total, num) => {
    return total + num;
}, 0);

console.log(result); // 100