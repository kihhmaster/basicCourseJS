"user strict";
// Выполнение домашней работы

// Задание 1

// let a = 1, b = 1, c, d; 
// c = ++a; 
// //пример 1
// alert(c); // ответ: 2 
// /* с = 2;  так как с переменной а , используется инкремент с префиксным значением. 
// 1. Из-за префиксного значения а = 1; увеличивается на 1.
// 2. а записывается в с = 2;
// 3. Вызов alert(c).
// */

// //пример 2 
// d = b++;
// alert(d); //ответ: 1
// alert(b); 
// /* d = 1;  так как с переменной b , используется инкремент с Постфиксным значением. 
// 1. Из-за Постфиксного значения b = 1 сначала записывается в d = 1
// 2. потом происходит увеличение b = 2.
// 3. Вызов alert(d) выведет нам записаное значение, без увеличения. Только не понятно куда денется увеличеное значение.
// */

// //пример 3 
// c = 2 + ++a; 
// alert(c); //ответ: 5 
// /* с = 5;  так как с переменной а , используется инкремент с префиксным значением. 
// 1. Из-за префиксного значения а = 2(значение 2, так как в первам примере 1 уже произошло увеличение переменной); увеличивается на 1.
// 2. происходит сложение чисел с = 2 + 3
// 3.  сумма записывается в с = 5;
// 3. Вызов alert(c).
// */
// //пример 4 
// d = 2 + b++; 
// alert(d); //ответ: 4 
// alert(a); //3 
// alert(b); //3
// /* 1. d = 4;  так как с переменной b = 2(увеличение заначения произошло в примере 2) , используется инкремент с Постфиксным значением. Из-за Постфиксного значения b = 2 сначала происходит сложение d = 2 + 2
// 	1.1 b = 3; используется инкремент с Постфиксным значением  увеличение произошло после сложения. 
// 2. a = 3; значение увелилось в примере 3




// Задание 2

// let a = 2; 
// let x = 1 + (a *= 2);
/**
 * 1. Значение 2 присваивается переменной а.
 * 2. Выполняется оператор с максимальным приоритетом() т.е. переменная а = 2 умножается на 2 и перезаписывается.
 * 3. произошло сложение чисел 1 и 4 , и присвоилось  значение переменной х = 5.
 */





// задание 3

// let a = +prompt("Введите число 'a'"),
// 		b = +prompt("Введите число 'b'");

// if (a >= 0 && b >= 0) {
// 	alert(a - b);
// }else if (a < 0 && b < 0) {
// 	alert(a * b);
// }else if (a < 0 && b >= 0 || a >= 0 && b < 0 ) {
// 	alert (a + b);
// }






// задание 4

// function multiplication (a, b) {
// 	alert('Результат умножения: ' + (a * b));
// }

// multiplication(3, 5);

// function division (a, b) {
// 	alert('Результат деления: ' + (a / b));

// }

// division(15, 3);

// function subtract (a, b) {
// 	alert('Результат вычитания: ' + (a - b));
// }

// subtract(10, 3);


// function addition (a, b) {
// 	alert('Результат сложения: ' + (a + b));
// }

// addition(2, 7);





//Задание 5
// Для выполнения данного упражнения снимите коментарий с функции задания 4


// function mathOperation(arg1, arg2, operation) {
// 		switch(operation){
// 			case 'multiplication': 
// 				multiplication(arg1, arg2)
// 				break;
// 			case 'division': 
// 				division(arg1, arg2)
// 				break;
// 			case 'subtract': 
// 				subtract(arg1, arg2)
// 				break;
// 			case 'addition': 
// 				addition(arg1, arg2)
// 				break;

// 		}
// 	}


// mathOperation(5, 3, 'multiplication');
// mathOperation(5, 3, 'division');
// mathOperation(5, 3, 'subtract');
// mathOperation(5, 3, 'addition');







// //игра угадайка
// const riddle = parseInt(Math.random()*100);

// function guess(num) {
// 	let answer = parseInt(prompt("Угадай число от 0 до 100"));

// 	if (answer > num ) {
// 		alert("Ваше число слишком большое");
// 	}else if (answer < num ) {
// 		alert("Ваше число слишком маленькое");
// 	}else if (answer == num ) {
// 		alert("Вы угадали");
// 		return;
// 	} else {
// 		alert("Необходимо ввести число!");
// 	}
// 	guess(num);

// }
// guess(riddle);






// генератор паролей 

// let symbols = "1234567890!@#$%^&*()-_=+;:][}{/?.,qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
// let password = '';

// function getRandomInt(min, max) {
// 	return Math.floor(Math.random() * (max - min)) + min;
// }

// function genetate(passLenght) {
// 	let symbolsPosition = getRandomInt(0, 87);
// 	password += symbols.charAt(symbolsPosition);
// 	passLenght--;
// 	if(passLenght !=0) {
// 		genetate(passLenght);
// 	}
// }

// function askPassLenght() {
// 	return parseInt(prompt("Введите длину пароля"));
// }

// genetate(askPassLenght());
// alert(`Ваш пароль: ${password}`);







//Введите пароль, где есть англиские буквы и цыфры, и длинна больше 5 символов

// const password = prompt('Введите пароль, где есть англиские буквы и цыфры, и длинна больше 5 символов');
// const lengthMore5 =  password.length > 5;
// const digitsPresented = /\d+/gm.test(password);
// const lettersPresented = /[a-zA-z]+/gm.test(password);
// if(lengthMore5 && digitsPresented && lettersPresented) {
// 	alert('Ваш пароль  подходит!');
// }else {
// 	alert('Ваш пароль не подходит!');
// }


