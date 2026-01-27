// function solution(n) {
//     var answer = 0;

//     for(i=0; i < n; n--){
//         if(n%2==0){
//             answer += n
//         }
//     }
//     return answer;
// }
// solution(10)

let solution = n => {
    var answer = 0;

    for(i=0; i < n; n--){
        if(n%2==0){
            answer += n
        }
    }
    return answer;
}
solution(10)