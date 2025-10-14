// function solution(my_string) {
//     var reverse =[];
//     for(i=my_string.length -1; i >=0; i--){
//         reverse.push(my_string[i])
//     }
//     var answer = reverse.join("");
//     return answer;
// }
// solution("abc")

var solution =my_string => {
    var reverse =[];
    for(i=my_string.length -1; i >=0; i--){
        reverse.push(my_string[i])
    }
    var answer = reverse.join("");
    return answer;
}
solution("abc")