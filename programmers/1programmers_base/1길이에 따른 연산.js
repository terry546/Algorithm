function solution(num_list) {
    if(num_list.length >= 11){
        for(let i=0; i<num_list.length; i++){
            add += num_list[i]
        }
    }else if(num_list.length <= 10){
        for(let i=0; i<num_list.length; i++){
            multiply *= num_list[i]
        }
    }

    if(add<multiply){
        var answer = multiply
    }else if(add>multiply){
        var answer = add
    }
    
    console.log(answer)
    return answer;
}


let num_list = [1,2,3,4,5,6,7,8,9];
let add=0;
let multiply=1;
solution(num_list)