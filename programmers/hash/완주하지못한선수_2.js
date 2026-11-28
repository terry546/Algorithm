function solution(participant, completion) {
    var map = new Map();

    // 참가자 명단 중복 이름 확인
    for (i = 0; i < participant.length; i++) {
        let plist = participant[i]

        if (map.has(plist) === true) {
            let count = map.get(plist)
            map.set(plist, count + 1)

        } else {
            map.set(plist, 1)
        }
    }

    // 완주자 확인
    for (i = 0; i < completion.length; i++) {
        let name = completion[i]
        let count = map.get(name)
        map.set(name, count - 1)
        // console.log(map)

    }

    // 미완주자 확인
    for (i = 0; i < participant.length; i++) {
        let name = participant[i]
        let remainCount = map.get(name)
        // console.log(map)

        if (remainCount > 0) {
            console.log(name)
            return name
        }

    }


    // var answer = '';
    // return answer;
}


// console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]));
console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));