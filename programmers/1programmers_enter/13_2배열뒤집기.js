function solution(num_list) {
    var reverse = []
    for(i=0; i < num_list.length; num_list--){
        reverse = num_list[i]
        console.log(reverse)
    }
    
    var answer = reverse;
    return answer;
}

solution([1,2,3,4,5])