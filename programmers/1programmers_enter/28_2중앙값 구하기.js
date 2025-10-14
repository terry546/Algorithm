// function solution(array) {    
//     var mid_num = Math.ceil(array.length/2)-1
//     console.log(mid_num)
    
//     var asc_array = array.sort((a, b) => a - b)
//     console.log(asc_array)
//     var answer = asc_array[mid_num]
//     console.log(answer)
//     return answer
// }

// solution([9, -5, 7])

let solution=array=> {    
    var mid_num = Math.ceil(array.length/2)-1
    
    var asc_array = array.sort((a, b) => a - b)
    var answer = asc_array[mid_num]
    return answer
}

solution([9, -5, 7])