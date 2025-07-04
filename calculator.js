var a = document.getElementById("num1");
var b = document.getElementById("num2");
var res = document.getElementById("result");

function calc(op){
    var x = parseFloat(a.value);
    var y = parseFloat(b.value);
    var r;

    if(op == "+"){
        r = x + y;
    } else {
        if(op == "-"){
            r = x - y;
        } else {
            if(op == "*"){
                r = x * y;
            } else {
                if(op == "/"){
                    if(y == 0){
                        r = "No dividir por 0"
                    } else {
                        r = x / y;
                    }
                }
            }
        }
    }

    res.innerHTML = "Resultado:" + r;
}
