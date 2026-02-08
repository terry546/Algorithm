function solution(n, t) {
    let answer = n;

    // t만큼 반복하기 위해 길이가 t인 배열을 생성하고 map을 사용
    new Array(t).fill(0).map(() => {
        // answer *= 2;
        answer = n* 2;
        console.log(answer);
    });

    console.log(answer)
    return answer;
}
solution(7,15)