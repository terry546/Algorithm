function solution(n) {
    var answer = 0;
    for(let i=0; i<=n; i++){
        
        if(n%i ===0){
            console.log(n%i)
            answer +=1
            // console.log(answer)
        }
    }
    return answer;
}

solution(20)