function solution(my_string, n) {
    console.log(my_string.length, n)
    var answer = '';
    for (i = 0; i < my_string.length; i++) {
        for (j = 0; j < n; j++) {
            answer += my_string[i]
            console.log(answer)
        }
    }
    console.log(answer)

    return answer;
}

solution("one", 3)