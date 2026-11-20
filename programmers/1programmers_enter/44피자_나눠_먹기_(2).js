function solution(n) {
    let pizza = 1;
    while ((pizza * 6) % n !== 0) {
        console.log(pizza * 6)
        pizza++;
    }
    return pizza;
}

console.log(solution(6));  // 1
console.log(solution(10)); // 5
console.log(solution(4));  // 2