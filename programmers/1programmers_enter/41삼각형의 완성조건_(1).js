function solution(sides) {
    var answer = 0;
    // sides 배열을 내림차순으로 정렬
    sides.sort((a, b) => b - a);
    
    // 가장 긴 변의 길이
    const longestSide = sides[0];
    console.log(longestSide)
    // 나머지 두 변의 길이의 합
    const otherSidesSum = sides[1] + sides[2];
    console.log(otherSidesSum)
    
    // 삼각형 성립 조건 확인
    if (longestSide < otherSidesSum) {
        answer = 1; // 삼각형 성립 가능
    } else {
        answer = 2; // 삼각형 성립 불가능
    }
    return answer;
}

let triangle = [199, 72, 222]
solution(triangle)