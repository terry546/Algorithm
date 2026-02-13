function solution(numbers, num1, num2) {
    var answer = [];
    // map의 첫 번째 인자는 요소(num), 두 번째 인자는 인덱스(i)입니다.
    numbers.map((num, i) => {
        if (i >= num1 && i <= num2) {
            answer.push(num);
            console.log(answer)
        }
    });
    return answer;
}


let numbers = [1, 2, 3, 4, 5]
let num1 = 1;
let num2 = 2;
solution(numbers, num1, num2)