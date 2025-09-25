// function solution(numbers){
//     var sum=0
    
//     for(i=0; i<numbers.length; i++){
//         sum += numbers[i]
//     }
    
//     console.log(sum/numbers.length)
//     var answer = sum/numbers.length
//     return answer;
// }
// solution([1,2,3,4,5,6,7,8,9,10])

var solution = numbers =>{
    var sum=0
    
    for(i=0; i<numbers.length; i++){
        sum += numbers[i]
    }
    
    console.log(sum/numbers.length)
    var answer = sum/numbers.length
    return answer;
}
solution([1,2,3,4,5,6,7,8,9,10])