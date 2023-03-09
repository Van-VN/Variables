function convert() {
    let fValue;
    let cvalue = +document.getElementById("tempConvert").value;
    if (isNaN(cvalue)) {
        alert("Nhập sai đầu vào!");
    } else {
        fValue = (9 * cvalue + 160) / 5;
        document.getElementById("result").innerHTML = fValue;
        // alert("Nhiệt độ chuyển đổi sang F là: " +  fValue);
    }
}
