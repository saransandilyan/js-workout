function findMaxNumber(numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}
console.log(findMaxNumber([8, 12, 8, 22, 177, 4])); 

