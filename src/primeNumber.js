const getPrimos = (max) => {
    let primeNumbers = Array.from({length: max - 1}).map((p, i) => i + 2);
    let root = Math.sqrt(max);
    let annexed = Array.from({length: root - 1}).map((p, i) => i + 2);

    annexed.forEach(d => (primeNumbers = primeNumbers.filter(e => e % d !== 0 || e === d)));

    return primeNumbers;
}

console.log(getPrimos(1000)); 
console.log(getPrimos(5000)); 
console.log(getPrimos(2000).length); 