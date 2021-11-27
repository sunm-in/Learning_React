// 연산자 (2)
// 비교연산자 (Comparison operators)
// 숫자값을 비교하는 연산자 -> 비교연산자를 통해서 얻는 값은 boolean
console.log(1 < 2)  // true
console.log(1 <= 2) // true
console.log(1 > 2)  // false
console.log(1 >= 2) // false


// 논리연산자 (Logical operators)
// || (or)  -> 연산 대상 중 하나만 true 여도 true 리턴
// && (and) -> 연산 대상이 모두 true 여야만 true 리턴
// ! (not)  -> true를 false로, false를 true로 바꿔서 리턴
let isOnSale = true
let isDiscountItem = true

console.log(isOnSale && isDiscountItem) // true
console.log(isOnSale || isDiscountItem) // true

isOnSale = false
console.log(isOnSale && isDiscountItem) // false
console.log(isOnSale || isDiscountItem) // true

isDiscountItem = false
console.log(isOnSale && isDiscountItem) // false
console.log(isOnSale || isDiscountItem) // false

console.log(!isDiscountItem)    // true


// 일치연산자 (Equality operators)
// 두 값이 일치하는지를 비교
console.log(1 === 1)    // true
console.log(1 === 2)    // false

console.log('Javascript' === 'Javascript')  // true
console.log('javascript' === 'Javascript')  // false

// === -> 두 값의 데이터타입과 값 자체가 정확히 일치해야만 true를 리턴한다
console.log(1 === '1')  // false

// == -> 비교하는 두 값의 데이터타입이 일치하지 않을 때 해당 값의 데이터타입을 자동으로 변환해주는 자바스크립트만의 특성이 있다.
// 이 특성이 자칫 개발자의 실수를 유발할 가능성이 크기 때문에 실무에서는 거의 쓰지 않고 있다. 정확한 프로그래밍을 위해 === 만 쓰기
console.log(1 == '1')   // true


// quiz 상품 가격을 나타내는 2개의 변수를 선언 -> 각각의 변수에 원하는 가격값을 할당
// 두 상품을 더한 가격 -> 총 가격을 나타내는 변수에 할당
// 총가격의 20% 할인된 가격을 구해서 '총 구입가격은 몇원입니다.'라는 문자열을 출력하기
const iphonePrice = 200000
const galaxyPrice = 150000
const totalPrice = iphonePrice + galaxyPrice

console.log(`총 구입가격은 ${totalPrice * 0.8}원입니다.`) // 총 구입가격은 280000원입니다.
