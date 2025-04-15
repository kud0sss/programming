{
    // /*Задача 4.1 (расчитать значение y при заданном значении x)*/
    // let x, y;
    // x = parseFloat(prompt("Задайте значение x"));
    // let sinValue = Math.sin(x);
    // if (x > 0){
    //     y = Math.pow(sinValue, 2);
    // } else {
    //     y = 1 - 2 * Math.pow(sinValuem, 2);
    // }
    // alert("Значение y: " +y);
}

{
    // /*Задача 4.40 (дано вещественное число x. Вычислить f(x), если..)*/
    // let x, f; 
    // x = parseFloat(prompt("Задайте вещественное число x"));
    // if(x >= -2.4 && x <= 5.7){
    //     f = x * x;
    // } else{
    //     f = x / 4;
    // }
    // alert("Ответ: " +f);
}

{
    // /*Задача 5.32 (вычислить сумму)*/
    // let n, sum;
    // n = parseInt(prompt("Введите число"));
    // sum = 0;
    // for (let i = 1; i <= n; i++) {
    //     sum += 1 / i;
    // }
    // alert("Сумма = " +sum);
}

{
    // /*Задача 5.42 (известны оценки абитуриента на четырех экзаменах. Определить 
    // общую сумму набранных им баллов)*/
    // let exam1, exam2, exam3, exam4, totalScore;
    // exam1 = parseInt(prompt("Оценка за первый экзамен"));
    // exam2 = parseInt(prompt("Оценка за второй экзамен"));
    // exam3 = parseInt(prompt("Оценка за третий экзамен"));
    // exam4 = parseInt(prompt("Оценка за четвертый экзамен"));
    // totalScore = exam1 + exam2 + exam3 + exam4; 
    // alert("Сумма баллов: " +totalScore)
}

{
    // /*Задача 6.48 (в, г) (дано натуральное число. в) Верно ли, что оно 
    // начинается цифрой x и заканчивается цифрой y? г) Верно ли, что сумма
    // его цифр больше m, а само число делится на n?)*/
    // let number, x, y, a, n;
    // number = parseInt(prompt("Введите натуральное число"));
    // x = parseInt(prompt("Введите первую цифру"));
    // y = parseInt(prompt("Введите последнюю цифру"));
    // a = parseInt(prompt("Введите число a"));
    // n = parseInt(prompt("Введите число b"));

    // let lastDigit = number % 10;
    // let firstDigit = number;
    // while (firstDigit >= 10) {
    //     firstDigit = Math.floor(firstDigit / 10);
    // }
    // let partB = (firstDigit == x && lastDigit == y);
    
    // let product = 1; 
    // let temp = number;
    // while (temp > 0) {
    //     let digit = temp % 10; 
    //     product = product * digit; 
    //     temp = Math.floor(temp / 10); 
    // }
    // let isProductLess = product < a; 
    // let isDivisible = number % n === 0; 
    // let partG = isProductLess && isDivisible;

    // alert("в)" +partB)
    // alert("г)" +partG)
}