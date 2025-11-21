let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");
let errorBox = document.getElementById("error");

let string = "";
let ops = ["+", "-", "*", "/", "%"];

function showError(msg) {
    errorBox.textContent = msg;
    setTimeout(() => errorBox.textContent = "", 2000);
}

buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let value = e.target.innerHTML;

    
        if (value === "AC") {
            string = "";
            input.value = "0";
            return;
        }

        
        if (value === "DEL") {
            string = string.slice(0, -1);
            input.value = string || "0";
            return;
        }

        // Prevent duplicate operators (like ++, --, **)
        if (ops.includes(value) && ops.includes(string.slice(-1))) {
            showError("Invalid operator sequence");
            return;
        }

        // Prevent multiple dots in one number
        if (value === ".") {
            let lastNum = string.split(/[\+\-\*\/%]/).pop();
            if (lastNum.includes(".")) {
                showError("Already used dot");
                return;
            }
        }

        // Evaluate expression
        if (value === "=") {
            try {
                if (string === "") return;

                // divide by zero check
                if (string.includes("/0")) {
                    showError("Cannot divide by zero");
                    return;
                }

                let result = eval(string);

                if (isNaN(result)) {
                    showError("Invalid Input");
                    return;
                }

                input.value = result;
                string = result.toString();
            } catch {
                showError("Invalid Input");
            }
            return;
        }

        // Add value
        string += value;
        input.value = string;
    });
});
