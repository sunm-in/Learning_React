// 클래스와 객체

class Notebook {    // 1. class 키워드와 클래스명
    constructor(name, price, company) { // 생성자 (constructor), 나중에 객체가 '생성'이 될 때 자바스크립트 내부에서 호출이 되는 함수
        // this와 속성 (property)
        // this -> 클래스를 사용해 만들어질 객체 자기 자신을 의미
        // this 뒤에 붙는 name, price, company는 객체의 속성 
        this.name = name
        this.price = price
        this.company = company
    }   
}
// 객체 만들기 -> const 변수명 = new 클래스명(생성자에서 정의한 매개변수들)
const notebook1 = new Notebook('Macbook', 2000000, 'Apple')

console.log(notebook1)          // Notebook { name: 'Macbook', price: 2000000, company: 'Apple' }
// 객체의 속성 하나하나에 접근해 데이터를 갖고와야 할 때 -> this.속성명
console.log(notebook1.name)     // Macbook
console.log(notebook1.price)    // 2000000
console.log(notebook1.company)  // Apple


console.log('-------- 구분선 --------')


// 메소드 (method)
class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    printInfo() {
        console.log(`name: ${this.name}, price: ${this.price}`)
    }
}

// 객체 생성 및 메소드 호출
const notebook = new Product('Macbook', 2000000)
notebook.printInfo()    // name: Macbook, price: 2000000

console.log('-------- 구분선 --------')

// 객체 리터럴 (Object Literal)
const computer = {
    name: 'Macbook',
    price: 2000000,
    printInfo: function () {
        console.log(`name: ${this.name}, price: ${this.price}`)
    }
}

computer.printInfo()    // name: Macbook, price: 2000000
// 굳이 복잡하게 클래스를 정의하는 이유 -> 재사용성 때문
// 한 번 클래스를 만들어두면 같은 속성과 메소드를 갖고 있는 객체를 훨씬 더 간결한 코드로 만들 수 있다.

console.log('-------- 구분선 --------')

// quiz 색깔, 사이즈, 가격의 속성을 가지고 있고, 이 옷들의 세 속성을 바로 확인할 수 있게 출력해주는 메소드를 만들기
class Cloth {
    constructor(color, size, price) {
        this.color = color
        this.size = size
        this.price = price
    }

    printInfo() {
        console.log(`color: ${this.color}, size: ${this.size}, price: ${this.price}`)
    }
}

const cloth1 = new Cloth('red', 'M', 20000)
const cloth2 = new Cloth('black', 'L', 50000)
cloth1.printInfo()  // color: red, size: M, price: 20000
cloth2.printInfo()  // color: black, size: L, price: 50000