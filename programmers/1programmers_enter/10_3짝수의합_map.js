function solution(n){
    let sum = 0;
    Array(n).fill().map((_, i) => i + 1).map(num => {
        if (num % 2 === 0) {
            sum += num;
        }
    });
      return sum;
}

console.log(solution(10));
