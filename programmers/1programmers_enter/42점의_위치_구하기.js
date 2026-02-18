function solution(dot) {
    let answer = 0;

    if (dot[0] < 0 && dot[1] > 0) {
        answer = 2
        console.log(answer)
    } else if (dot[0] > 0 && dot[1] > 0) {
        answer = 1
        console.log(answer)
    } else if (dot[0] < 0 && dot[1] < 0) {
        answer = 3
        console.log(answer)
    } else if (dot[0] > 0 && dot[1] < 0) {
        answer = 4
        console.log(answer)
    }
    return answer
}

solution([2, -4])
