// function solution(arr) {
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] > 50 && arr[i]%2==0){
//             arr[i] /= 2
//             console.log(arr[i])
//         }else if(arr[i] < 50 && arr[i]%2==1){
//             arr[i] *= 2
//             console.log(arr[i])
//         }else{
//             console.log(arr[i])
//         }
//     }
    
//     var answer = [];
//     return answer;
// }

// solution([1, 2, 3, 100, 99, 98])


function solution(arr) {
    let answer = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i] >= 50 && arr[i] % 2==0){
            answer.push(arr[i]/2)
        }else if(arr[i] < 50 && arr[i]%2==1){
            answer.push(arr[i] *2)
        }else{
            answer.push(arr[i])
        }
    }   
    return answer;
}

solution([1, 2, 3, 100, 99, 98])









// function solution(arr) {
//     var answer = [];
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] > 50 && arr[i]%2==0){
//             answer.push(arr[i] / 2);
//         }else if(arr[i] < 50 && arr[i]%2==1){
//             answer.push(arr[i] * 2);
//         }else{
//             answer.push(arr[i]);
//         }
//     }
//     return answer;
// }

// console.log(solution([1, 2, 3, 100, 99, 98]));