// 배열 -> 같은 형식의 많은 데이터를 순서대로 저장하고자 할 때 쓰는 것이 배열
// 같은 타입의 데이터들을 하나의 변수에 할당하여 관리하기 위해 사용하는 데이터 타입이라고 기억해두면 좋다.

// 배열의 선언 첫 번째 방법
const arr1 = new Array(1, 2, 3, 4, 5)
console.log(arr1)
// 두 번째 방법
const arr2 = [1, 2, 3, 4, 5]    // 두 번째 방법을 많이 사용한다.
console.log(arr2)

// 배열 안의 데이터 -> 배열에 있는 데이터 각각을 요소 (element) 라고 부른다.
// 객체도 속성명을 통해 해당 데이터에 쉽게 접근할 수 있다.
// 배열에서는 인덱스(index) 가 객체의 속성명과 같은 역할을 한다, 0부터 시작
const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

console.log(rainbowColors[0])   // red
console.log(rainbowColors[1])   // orange
console.log(rainbowColors[2])   // yellow
console.log(rainbowColors[3])   // green
console.log(rainbowColors[4])   // blue
console.log(rainbowColors[5])   // indigo
console.log(rainbowColors[6])   // violet

// 배열 안의 요소의 갯수를 확인하기 -> length 라는 속성 사용
console.log(rainbowColors.length)   // 7

// length 를 응용하여 배열의 마지막 요소도 찾아서 출력 가능
console.log(rainbowColors[rainbowColors.length -1]) // violet

console.log('-------- 구분선 --------')

// 요소 추가와 삭제
rainbowColors.push('ultraviolet')   // 배열의 마지막에 ultraviolet 추가
console.log(rainbowColors)

rainbowColors.pop() // 배열의 마지막 요소 ultraviolet을 제거
console.log(rainbowColors)

console.log('-------- 구분선 --------')

// 배열과 반복문
// const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
for (let i = 0; i < rainbowColors.length; i++) {
    console.log(rainbowColors[i])
}
// 배열의 인덱스는 0부터 시작 -> 변수 i의 시작값도 0으로 시작
// i가 배열의 길이보다 작을 때에만 반복문 안의 코드 실행
// 모든 요소를 빠짐없이 다 출력해야 하므로 i는 1씩 증가

console.log('-------- 구분선 --------')

// 배열과 함께 좀 더 자주 쓰이는 간단한 형식의 for문
// 배열에서 요소들을 차례대로 하나씩 찾아 color라는 변수에 할당, 자동으로 배열의 끝까지 반복문이 실행된다.
for (const color of rainbowColors) {
    console.log(color)
}

console.log('-------- 구분선 --------')

// quiz 열 개의 상품 가격 데이터를 갖고 있는 배열은 만든다. 반복문을 활용해 상품들의 가격 합계와 평균을 구하기
const priceList = [1000, 2000, 3000, 4000, 5000, 7000, 10000, 15000, 20000, 25000]
let sum = 0

for (const price of priceList) {
    sum += price
}

const avg = sum / priceList.length
console.log(`합계: ${sum}, 평균: ${avg}`)   // 합계: 92000, 평균: 9200
