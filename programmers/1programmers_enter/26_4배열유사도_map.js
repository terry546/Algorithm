function solution(s1, s2) {
    var answer = 0;
    s1.map(sc1 => {
        s2.map(sc2 => {
            if (sc1 === sc2) {
                answer += 1
                console.log(answer)
            }
        })
    })
    return answer;
}





let s1 = ["a", "b", "c"]
let s2 = ["com", "b", "d", "p", "c"]
solution(s1, s2)