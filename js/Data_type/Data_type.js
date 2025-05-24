/*
    Have 2 Data type decription 
    1. Primitive data type (immutable(non-modifiable)) dữ liệu nguyên thủy không thể thay đổi
        - String - any data in double or single quotes
        - Number - Integer, float, double
        - Boolean - true or false
        - Undefined - variable is declared but not initialized
        - Null - variable is declared and initialized with null
        - Symbol - unique and immutable value

        2. Non-Primitive data type
            2.1 Object - collection of key-value pairs
            2.2 Array - collection of values
*/

// Primitive dữ liệu nguyên thủy không thể thay đổi
let word = 'Hello';
word[0] = 'a'; // This will not change the first character of the string

// Primitive data can compared - dữ liệu immutable có thể so sánh
let numberOne = 2;
let numberTwo = 2;
//console.log(numberOne == numberTwo); // true

let js = 'JavaScript';
let py = 'py';
// console.log(js == py); // false

/*
Note 
    compared == just compared value of dataType 
    compared === can compared dataType and value
*/
let numberThree = 2;
let numberFour = '2';
// console.log(numberThree === numberFour); // false

// 2. Non-Primitive data type is not comapared - dữ liệu không thể so sánh
let objectOne = {
  name: 'John',
  age: 30,
};
let objectTwo = {
  name: 'John',
  age: 30,
};
// console.log(objectOne == objectTwo); // false
// nếu mún so sánh phải lấy lấy từng phần tử trong object
// hoặc dùng JSON.stringify
// console.log(JSON.stringify(objectOne) == JSON.stringify(objectTwo)); // true

// Math of Numers
const PI = Math.PI;
//console.log(PI);

// Math.round() - làm tròn số gần nhất .5
//console.log(Math.round(PI)); // 3
//console.log(Math.round(9.5)); // 10
//console.log(Math.floor(9.4)); // 9 làm tròn xuống
//console.log(Math.ceil(9.4)); // 10 làm tròn lên
// console.log(Math.trunc(9.4)); // 9 cắt phần thập phân

// Math random tạo ngẫu nhiên 0 đến 0.9999
let randomNumber = Math.random();
//console.log(randomNumber * 11); // tạo ngẫu nhiên từ 0 đến 10.9999

// Absolute - trị tuyệt đối
let abs = Math.abs(-10); // 10

// Square root - căn bậc 2
let sqrt = Math.sqrt(16); // 4
//console.log(sqrt); // 4

// Power - lũy thừa
let power = Math.pow(4, 2); // 16
console.log(power);

// Logarithm - log
let log = Math.log(2); // 0.6931471805599453

// Trigonometric functions - hàm lượng giác
let sin = Math.sin(60); // 0.8660254037844387

// Concatenating Using Addition Operator
//Addition Operator
// \n: new line
// \t: Tab, means 8 spaces
// \\: Back slash
// \': Single quote (')
// \": Double quote (")