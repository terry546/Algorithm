function solution(numbers) {
    let result = 0;
    var answer = 0;
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i])

        for (let j = 0; j < numbers.length; j++) {
            if (numbers[i] == numbers[j]) {
                // 하나의 배열에 두개의 수를 곱해야 하는대 배열에 값이 중복되면 안된다
                console.log("numbaers[i]: " + numbers[i] + "값과 numbers[j]: " + numbers[j] + "값이 같아서 식을 실행 하지 않는다")
            } else {
                result = numbers[i] * numbers[j]
                // answer보다 result값이 크면 answer에 result값을 넣어준다
                if (answer < result) {
                    answer = result;
                }
            }
        }
    }
    return answer;
}

solution([0, 31, 24, 10, 1, 9])