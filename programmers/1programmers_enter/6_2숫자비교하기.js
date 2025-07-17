function solution(num1, num2) {
    let num=0
    if(num1 != num2){
        num= -1
    }else if(num1 == num2){
        num=1;
    }
    var answer = num;
    return answer;
}
solution(5, 10)

// let solution2 =(num1,num2)=>{
//     let num=0;
//     if(num1 != num2){
//         num= -1
//     }else if(num1 == num2){
//         num = 1
//     }
//     var answer = num
//     return answer;
// }