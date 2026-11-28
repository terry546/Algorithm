function solution(participant, completion) {
    // 1. 빈 해시맵(명부) 생성
    let map = new Map();

    // 2. 참가자 명단(participant)을 한 명씩 확인
    for (let i = 0; i < participant.length; i++) {
        let name = participant[i];
        console.log("명단: " + name)
        // 맵에 이미 이 이름이 등록되어 있는지 확인
        if (map.has(name) === true) {

            // 이미 있으면 기존 인원수를 가져와서 1을 더해줌 (동명이인)
            let count = map.get(name);
            map.set(name, count + 1);
            // console.log("중복되는 이름: " + name)
        } else {
            // 처음 나온 이름이면 인원수를 1로 등록
            map.set(name, 1);
        }
    }

    // 3. 완주자 명단(completion)을 한 명씩 확인하며 인원수 1씩 빼기
    for (let i = 0; i < completion.length; i++) {
        let name = completion[i];

        // 완주했으므로 해당 선수의 인원수를 가져와서 1을 뺌
        let count = map.get(name);
        map.set(name, count - 1);
        console.log(map)
    }

    // 4. 참가자들을 다시 확인해서 인원수가 1로 남아있는 사람 찾기
    for (let i = 0; i < participant.length; i++) {
        let name = participant[i];
        let remainingCount = map.get(name);

        // 카운트가 0이 아니고 1로 남아있다면 완주하지 못한 선수!
        if (remainingCount > 0) {
            return name;
        }
    }
}

// 실행 테스트
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]));
// "leo"