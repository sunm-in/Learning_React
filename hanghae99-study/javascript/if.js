// 조건문 (1)
// if (조건) {조건을 만족할 때 실행할 코드}
const shoesPrice = 40000
if (shoesPrice < 50000) {   // 신발 가격이 50000원보다 작으므로 해당 코드가 해당됨
    console.log('이 신발을 사겠습니다.') 
}

const capPrice = 50000
if (capPrice < 50000) { // 모자 가격이 50000원보다 작지 않으므로 해당 코드가 실행되지 않음
    console.log('이 모자를 사겠습니다.')
}

// 조건문 (2)
// else, else if
// if 구문의 조건을 만족하지 않았을 때 실행하고 싶은 코드를 else 구문과 함께 작성
const shoesPrice2 = 50000
if (shoesPrice2 < 40000) {
    console.log('이 신발을 사겠습니다.')
} else {
    console.log('비싸서 사지 않겠습니다.')  // 40000원보다 작지 않으므로 해당 코드가 실행됨
}

// else if 구문을 활용하면 보다 더 많은 조건을 판단하고 코드를 실행할 수 있다.
const shoesPrice3 = 50000
if (shoesPrice3 < 40000) {
    console.log('이 신발을 사겠습니다.')
} else if (shoesPrice3 <= 50000) {
    console.log('고민 해볼게요.')   // 50000원보다 작거나 같으므로 해당 코드가 실행됨
} else {
    console.log('비싸서 사지 않겠습니다')
}

// quiz 거리를 의미하는 변수를 선언하고 원하는 숫자값 (단위는 km라고 가정)을 할당합니다.
// 2km 미만이면 "걸어가자", 2km 이상이고 5km 미만이면 "택시를 타자", 그 외에는 "기차를 타자"를 출력하기
const distance = 2
if (distance < 2) {
    console.log('걸어가자')
} else if (distance >= 2 && distance < 5) {  // 논리연산자 && -> 둘 다 true여야만 true 반환
    console.log('택시를 타자')
} else {
    console.log('기차를 타자')
}