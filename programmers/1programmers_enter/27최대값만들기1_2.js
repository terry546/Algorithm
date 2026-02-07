let number = [0, 31, 24, 10, 1, 9]

function solution(numbers) {
    let max=0;
    for(i=0; i<=numbers.length; i++){
        for(j=i+1; j<=numbers.length; j++){
            console.log("j: "+j)
            if(numbers[i] * numbers[j] > max){
                max = numbers[i] * numbers[j];
            }
            console.log(max);
        }
    }
    var answer = max;
    console.log("answer: ", answer)
    return answer;
}

solution(number)