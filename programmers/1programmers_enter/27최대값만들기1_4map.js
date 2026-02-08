let number = [0, 31, 24, 10, 1, 9]

function solution(numbers) {
    let max=0;
    numbers.map((item, i) => {
        numbers.map((subItem, j) => {
            if (i < j) {
                if (item * subItem > max) {
                    max = item * subItem;
                }
            }
        });
    });
    var answer = max;
    console.log("answer: ", answer)
    return answer;
}

solution(number)