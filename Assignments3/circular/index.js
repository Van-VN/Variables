let areaCalc;
let parameter;
function calc() {
    let rad = +document.getElementById("radius").value;
    areaCalc = rad * rad * Math.PI;
    parameter = rad * 2 * Math.PI;
    console.log(rad, areaCalc, parameter);
    document.getElementById("param").innerHTML = parameter;
    document.getElementById("area").innerHTML = areaCalc;
}