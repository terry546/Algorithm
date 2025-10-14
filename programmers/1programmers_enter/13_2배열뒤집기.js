// function solution(num_list) {
//     var reverse = []
//     for(i=num_list.length-1; i >= 0; i--){
//         console.log(i)
//         reverse.push(num_list[i])
//         console.log(reverse)
//     }
    
//     var answer = reverse;
//     return answer;
// }
// solution([1,2,3,4,5])


let solution =num_list => {
    var reverse = []
    for(i=num_list.length-1; i >= 0; i--){
        console.log(i)
        reverse.push(num_list[i])
        console.log(reverse)
    }
    
    var answer = reverse;
    return answer;
}
solution([1,2,3,4,5])