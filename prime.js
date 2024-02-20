function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i < Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
var a = isPrime(3)
console.log(a)