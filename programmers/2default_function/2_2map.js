// 1. bills 변수에 10개의 숫자를 배열로 넣기
const bills = [25, 40, 19, 30, 50, 10, 70, 29, 31, 85];

// 2. calculateTip 함수 정의
function calculateTip(amount) {
    if (amount >= 30) {
        return amount * 0.15;
    } else {
        return amount * 0.20;
    }
}

// 3. bills 배열의 각 금액에 대한 팁을 계산하여 tips 배열에 저장
const tips = bills.map(calculateTip);

// 4. 결과 출력
console.log(tips);