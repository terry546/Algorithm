// function solution(array, height) {
//     var answer = 0;
//     array.map(function(arraycb){
//         if(arraycb > height){
//             answer +=1
//             console.log(answer)
//         }
//     })
//     return answer;
// }

// let cp = [149, 180, 192, 170]
// let height = 167;
// solution(cp, height)

function solution(array, height) {
    var answer = 0;
    array.map(arraycb=>{
        if(arraycb> height){
            answer +=1;
            console.log(answer)
        }
    })
    return answer;
}

let cp = [149, 180, 192, 170]
let height = 167;
solution(cp, height)