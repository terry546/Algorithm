function solution(participant, completion) {
    var map = new Map();
    var answer = [];
    //중복 참여자 확인
    for (i = 0; i < participant.length; i++) {
        let name = participant[i]
        let count = map.get(participant[i])
        if (map.has(participant[i])) {
            map.set(name, count + 1)
        } else {
            map.set(name, 1)
        }
    }

    // 완주자 확인
    for (i = 0; i < completion.length; i++) {
        let name = completion[i]
        let count = map.get(completion[i])
        map.set(name, count - 1)
        console.log(map)
    }

    // 미완주자 확인
    for (i = 0; i < participant.length; i++) {
        let count = map.get(participant[i])
        if (count > 0) {
            answer = participant[i]
            return answer
        }
    }

    return answer;
}

solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])