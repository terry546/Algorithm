function solution(n) {
    var answer = 0;
    // n은 숫자이므로 배열로 변환해야 map을 쓸 수 있습니다. (1부터 n까지의 배열 생성)
    let arr = Array(n).fill().map((_, i) => i + 1);

    arr.map(nc =>{
        console.log(nc)
        if(n % nc === 0){
            answer += 1
            
        }
    })
    return answer;
}

solution(20)