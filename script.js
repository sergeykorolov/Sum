//выполнение сложения
function sum() {
    var number1 = parseFloat(document.getElementById("number1").value);
    var number2 = parseFloat(document.getElementById("number2").value);

    var result = (number1 + number2);

    if ((result % 1) !== 0) {
        result = (result).toFixed(1);
    }

    //проверка на неверные символы и вывод результата
    if(isNaN(result)){
        document.getElementsByClassName("result")[0].innerHTML = "Введены недопустимые символы";
    }else {
        document.getElementsByClassName("result")[0].innerHTML = result.toString();
    }
    document.getElementsByClassName("popup")[0].style.display = "block";
}

//обработка нажатия на кнопку OK в всплывающем окне
function buttonOk() {
    document.getElementsByClassName("popup")[0].style.display = "none";
}