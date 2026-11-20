function solution(money) {
    // let ame = 5500;
    var maxcf = Math.floor(money / 5500);
    var leftmoney = money - 5500 * maxcf;
    // console.log(maxcf)
    // console.log(leftmoney)
    var answer = [maxcf, leftmoney]
    console.log(maxcf, leftmoney)
    return answer;
}

solution(20000)

