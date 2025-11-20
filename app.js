function press(num) {
    document.getElementById("display").value += num;
}

function calculate() {
    try {
        let exp = document.getElementById("display").value;
        document.getElementById("display").value = eval(exp);
    } catch {
        document.getElementById("display").value = "Error";
    }
}

function clearDisplay() {
    document.getElementById("display").value = "";
}
