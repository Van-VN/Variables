let i = 10;
let f = 20.5;
let b = true;
let s = "Hà Nội";

document.write("i = " + i + "<br>");
document.write("f = " + f + "<br>");
document.write("b = " + b + "<br>");
document.write("s = " + s + "<br>");
function areaCalc() {
    let rectLen = document.getElementById("length").value
    console.log(rectLen);
    console.log(typeof rectLen);
    let rectWidth = document.getElementById("width").value
    console.log(rectWidth + typeof rectWidth);
    let area;
    area = +rectLen * +rectWidth;
    document.getElementById("result").innerHTML = area;
}

let numa = +prompt("Nhập số a");
let numb = +prompt("Nhập số b");

if (numa % numb === 0) {
    alert("A chia hết cho B");
} else {
    alert("A không chia hết cho B");
}

// Bài 1: Khai báo các biến thuộc các kiểu khác nhau, gán giá trị cho chúng và in ra tài liệu HTML.
//
//     Biến i kiểu số nguyên, có giá trị là 10
//
// Biến f kiểu số thực, có giá trị là 20.5
//
// Biến b kiểu logic, có giá trị là true
//
// Biến s kiểu chuỗi, có giá trị là "Hà Nội".
//
//     Sử dụng hàm document.write() để viết kết quả ra màn hình.