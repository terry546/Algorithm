function solution(num_list) {
    var even_n = 0
    var odd_n = 0

    for (i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 == 0) {
            even_n += 1
        } else {
            odd_n += 1
        }
    }

    // console.log(8 % 2) // 짝수 계산법
    // console.log(num_list.length)

    var answer = [even_n, odd_n];
    console.log(answer)
    return answer;
}

solution([1, 2, 3, 4, 5]);