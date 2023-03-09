let physicsScr;
let chemistScr;
let bioScr;

function getScr() {
physicsScr = +prompt("Nhập điểm Lý: ");
chemistScr = +prompt("Nhập điểm Hóa: ");
bioScr = +prompt("Nhập điểm Sinh học: ");
}

getScr();

console.log(physicsScr,chemistScr,bioScr);

if (isNaN(physicsScr) || isNaN(chemistScr) || isNaN(bioScr) || physicsScr < 0 || chemistScr < 0 || bioScr <0) {
    alert("Dữ liệu nhập không chính xác");
} else {
    alert("Điểm trung bình là: " + (physicsScr + chemistScr + bioScr)/3 );
}

console.log(physicsScr,chemistScr,bioScr);