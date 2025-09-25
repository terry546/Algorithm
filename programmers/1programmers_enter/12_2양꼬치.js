
// function solution(n, k) {
//     if(n>=10){
//         k -= Math.floor(n/10)
//     }
//     var sum = n*12000+k*2000;
//     var answer = sum;
//     return answer;
// }
// solution(10,3)


var solution = (n,k) => {
    if(n>=10){
        k -= Math.floor(n/10)
    }
    var sum = n*12000+k*2000;
    var answer = sum;
    return answer;
}
solution(10,3)