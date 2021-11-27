// 반복문 (1)
// while (조건) {조건을 만족할 때 실행할 코드}
let temperature = 20
while (temperature < 25) {
    console.log(`${temperature}도 정도면 적당한 온도입니다.`)
    temperature++ // 증감연산자를 활용해서 온도를 변화시킴
}
// 반복문의 조건이 계속해서 true 를 리턴한다면 무한루프에 빠져서 프로그램이 끝나지 않는다.
// 그러므로 반복문이 끝날 수 있도로 해줘야 함
// 무한루프에 빠져서 프로그램의 실행이 끝나지 않는다면 ctrl + c 를 눌러서 중단시킨다.

console.log('-------- 구분선 --------')

// 반복문 (2)
// for (begin; condition; step) {조건을 만족할 때 실행할 코드}
// while 과 같은 반복문, 좀 더 명시적으로 반복문의 조건을 표현할 수 있다.
for (let temperature2 = 20; temperature2 < 25; temperature2++) {
    console.log(`${temperature2}도 정도면 적당한 온도입니다.`)
}
// for문이 실행되는 순서
// 1. temperature2라는 변수를 선언하고 값을 할당 (begin)
// 2. temperature2가 25보다 작은지 연산한다, 결과값이 true라면 계속 실행, false라면 for문 종료 (condition)
// 3. 중괄호 안의 코드가 실행된다
// 4. temperature2에 1을 더해서 재할당하고 2번 과정부터 다시 반복 (step)

console.log('-------- 구분선 --------')

// 반복문과 조건문 활용
// 반복문과 조건문을 같이 활용하여 1 ~ 10까지의 숫자중 3으로 나누었을 때 나머지가 0인 숫자를 구해서 출력해보기
for (let number = 1; number <= 10; number++) {
    if (number % 3 === 0) {
        console.log(`${number}는 3으로 나눠서 떨어지는 숫자입니다.`)
    }
}

console.log('-------- 구분선 --------')

// quiz 1부터 20까지의 숫자중 홀수인 경우는 "숫자 _는 홀수입니다.", 짝수인 경우 "숫자 _는 짝수입니다."를 출력하기
for (let num = 1; num <= 20; num++) {
    if (num % 2 === 0) {
        console.log(`${num}는 짝수입니다.`)
    } else {
        console.log(`${num}는 홀수입니다.`)
    }
}