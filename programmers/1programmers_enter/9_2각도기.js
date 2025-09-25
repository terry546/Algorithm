var acute_angle=89; //예각 90미만
var right_angle=90; // 직각 90도
var obtuse_angle=179; // 둔각 90초과 180도 미만

// function solution(angle) {
//     var answer = 0;
//     if( acute_angle >= angle){
//         answer = 1
//         console.log("예각: "+answer)
//         return answer
//     }else if(right_angle == angle){
//         answer = 2
//         console.log("직각: "+answer)
//         return answer
//     }else if(obtuse_angle >= angle){
//         answer=3
//         console.log("둔각: "+answer)
//         return answer
//     }else {
//         answer=4
//         console.log("평각: "+answer)
//         return answer
//     }
// }
// solution(89)

var solution = angle => {
    var answer = 0;
    if( acute_angle >= angle){
        answer = 1
        console.log("예각: "+answer)
        return answer
    }else if(right_angle == angle){
        answer = 2
        console.log("직각: "+answer)
        return answer
    }else if(obtuse_angle >= angle){
        answer=3
        console.log("둔각: "+answer)
        return answer
    }else {
        answer=4
        console.log("평각: "+answer)
        return answer
    }
}

solution(102)