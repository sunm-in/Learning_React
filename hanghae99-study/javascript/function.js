// 함수 -> 특정 작업을 수행하는 코드의 집합
// 반복되는 특정 작업을 수행해야 한다면 그 코드 자체를 어딘가에 만들어서 저장해놓고 사용하기 위해 등장하는게 함수이다.

// 함수 선언과 호출 -> 변수를 선언하고 해당 변수에 값을 할당했던 것처럼, 함수도 선언을 하고 해당 함수가 실행할 코드의 집합을 만들어서 저장한다.
function calculateAvg(price1, price2) {
    const sum = price1 + price2
    console.log(`두 상품의 가격 총합은 ${sum}원입니다.`)
    const avg = sum / 2
    return avg
}

// 함수의 호출 -> const 변수명 = 선언한 함수명(매개변수들..)
const priceA = 1000
const priceB = 2000
const avg1 = calculateAvg(priceA, priceB)
console.log(`A와 B의 평균은 ${avg1}입니다.`)
// 1. 함수 calculateAvg를 호출하면서 변수 priceA와 priceB를 매개변수로 전달
// 2. 함수 calculateAvg의 바디 코드가 실행됨. 이 때 1번에서 전달한 매개변수의 값이 함수를 선언할 때 썼던 매개변수명인 price1, price2에 할당됨.
// 3. 함수의 바디 코드가 최종적으로 변수 avg를 리턴하고 있고, 이것이 변수 avg1에 할당됨

const priceC = 3000
const priceD = 4000
const avg2 = calculateAvg(priceC, priceD)
console.log(`C와 D의 평균은 ${avg2}입니다.`)

console.log('-------- 구분선 --------')

// quiz 세 개의 물건가격을 매개변수로 전달받아 평균값을 리턴하는 함수를 정의하고, 그 함수를 호출해서 평균값을 출력하기
function calculateAvg2(price1, price2, price3) {
    const avg = (price1 + price2 + price3) / 3
    return avg
}

const priceX = 1000
const priceY = 2000
const priceZ = 3000
const avg = calculateAvg2(priceX, priceY, priceZ)
console.log(`세 개의 평균가격: ${avg}`)