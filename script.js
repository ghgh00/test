/*var age = prompt("Ваш возраст:");
var ok = confirm(`Ваш возраст - ${age}? Если информация неверна - обновите страницу для повторного ввода информации`);
alert(`Вам ${age} лет.`)*/

/*let a = 1 + 2 + 3;
alert(a)*/

/*alert(1+2+3)*/

/*let a = 10;
let b = 2;
alert(a+b);
alert(a-b);
alert(a*b);
alert(a/b)*/

/*let c = 10;
let d = 5;
let result = c + d;
alert(result)*/

/*let a = 1;
let b = 2;
let c = 3;
alert(a+b+c);*/

/*let a = 10;
let b = 5;
let c = a - b;
let d = 7;
let result = c + d;
alert(result)*/

/*let a = 1.5;
let b = 0.75;
alert(a+b)*/

/*let a = -100;
alert(a)*/

/*let a = -74;
alert(-a)*/

/*let a = 10;
let b = 3;
alert(a%b)*/

/*let a = 2;
let b = 10;
alert(a ** b)*/

/*var a = +prompt("Введите первое число:");
var b = +prompt("Введите второе число:");
alert(a+b)*/

/*var a = +prompt("Введите число:")
alert(a%10)*/

/*var a = +prompt("Введите первое число:");
var b = +prompt("Введите второе число:");
alert(a%b)*/

/*alert(Math.round(Math.sqrt(379)))
alert(Math.round(Math.sqrt(379) * 10) / 10)
alert(Math.round(Math.sqrt(379) * 100) / 100)*/

/*alert(Math.floor(Math.random()*200)-100)*/

/*var a = +prompt("Введите первое число:");
var b = +prompt("Введите второе число:");
alert(Math.abs(a-b))*/

/*let str = 'abcde'
alert(str[0])
alert(str[2])
alert(str[4])*/

/*let str = 'abcde'*/ /*111111111*/

/*let str = 'abcde';
let num = 3;
alert(str[num])*/

/*let str = 'abcde';
let last = str.length - 1;
alert(str[last])*/

/*let str = 'abcde';
let last = str.length - 2;
alert(str[last])*/

/*let str = 'abcde';
let last = str.length - 3;
alert(str[last])*/

/*let test = '12345'
alert(Number(test[0]) + Number(test[1]) + Number(test[2]) + Number(test[3]) + Number(test[4]))*/






/*var txt = "Привет Мир!";
var x = txt.length;
alert(x);*/

/*var txt = "Я могу есть бананы весь день";
var x = txt.slice(12 , 19);
alert(x)*/

/*var str1 = "Привет ";
var str2 = "Мир!";
alert( str1.concat("", str2) );*/

/*var txt = "абвгеёжзийклмнопрстуфхцчшщъыьэюя";
var pos = txt.indexOf("ё");
alert(pos)*/

/*var txt = "Привет Мир!";
txt = txt.replace("Привет", "Добро пожаловать");
alert(txt)*/

/*var txt = "Привет Мир";
txt = txt.toUpperCase();
alert(txt)*/

/*var txt = "Привет Мир";
txt = txt.toLowerCase();
alert(txt)*/

/*let test = 1;

if (test > 10) {
	alert('верно');
} else {
	alert('неверно');}*/

/*let test = 1;

if (test < 10) {
	alert('верно');
} else {
	alert('неверно');}*/

/*let test = 1;

if (test >= 10) {
	alert('верно');
} else {
	alert('неверно');}*/

/*let test = 1;

if (test <= 10) {
	alert('верно');
} else {
	alert('неверно');}*/

/*let test = 1;

if (test == 10) {
	alert('верно');
} else {
	alert('неверно');}*/

/*let test = 1;

if (test != 10) {
	alert('верно');
} else {
	alert('неверно');}*/

/*let test1 = 5;
let test2 = 2;

if (test1 > test2) {
	alert('test1');
} else {
	alert('test2');
}*/

/*let test = 3
if (test > 0 && test < 5) {
	alert('верно')
} else {
	alert('неверно')
}*/

/*let test = 15
if (test >= 10 && test <= 20) {
	alert('верно')
} else {
	alert('неверно')
}*/

/*let test1 = 0
let test2 = 5
if (test1 <= 1 && test2 >= 3) {
	alert('верно')
} else {
	alert('неверно')
}*/

/*var txt = prompt("Введите JS:")
if (txt == "JS") {
	alert("Привет, JS");
} else {
	alert("Вы ввели какую-то строку")
}*/

/*var num = +prompt("Введите число:")
if (num > 0) {
	alert("+");
} else {
	if (num == 0){
	alert("0")
} else {
	alert("-")
}}*/

/*var num = prompt("Введите число:")
if (num[1] > 5) {
	alert(">");
} else {
	if (num[1] == 5){
	alert("5")
} else {
	alert("<")
}}*/

/*var num1 = +prompt("Введите первое число:")
var num2 = +prompt("Введите второе число:")
var num3 = +prompt("Введите третье число:")
alert(Math.max(num1, num2, num3))*/

/*let hour=Math.floor(Math.random()*59)
if(hour > 0 && hour < 15){
console.log("первая четверть")
}
else if(hour >= 15 && hour < 30){
console.log("вторая четверть")
}
else if(hour >= 30 && hour < 45){
console.log("третья четверть")
}
else console.log("четвертая четверть")*/

/*var num = prompt("Введите шестизначное число:")
if (Number(num[0]) + Number(num[1]) + Number(num[2]) == Number(num[3]) + Number(num[4]) + Number(num[5])) {
	alert("да")
} else {
	alert("нет")
}*/

/*let btn = document.querySelector("input");
let txt = document.querySelector("p");
btn.addEventListener('click', function(){
	let qst = prompt("Choose lenguage: en/fr/de/it")
	switch(qst){
		case "en":
		txt.innerHTML = 'super programmer';
		break;

		case "fr":
		txt.innerHTML = 'super programmeur';
		break;

		case "de":
		txt.innerHTML = 'super programmierer';
		break;

		case "it":
		txt.innerHTML = 'super programmatore';
		break;

		default: txt.innerHTML = 'Not found';
	}
})*/

/*let num = prompt();
let result = num >=0  ? 1 : -1;
console.log(result);*/

/*let knb = Math.floor(Math.random()*3);
if (knb==1) {
	knb="к"
}
else if(knb==2){
	knb="н"
}
else {
	knb="б"
}
console.log(knb);
let user = prompt("Выберите первую букву выиграшного слова: камень/ножницы/бумага", "к/н/б");
if (user==knb) {
	alert("Ничья ¯\_(ツ)_/¯")
}
else if((user=="к" && knb=="н") || (user=="н" && knb=="б") || (user=="б" && knb=="к"))
	{alert("Вы выиграли!!!")}
else if((user=="к" && knb=="б") || (user=="н" && knb=="к") || (user=="б" && knb=="н"))
	{alert("Вы проиграли(((")}
else {alert("ошибка")}*/

/*let a = +prompt(`Перед тобой 3 дорожки. Какую дорожку выберешь ты?
1 - Дорожка в темный лес,
2 - Дорожка на свтлую полянку,
3 - дорожка к непонятной дверце в стволе многовекового дуба`);
switch (a) {
	case 1: a = +prompt(`Перед тобой три яблока. Чтобы идти дальше, нужно выбрать одно и съесть, какое выберешь?
			1 - Ярко-красное, спелое на вид,
			2 - Зеленое, хрустящее,
			3 - С червячком внутри)))`);
		switch (a) {
			case 1: alert('Яблоко было отравлено, ты не прошел квест. Удачи в следующий раз!'); break;
			case 2: alert('Яблоко оказалось обычным, ты прошел дальше по дорожке и вышел в город. Поздравляю с прохождением квеста!'); break;
			case 3: alert('Яблоко было гнилое, у тебя разболелся животик, ты не прошел квест. Удачи в следующий раз!'); break;
		};
	break;
	case 2: a = +prompt(`У тебя три варианта. Что выберешь?
			1 - Все-таки выберу дорожку, которая сливается с дорожкой в темный лес,
			2 - Подойду к человеку, смотрящему в небо, и спрошу дорогу в город,
			3 - Пойду дальше по полю, надеясь, что что-то скрывается за горизонтом`);
		switch (a) {
			case 1: a = +prompt(`Перед тобой три яблока. Чтобы идти дальше, нужно выбрать одно и съесть, какое выберешь?
			1 - Ярко-красное, спелое на вид,
			2 - Зеленое, хрустящее,
			3 - С червячком внутри)))`);
				switch (a) {
					case 1: alert('Яблоко было отравлено, ты не прошел квест. Удачи в следующий раз!'); break;
					case 2: alert('Яблоко оказалось обычным, ты прошел дальше по дорожке и вышел в город. Поздравляю с прохождением квеста!'); break;
					case 3: alert('Яблоко было гнилое, у тебя разболелся животик, ты не прошел квест. Удачи в следующий раз!'); break;
				};
			case 2: a = +prompt(`Это оказалась каменная статуя. Обстановка становится угнетающей. Что выберешь теперь? 
        		1 - Дорожку, которая сливается с дорожкой в темный лес, 
        		2 - Идти дальше, надеясь, что что-то скрывается за горизонтом`);
        		switch (a) {
        			case 1: a = +prompt(`Перед тобой три яблока. Чтобы идти дальше, нужно выбрать одно и съесть, какое выберешь?
					1 - Ярко-красное, спелое на вид,
					2 - Зеленое, хрустящее,
					3 - С червячком внутри)))`);
						switch (a) {
							case 1: alert('Яблоко было отравлено, ты не прошел квест. Удачи в следующий раз!'); break;
							case 2: alert('Яблоко оказалось обычным, ты прошел дальше по дорожке и вышел в город. Поздравляю с прохождением квеста!'); break;
							case 3: alert('Яблоко было гнилое, у тебя разболелся животик, ты не прошел квест. Удачи в следующий раз!'); break;
						};
					case 2: alert('Поле постепенно превратилось в болото. К сожалению, ты не прошел квест. Удачи в следущий раз!'); break;
        		}
			case 3: alert('Поле постепенно превратилось в болото. К сожалению, ты не прошел квест. Удачи в следущий раз!'); break;
		}
	case 3: 
}*/

/*let i = 1;

while (i <= 100) {
	console.log(i);
	i++;
}*/

/*let i = 11;

while (i <= 33) {
	console.log(i);
	i++;
}*/

/*let i = 0;

while (i <= 100) {
	console.log(i);
	i += 2;
}*/

/*let i = 1;

while (i <= 100) {
	console.log(i);
	i += 2;
}*/

/*let i = 30;

while (i >= 0) {
	console.log(i);
	i--;
}
*/

/*for(let i = 0; i <= 100; i++)
console.log(i)*/

/*for(let i = 11; i <= 33; i++)
console.log(i)*/

/*for(let i = 0; i <= 100; i += 2)
console.log(i)*/

/*for(let i = 1; i <= 99; i += 2)
console.log(i)*/

/*for(let i = 100; i >= 0; i--)
console.log(i)*/

/*var i = Math.floor(Math.random()*100);
var user = +prompt("Отгадайте число:");
while (user != i) {
	if (user>i) {
		user = +prompt("Это число меньше")
	}
	else {user = +prompt("Это число больше")}
}
if (user = i) {
	alert("Вы выиграли")
}*/

/*var n = 0;
for(let i = 0; i<=10; i++){
n=n+i
console.log(n)}*/

/*var n = 1;
for(let i = 1; i<=10; i++) {
n=n*i
console.log(n)}*/

/*var n = 6
for(let i = n - 1; i>0; i--) {
n=n*i
console.log(n)}*/

/*var x = "";
for(let i = 0; i<20; i++) {
x=x+"x"
console.log(x)}*/

/*for (var i = 0; i<=9; i++) {
	for(j = 8; j >= i; j--) {
		document.write("*")
	}
	document.write('<br>')
}*/

/*for(x=0; x<9; x++) {
	for(i=9; i>x; i--) {
		document.write("&nbsp")
	}
	for(j=0; j<=i; j++) {
		document.write("*")
	}
	document.write("<br>")
}*/

/*for(let f=0; f<12; f++){
	document.write("&nbsp&nbsp")
}
document.write("*<br>")

for(var s=11; s>0; s--){
	for(var i=0; i<s; i++) {
		document.write("&nbsp&nbsp")
	}
	document.write("*&nbsp&nbsp")
	for(var j=11; j>s; j--) {
		document.write("&nbsp&nbsp&nbsp&nbsp")
	}
	document.write("*<br>")
}
for(let d=25; d>0; d--) {
	document.write("*")
}*/

/*let number;
do{
	number = prompt('Введите число:')
} while(isNaN(number))
document.querySelector('.number').innerText=number;
for(i = 1; i <= 10; i++) {
	document.write(`<h2>${number} × ${i} = ${number*i}</h2>`)
}*/

/*let number = +prompt('Введите число:');
let str = ""
for(let i=-number; i<=number; i++) {
	if (Math.abs(i)>5){
	str+=i+"  ";}
}
document.write(str)*/

/*let letters = "ЫгВЫоЯСремДШНККАыкЩЙФа";
let arr = letters.split("");
let str = "";
for(let i=0; i<arr.length; i++) {
	if(arr[i]!=arr[i].toUpperCase()) {
		str+=arr[i];
	}
}
document.write(str)*/

/*let abc = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
let def = "ГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯАБВ";
let user1  = prompt('Введите слово:');
let out = "";
let user = user1.toUpperCase();
for(let i = 0; i < user.length; i++) {
	out+=def[abc.indexOf(user[i])]
}
document.write(out)*/

/*for(let i = 0; i<4; i++) {
	for (let f=0; f<4; f++) {
		document.write("#&nbsp")
	};
	
	document.write('<br>')

	for (let j=0; j<4; j++) {
		document.write("&nbsp#")
	};
	document.write('<br>')
}*/

/*let str=""
let user = +prompt("Введите число:")
for(let i = user; i>0; i=Math.floor(i/2)) {
	str+=(i%2)
}
let s = "";

for(let j = str.length; j>0; j--) {
	s+=str[j-1]
}
document.write(s)*/

/*let user = +prompt('Введите число:')
let str="";
var j = 1;
for(let i=1; i < user; i++){	
	str+=i;
	
	if(j == str.length) {
		document.write(str)
		document.write('<br>')
		str = ""
		j++
	}
	
}*/

/*let arr = [1, 2 , 3]
alert(arr)
console.log(arr)*/

/*let arr = [1, 2, 3]
alert(arr[0])
alert(arr[1])
alert(arr[2])*/

/*let arr = ['a', 'b', 'c', 'd']
alert(arr[0]+"+"+arr[1]+"+"+arr[2]+"+"+arr[3])*/

/*let arr = [1, 2, 3]
alert(arr[0]+arr[1]+arr[2])*/

/*let arr = [2, 5, 3, 9]
let result = arr[0]*arr[1]+arr[2]*arr[3];
alert(result)*/

/*let arr = ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
alert(arr.length)*/

/*let arr = ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
alert(arr[arr.length - 1])*/

/*let arr = ['a', 'b', 'c']
arr[0] = 1
arr[1] = 2
arr[2] = 3
alert(arr)*/

/*let arr = [1, 2, 3]
arr[0] = arr[0] + 3
arr[1] = arr[1] + 3
arr[2] = arr[2] + 3
alert(arr)*/

/*let arr = [1, 2, 3]
arr.push(4, 5, 6)
alert(arr)*/

/*let arr = [1, 2, 3]
arr.unshift(4, 5, 6)
alert(arr)*/

/*let arr = [1, 2, 3, 4, 5]
let sub = arr.slice(0, 3)
alert(sub)*/

/*let arr = [1, 2, 3, 4, 5]
let sub = arr.slice(3)
alert(sub)*/

/*let arr = [1, 2, 3, 4, 5]
arr.splice(1, 2)
alert(arr)*/

/*let arr = [1, 2, 3, 4, 5]
let sub = arr.splice(1, 3)
alert(sub)*/

/*let arr = [1, 2, 3, 4, 5]
arr.splice(3, 0, "a", "b", "c")
alert(arr)*/

/*let arr = [1, 2, 3, 4, 5]
arr.splice(1, 0, "a", "b")
arr.splice(6, 0, "c")
arr.splice(8, 0, "e")
alert(arr)*/

/*let arr = [1, 2, 3, 4, 5]
if(arr.indexOf(3) == -1) {
	alert("Нет")
}
else {
	alert("Да")
}*/

/*let str5 = [prompt(), prompt(), prompt(), prompt(), prompt()];
let stats = [0, 0, 0];
for (let i = 0; i < 5;i++) {
	if (str5[i] < 10) {
		stats[0]++
	}
	if (str[i] > 9 && str[i] < 100) {
		stats[1]++
	}
	if (str[i] > 99 && str[i] < 1000) {
		stats[1]++
}*/

/*let arr = [23, 45, 12, -5656, 903]
let result = arr.every(function(elem) {
	if (elem > 0) {
		return true;
	} else {
		return false;
	}
})
console.log(result)*/

/*let arr = [1, 2, 1, 5, 4]
let result = arr.every(function(elem) {
	if (elem * arr.indexOf(elem) < 30) {
		return true;
	} else {
		return false;
	}
})
console.log(result)*/

/*let arr = [-2, -4, -6, 11];

let result = arr.some((elem, index) => elem*index > 30);
console.log(result);*/

/*let arr = ['a', 'b', 'c', 'd', 'e'];

for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}*/

/*let arr = [1, 2, 3, 4, 5];
		
for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}*/

/*let arr = [1, 2, 3, 4, 5];
		
for (let i = 0; i < arr.length; i++) {
	if (arr[i] % 2 > 0) {
	console.log(arr[i]);
}
}*/

/*let result = 0;
let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
	result += Math.pow(arr[i], 2);
}

console.log(result);*/

/*let arr = [2, 5, 9, 15, 1, 4];
		
for (let i = 0; i < arr.length; i++) {
	if (arr[i] > 3 && arr[i] < 10) {
	console.log(arr[i]);
}
}*/

/*let result = 0;
let arr = [1, -2, 3, -4, 5];

for (let i = 0; i < arr.length; i++) {
	if (arr[i] > 0)
	result += arr[i];
}

console.log(result);*/

/*let result = 0;
let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
	result += arr[i];
}

console.log(result/arr.length);*/

/*let arr = [10, 20, 30, 50, 235, 3000]
for(let i=0;i<arr.length;i++) {
	let str=String(arr[i])
	if(str[0]==1 || str[0]==2 || str[0]==5) {
		console.log(arr[i])
	}
}*/

/*let arr = [1, 2, 3, 4, 5, 6, 7]
for(let i = arr.length - 1; i >= 0; i--) {
	console.log(arr[i])
}*/

/*let arr = [0, 1, 2, 7, 8, 5, 6, 7]
for(i = 0; i<arr.length; i++) {
	if (i == arr[i]) {
		console.log(arr[i])
	}
}*/

/*let arr = [0, 1, 2, 7, 8, 5, 6, 7]
for(i = 0; i<arr.length; i++) {
	document.write(arr[i] + "<br>")
}*/

/*let arr = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"]
for(i = 0; i<arr.length; i++) {
	if (i == 5 || i == 6) {
		document.write("<b>" + arr[i] + "</b><br>")
	}
	else {
		document.write(arr[i] + "<br>")
	}
}*/

/*let arr = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"]
let day = 0
for(i = 0; i<arr.length; i++) {
	if (i == day) {
		document.write("<i>" + arr[i] + "</i><br>")
	}
	else {
		document.write(arr[i] + "<br>")
	}
}*/

/*let arr = [1, 2, 3, 4, 5];
let result = 0;
arr.forEach(function(elem) {
	result += Math.pow(elem, 2);
});
console.log(result);*/

/*let arr = [1, -2, 3, -4, 5];
let result = arr.filter(function(elem) {
	return elem >= 0;
});
console.log(result)*/

/*let arr = [1, -2, 3, -4, 5];
let result = arr.filter(function(elem) {
	return elem <= 0;
});
console.log(result)*/

/*let arr = [10, -2, 3, -40, 50];
let result = arr.filter(function(elem) {
	return elem >= 0 && elem < 10;
});
console.log(result)*/

/*let arr = ["abcdef","abcd","fghiklmn"];
let result = arr.filter(function(elem) {
	return elem.length  >= 5;
});
console.log(result)*/

/*let arr = [10, -2, 3, -40, 50];
let result = arr.filter(function(elem, index) {
	return elem*index < 30;
});
console.log(result)*/

/*let arr = [1, 2, -3, 4, -5];

let filtered = arr.filter(elem => elem < 0);
console.log( filtered.length );*/

/*let arr = [1, 2, [3, 4], 5, [6, 7]];
let result = arr.filter(function(elem){
	return !Array.isArray(elem)
})
console.log(result)*/

/*let arr = [1, 4, 9, 16, 25];
let result = arr.map(function(elem) {
	return Math.sqrt(elem);
});
console.log(result);*/

/*let arr = [1, 4, 9, 16, 25];
let result = arr.map(function(elem) {
	return elem + "!";
});
console.log(result);*/





/*let n = +prompt("Введите количество елементов:");
let arr = [];
for(let i = 0; i < n; i++) {
	arr.push(Math.floor(Math.random()*200-100))
}

for(let i = 0; i < arr.length; i++) {
	if(i%3==2) {
		document.write('<strong>'+ arr[i]+'</strong>' + ',')
	}
	else {document.write(arr[i]+',')}
}*/

/*let n = +prompt("Введите количество елементов:");
let arr = [];
for(let i = 0; i < n; i++) {
	arr.push(Math.floor(Math.random()*200-100))
}

for(let i = 0; i < arr.length; i++) {
	if(i%3==2 && arr[i]%3==0) {
		document.write('<strong><font color="green">'+ arr[i]+'</font></strong>' + ',')
	}
	else {
		if (i%3==2) {
			document.write('<strong>'+ arr[i]+'</strong>' + ',')
		}
		else{
			if(arr[i]%3==0) {
		document.write('<font color="green">'+ arr[i]+'</font>' + ',')
			}
			else{document.write(arr[i]+',')}
		}
	}	
}*/

/*let n = +prompt("Введите количество елементов:");
let arr = [];
for(let i = 0; i < n; i++) {
	arr.push(Math.floor(Math.random()*200-100))
}
let max = 0;
for(let i = 0; i < arr.length; i++) {
	if (arr[i] > max) {
		max = arr[i]
	}
}
for(let i = 0; i < arr.length; i++) {
	if (arr[i] == max) {
		document.write('<font color="red">'+ arr[i]+'</font>' + ',')
	}
	else {
		document.write(arr[i]+',')
	}
}*/

/*let n = +prompt("Введите количество елементов:");
let arr = [];
for(let i = 0; i < n; i++) {
	arr.push(Math.floor(Math.random()*200-100))
}

for(let i = 0; i < arr.length; i++) {
	if (arr[i] < 0) {
		document.write('<u>'+ arr[i]+'</u>' + ',')
	}
	else {
		document.write(arr[i]+',')
	}
}*/

/*let n = +prompt("Введите количество елементов:");
let arr = [];
for(let i = 0; i < n; i++) {
	arr.push(Math.floor(Math.random()*200-100))
}

for(let i = 0; i < arr.length; i++) {
	if (arr[i] < 10 && arr[i] > -10) {
		document.write('<font color="red">'+ arr[i]+'</font>' + ',')
	}
	else {
		document.write(arr[i]+',')
	}
}*/

/*let arr = ["яблоко", "груша", "персик", "ананас", "вишня", "киви", "манго", "киви", "киви", "киви", "киви"];
var len = arr.length;

for (var i = 0; i < len ; i++) {
	for(var j = 0 ; j < len - i - 1; j++){
		if (arr[j].length > arr[j + 1].length) {
			var temp = arr[j];
			arr[j] = arr[j+1];
			arr[j + 1] = temp;
		}
	}
}
for (let i = 0; i < arr.length; i++) {
	if (arr[i].length < 5) {
		arr.splice(i, 1)
	}
}
console.log(arr)*/

/*let arr = ["яблоко","hgh",'jdf','hgh', "груша", "персик", "ананас", "вишня", "киви", "манго", "киви","киви", "киви","киви", "киви"];
var len = arr.length;

for (var i = 0; i < len ; i++) {
	for(var j = 0 ; j < len - i - 1; j++){
		if (arr[j].length > arr[j + 1].length) {
			var temp = arr[j];
			arr[j] = arr[j+1];
			arr[j + 1] = temp;
		}
	}
}
let result=arr.filter(function(elem,i){

	return elem.length > 5
})
console.log(result)*/

/*let arr1 = ["яблоко", "груша", "персик", "ананас", "вишня", "киви", "манго"]
let arr2 = ["малина", "черника", "клубника", "виноград", "арбуз", "ежевика"]
const array3 = arr1.concat(arr2);
console.log(array3.sort())*/

/*let names = prompt("Введите имена гостей через запятую:");
let arrGuest=names.split(",");
console.log(arrGuest)
let result = []
for(let i = 0; i < arrGuest.length; i++) {
	let str = arrGuest[i];
	if (str[0] == "А" || str[0] == "Е" || str[0] == "Ё" || str[0] == "И" || str[0] == "О" || str[0] == "У" || str[0] == "Э" || str[0] == "Ю" || str[0] == "Я" || str[0] == "Ы") {
		result.push(arrGuest[i])
	}
}
console.log(result)*/

/*let arr = [
	['a', 'b', 'c'],
	['d', 'e', 'f'],
	['g', 'h', 'i'],
	['j', 'k', 'l'],
];
console.log(arr[3][2], arr[1][1], arr[2][0], arr[0][0], )*/

/*let arr = [[1, 2], [3, 4], [5, 6]]
console.log(arr[0][0] + arr[0][1] + arr[1][0] + arr[1][1] + arr[2][0] + arr[2][1])*/

/*let arr = [
	[
		[1, 2],
		[3, 4],
	],
	[
		[5, 6],
		[7, 8],
	],
];
console.log(arr[0][0][0] + arr[0][0][1] + arr[0][1][0] + arr[0][1][1] + arr[1][0][0] + arr[1][0][1] + arr[1][1][0] + arr[1][1][1])*/

/********let arr = [[1, 2, 3, [4, 5, [6, 7]]], [8, [9, 10]]];
console.log(arr[0][0]+arr[0][1]+arr[0][2]+arr[0][3][0]+arr[0][3][1]+arr[0][3][2][0]+arr[0][3][2][1]+arr[1][0]+arr[1][1][0]+arr[1][1][1])*/

/*let toy = {
	name: "игрушка",
	color: "разноцветная",
	age: "много",
}
toy.name = "какое нибудь другое"
delete toy.name
console.log(toy)*/

/*let day = {
	'1': "понедельник",
	'2': "вторник",
	'3': "Среда",
	'4': "Четверг",
	'5': "Пятница",
	'6': "Суббота",
	'7': "Воскресенье",
}
console.log(day['1'])
console.log(day[Math.floor(Math.random()*7+1)])*/

/*let person = {

"name": {

"ru": "Шамякин Иван Петрович",

},

"bio": [

{

"year": "1921",

"description": "родился в крестьянской семье",

"place": "д.Корма Гомельского уезда",

},

{

"year": "1936",

"description": "начало учебы",

"place": "Гомель"

}

],

"biblio": [

{

"year": "1949",

"work": "Глубокое течение",

},

{

"year": "1964",

"work": "Сердце на ладони",

}

]

}
console.log(person)
console.log(person.name.ru)
console.log("Год = " + person.bio[0].year)
console.log("Место = " + person.bio[1].place)
let obj = {
	1: person.biblio[1].year,
	2: person.biblio[1].work
}
console.log(obj)*/

/*let day = {
	'1': "понедельник",
	'2': "вторник",
	'3': "Среда",
	'4': "Четверг",
	'5': "Пятница",
	'6': "Суббота",
	'7': "Воскресенье",
}
let i = 0
for (let key in day){
i++
console.log('Ключ: ' + key + ', значение: ' + day[key]);
}
console.log(i)*/

/*let max = ""
let i = 0
let people = {
Маша: 15,

Саша: 22,

Петя: 16,

Даша: 23
}
for(let key in people) {
	i++
	if (people[key] > max) {
		max = people[key]
	}
}
for(let key in people){
if(people[key]==max){
console.log(key)
}
}
console.log(max)*/

/*let quotes = [
	{
		name: "Какой-то человек",
		quote: "Какая-то цитата"
	},
	{
		name: "Другой какой-то человек",
		quote: "Другая какая-то цитата"
	},
	{
		name: "Еще какой-то человек",
		quote: "Еще какая-то цитата"
	},
];
function getQuote() {
	let random_index = Math.floor(Math.random()*3)
	let random_quote = quotes[random_index].quote + " - " + quotes[random_index].name
	alert(random_quote)
}*/

/*let catalog = {
	1: {
		name: "Какой-то фильм",
		actors: "Кто-то",
		year: 2000
	},

	2: {
		name: "Какой-то фильм2",
		actors: "Кто-то еще",
		year: 2001
	}
}

let ThirdMovie = {
	name: "Какой-то фильм3",
	actors: "Еще кто-то",
	year: 2002
}
catalog['3'] = ThirdMovie
let toyStory = catalog["movie1"];
for (let key in catalog) {
	console.log(catalog[key].name)
}
let user = +prompt("Введите номер фильма:")

for (let key in catalog[user])
	console.log(key + ": " + catalog[user][key])*/

/*let user = prompt("Введите год:")
if (user == catalog.movie1.year) {
	console.log(catalog.movie1)
}
else {
	if (user == catalog.movie2.year) {
	console.log(catalog.movie2)
	}

	else {
		console.log("Такого фильма нет")
	}
}*/

/*let myCrazyObject = {
    "name": "A ridiculous object",
    "some array": [7, 9, { purpose: "confusion", number: 123 }, 3.3],
    "random animal": "Banana Shark"
};
console.log(myCrazyObject["some array"][2]["number"])*/

/*let words = ["программа", "макака", "прекрасный", "оладушек"]
let word = words[Math.floor(Math.random() * words.length)]
let answerArray = []
for (i = 0; i < word.length; i++) {
	answerArray[i] = "_";
}
let remainingLetters = word.length;
var lives = 3;
let newword = remainingLetters;
while(remainingLetters > 0 && lives != 0) {
	alert(answerArray.join(" "))
	let guess = prompt("Угадайте букву, или нажмите Отмена для выхода из игры");
	if (guess == null || lives == 0) {
		break
	}
	else if(guess.length !== 1) {
		alert("Пожалуйста, введите одиночную букву");
	}

	else {
		guess = guess.toLowerCase()
		for(let j = 0; j < word.length; j++) {
			if(answerArray[j] === guess) {
				alert("Такая буква уже была введена");
				break;
			}
			if(word[j] == guess) {
				answerArray[j] = guess;
				remainingLetters--
			}
		}
		
	}
	if (remainingLetters === newword) {
        lives--;            
    }
newword=remainingLetters
}
alert("Было загадано слово " + word)*/

/*function func() {
	alert("мое имя")
}
func()*/

/*function func() {
	let o = 0
	for(let i = 0; i <= 100; i++) {
		o+=i
	}
	alert(o)
}
func()*/

/*function func(num) {
	return num * num * num;
}

alert(func(3));*/

/*function func(num) {
	return Math.sqrt(num);
}

alert(func(3) + func(4));*/

/*function sqrt(num) {
	return Math.sqrt(num);
}

function round(num) {
	return num.toFixed(3);
}
alert(round(sqrt(2)))*/

/*function sqrt(num) {
	return Math.sqrt(num);
}

function sum(num1, num2, num3) {
	return num1 + num2 + num3;
}
alert(sum(sqrt(2), sqrt(3), sqrt(4)))*/

/*function sqrt(num) {
	return Math.sqrt(num);
}

function sum(num1, num2, num3) {
	return num1 + num2 + num3;
}

function round(num) {
	return num.toFixed(3);
}
alert(round(sum(sqrt(2), sqrt(3), sqrt(4) )))*/

/*function func(num) {
	let i = 0;
	while(true) {
		num/=2;
		
		if (num < 10) {
			return i
		}

		i++
	}
}
alert(func(22))*/

/*function func(num1, num2) {
	let result;
	
	if (num1 > 0 && num2 > 0) {
		result = num1 * num2;
	} else {
		result = num1 - num2;
	}
	
	return result;
}

alert(func(3, 4));*/

/*let arr = [1, 2, 3, 4]
function sqrtsum(arr) {
	let sqrtsum = 0;
	for(let elem of arr) {
		sqrtsum+=elem*elem;
	}
	return sqrtsum
}
alert(sqrtsum(arr))*/

/*function getDigitsSum(num) {
	num = String(num)
	let sum = 0;
	for(let i = 0; i < num.length; i++) {
		sum+=Number(num[i])
	}
	return sum
}
alert(getDigitsSum(111122))*/

/*function getDivisors(num) {
	let arr = [];
	for(let i = 0; i <= num; i++) {
		if (num % i == 0) {
			arr+= i+", "
		}
	}
	return arr
}
console.log(getDivisors(24))*/

/*function reverseStr(str) {
	let str1 = String(str)
	return str1.split("").reverse().join("")
}
alert(reverseStr("abcde"))*/

/*function delElem(num, arr) {
	for(let i = 0; i < arr.length; i++) {
		if (arr[i] == num) {
			arr.splice(i, 1)
		}
	}
	return arr
}
alert(delElem("a", ["v", "a", "c", 4, "a"]))*/

/*function func(num) {
	let arr = [];
	for(let i = 1; i <= num; i++) {
		arr+=i
	}
	return arr
}
alert(func(2))*/

/*function func(num1, num2) {
	let arr = [];
	for(let i = num1; i <= num2; i++) {
		arr+=i
	}
	return arr
}
alert(func(3, 8))*/

/*function func(num) {
	if (num > 0) {
		return true
	}
	else {
		return false
	}
}
alert(func(-1))*/

/*function func(str) {
	let str1 = String(str)
	if (str1 == str1.split("").reverse().join("")) {
		return true
	}
	else {
		return false
	}
}
alert(func(""))*/

/*function func(num1) {
	let num2 = 0 - num1;
	let arr = []
	for(let i = num1; i <= num2; i+=2) {
		arr+=i
	}
	for(let i = num1; i >= num2; i-=2) {
		arr+=i
	}
	return arr
}
alert(func(-5))*/

/*function func(type, num1, num2) {
	let result = 0;
	if (type == 4) {
		result = num1*num2
	}
	else if(type == 3) {
		result = num1*num2/2
	}
	else if(type == 0) {
		result = num1*num1*3.14
	}
	else {
		result = "??"
	}
	return result
}
alert(func(0, 3))*/

/*function calc(num1, num2, type) {
	let result = 0;
	if (type == "+") {
		result = num1+num2
	}
	else if(type == "-") {
		result = num1-num2
	}
	else if(type == "*") {
		result = num1*num2
	}
	else if(type == "/") {
		result = num1/num2
	}
	else {
		result = "??"
	}
	return result
}
alert(calc(22, 11, "/"))*/

/*function func(num1, num2) {
	let result = 0;
	if(num1 == num2) {
		result = "="
	}
	if(num1>num2) {
		result = num1
	}
	if(num1<num2) {
		result = num2
	}
	return result
}
alert(func(5, 3))*/

/*function func(str) {
	let result = "";
	let arr = str.split("")
	let letters = 0;
	let digits = 0;
	let other = 0;
	for(let i = 0; i<arr.length; i++) {
		if(arr[i] >= "a" && arr[i] <= "z") {
			letters++
		}
		else if(arr[i] == " ") {
			other++
		}
		else if(arr[i] >= 0 && arr[i] <= 9) {
			digits++
		}
		else{
			other++
		}
	}
	result = "letters: " + letters + "; digits: " + digits + "; other: " + other
	return result
}
alert(func("1 2 3 1 3 kff"))*/

/*function func(arr) {
	let result = 0
	for(let i = 0; i<arr.length; i++) {
		result+=arr[i]
	}
	result = result/arr.length
	return result
}
alert(func([1, 2, -3, 4]))*/

/*function sort(arr) {
	for(let i = 0; i<arr.length; i++) {
		for(let n = 0; n<arr.length - 1 - i; n++) {
			if (arr[n]<arr[n+1]){
				let k = arr[n+1]
				arr[n+1] = arr[n]
				arr[n] = k;
			}
		}
	}
	return arr
}
alert(sort([1, 2, 3, 4]))*/

/*function func(num) {
	let str = String(num);
	let result = str.length
	if (str[0] == "-") {
		result--
	}
	return result
}
alert(func(-1000))*/

/*function reverse(str) {
	let result = ""
	let arr = str.split(" ")
	result = arr.reverse().join(" ")
	return result
}
alert(reverse(""))*/

/*function func(num, vall1, vall2) {
	if (vall1 == "hrn" && vall2 == "doll") {
		return num/28
	}
	if (vall1 == "hrn" && vall2 == "zl") {
		return num/7
	}
	if (vall1 == "hrn" && vall2 == "eur") {
		return num/30
	}


	if (vall1 == "doll" && vall2 == "hrn") {
		return num*28
	}
	if (vall1 == "doll" && vall2 == "zl") {
		return num*4
	}
	if (vall1 == "doll" && vall2 == "eur") {
		return num/1.18
	}


	if (vall1 == "zl" && vall2 == "doll") {
		return num/4
	}
	if (vall1 == "zl" && vall2 == "hrn") {
		return num*7
	}
	if (vall1 == "zl" && vall2 == "eur") {
		return num/5
	}

	if (vall1 == "eur" && vall2 == "doll") {
		return num*1.18
	}
	if (vall1 == "eur" && vall2 == "zl") {
		return num*5
	}
	if (vall1 == "eur" && vall2 == "hrn") {
		return num*30
	}
}
console.log(func(14, "hrn", "zl"))HLKKNURK6VRU9AADV*/

/*function translate(str) {
	let rus1 = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ -,.";
	let rus = rus1.split("")
	let ang = ["A", "B", "V", "G", "D", "E", "E", "Zh", "Z", "I", "Y", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "F", "H", "C", "Ch", "Sh", "Sh'", "", "Y", "'", "E", "Yu", "Ya", " ", "-", ",", "."]
	let result = "";
	for(let i = 0; i < str.length; i++) {
		if (str[i] == str[i].toUpperCase()) {
			result+=ang[rus.indexOf(str[i])]
		}
		else {
			result+=ang[rus.indexOf(str[i].toUpperCase())].toLowerCase()
		}
	}
	return result
}
alert(translate("ПРивет Мир"))*/

/*let arr = ["1.jpeg", "2.jpg", "3.jpg", "4.jpg"]
let to = -1;
function right_arrow() {
	let obj = document.getElementById("img")
	if(to < arr.length-1) to++
	else 
		to = 0
		obj.src = arr[to]
	
}
function left_arrow() {
	let obj = document.getElementById("img")
	if(to > 0) to--
		else 
			to = arr.length-1
			obj.src = arr[to]
		
}*/

/*let button = document.querySelector("#button")
let body = document.querySelector('body')
let span = document.querySelector('span')
const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

button.addEventListener('click', function() {
let colour = "#"
for(let i = 0; i<6; i++) {
	let num = Math.floor(Math.random()*colors.length)
	colour+=colors[num]
}
span.innerHTML = colour
console.log(colour)
body.style.backgroundColor = colour
})*/

/*let elem = document.querySelector('#elem')
let button1 = document.querySelector("#button1")
let button2 = document.querySelector("#button2")
let button3 = document.querySelector("#button3")
button1.addEventListener('click', function() {
	elem.classList.toggle('u')
})
button2.addEventListener('click', function() {
	elem.classList.toggle('b')
})
button3.addEventListener('click', function() {
	elem.classList.toggle('r')
})*/

/*const cards = document.querySelectorAll('.memory-card')
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
function flipCard() {
	if(lockBoard) return;
	if(this === firstCard) return;
	this.classList.add('flip');
	if(!hasFlippedCard) {
		hasFlippedCard = true;
		firstCard = this;
		return;
	}
	secondCard = this
	hasFlippedCard = false
	chekForMatch()

}
cards.forEach(card => card.addEventListener('click', flipCard))

function chekForMatch() {
	let isMatch = firstCard.dataset.memory=== secondCard.dataset.memory;
	isMatch ? disableCards() : unflipCards();
}

function disableCards() {
	firstCard.removeEventListener('click', flipCard);
	secondCard.removeEventListener('click', flipCard)
	resetBoard();
}

function unflipCards() {
	lockBoard = true;
	setTimeout(() => {
		firstCard.classList.remove('flip');
		secondCard.classList.remove('flip')
		resetBoard();
	}, 1500)
}


function resetBoard() {
	[hasFlippedCard, lockBoard] = [false, false]
	[firstCard, secondCard] = [null, null]
}

(function shuffle() {
	cards.forEach(card => {
		let randomPos = Math.floor(Math.random()*12)
		card.style.order = randomPos;
	});
})()*/

/*let ul = document.querySelector('ul');

ul.addEventListener('click', function (event) {
if (event.target.tagName == 'UL') {
event.target.innerHTML += '<li>text</li>';
}

if (event.target.tagName == 'LI') {
event.target.innerHTML += '!';
}
});*/

/*let input = document.querySelector('#input')
input.addEventListener('click', function(){
for(let i = 0; i<3; i++) {
	let tr = document.createElement('tr');
	table.append(tr);
	for(let y = 0; y < 3; y++) {
		let td = document.createElement('td')
		td.insertAdjacentHTML("beforeend", "<img src='2.jpg' width='50px'>")
		tr.append(td)
		td.addEventListener('click', function() {
			td.innerHTML = ""
			td.insertAdjacentHTML("beforeend", "<img src='3.jpg' width='50px'>")
		})
		setTimeout(() => tr.remove(), 5000);
	}
}
})*/

/*const imgDom = document.querySelector('#map')
const distanceDom = document.querySelector('#distance')
let getRandomNumber = function(size) {
	return Math.floor(Math.random() * size)
}
let width = 400
let height = 400
let clicks = 0
let target = {x: getRandomNumber(width), y: getRandomNumber(height)}
imgDom.addEventListener("click", function(event){
clicks++
let getDistance = function(event, target) {
	let diffX = event.offsetX - target.x;
	let diffY = event.offsetY - target.y;
	return Math.sqrt( (diffX * diffX) + (diffY * diffY) )
}
let getDistanceHint = function(distance){
	if(distance < 18) {
		return "Обожжешься!";
	}
	else if(distance < 28){
		return "Очень горячо!";
	}
	else if(distance < 48){
		return "Горячо!";
	}
	else if(distance < 80){
		return "Тепло!";
	}
	else if(distance < 168){
		return "Холодно!";
	}
	else if(distance < 328){
		return "Очень холодно!";
	}
	else {
		return "Замерзнешь!";
	}
}
let distance = getDistance(event, target)
let distanceHint = getDistanceHint(distance)
distanceDom.innerHTML = distanceHint



if(distance <= 8) {
	alert("Клад найден! Сделано кликов: " + clicks)
}
})*/

/*let button = document.querySelector("#button")
button.addEventListener('click', function(event){
	if(event.ctrlKey) {
		button.style.backgroundColor = "red"
	}
})*/

/*const sidebarToggleBtn = document.querySelector('.menu-icon-wrapper')
const menuIcon = document.querySelector('.menu-icon')
sidebarToggleBtn.onclick = function() {
	menuIcon.classList.toggle('menu-icon-active')
}
const sidebar = document.querySelector('.sidebar')
sidebarToggleBtn.onclick = function() {
	menuIcon.classList.toggle('menu-icon-active')
	sidebar.classList.toggle('sidebar--mobile-active')
}
const btnShowMoreCard = document.querySelector('.btn-more')
const hiddenCards = document.querySelectorAll('.card-link--hidden')
btnShowMoreCard.addEventListener('click', function(){
	hiddenCards.forEach(function(card){
		card.classList.remove('card-link--hidden')
	})
})
const widgets = document.querySelectorAll('.widget')
widgets.forEach(function(widgets){
	widgets.addEventListener('click', function(e){
		if(e.target.classList.contains('widget__title')) {
			e.target.classList.toggle('widget__title--active')
			e.target.nextElementSibling.classList.toggle('widget__body--hidden')
		}
	})
})
const checkBoxAny = document.querySelector('#location-05')
const topLocationCheckboxes = document.querySelectorAll('[data-location-param]')
checkBoxAny.addEventListener('change', function(){
	if(checkBoxAny.checked) {
		topLocationCheckboxes.forEach(function(item) {
			item.cheked = false;
		})
	}
})
topLocationCheckboxes.forEach(function(item) {
	item.addEventListener('change', function() {
		if (checkBoxAny.checked) {
			checkBoxAny.checked = false;
		}
	})
})
const showMoreOptions = document.querySelector('.widget__show-hidden')
const hiddenCheckBoxes = document.querySelectorAll('.checkbox--hidden')
showMoreOptions.onclick = function(e) {
	e.preventDefault();
	if (showMoreOptions.dataset.options == "hidden") {
		hiddenCheckBoxes.forEach(function(item){
			item.style.display = "block";
		})
		showMoreOptions.innerText = "Скрыть дополнительные опции";
		showMoreOptions.dataset.options = "visible"
	}
	else if (showMoreOptions.dataset.options == "visible") {
		hiddenCheckBoxes.forEach(function(item){
			item.style.display = "none";
		})
		showMoreOptions.innerText = "Показать еще";
		showMoreOptions.dataset.options = "hidden"
	}
}*/


/*let todo_data

if (localStorage.todo_saved){
	todo_data = JSON.parse(localStorage.todo_saved)
}
else {
	todo_data = []
}

const todo_control = document.querySelector('.todo-control')
const header_input = document.querySelector('.header-input')
const todo_list = document.querySelector('.todo-list')
const todo_completed = document.querySelector('#completed')

let addToDo = function() {
	todo_list.innerHTML = '';
    todo_completed.textContent = '';

	todo_data.forEach(function(item, i, arr) {
		let li = document.createElement('li')
		li.classList.add('todo-item')
		li.innerHTML = `<span class="text-todo">${item.value}</span>
		<div class="todo-buttons">
		<button class='todo-remove'></butoon>
		<button class='todo_complete' id="complete"></button>
		</div>`
	if(item.completed == true) {
		todo_completed.append(li)
	}else{
		todo_list.append(li)
	}
	const btn_todo_complete = li.querySelector('#complete')
		btn_todo_complete.addEventListener('click', function(){
			item.completed = !item.completed 
			addToDo()
		})
	
	const btn_todo_remove = li.querySelector('.todo-remove')
		btn_todo_remove.addEventListener('click', function(){
			arr.splice(i, 1)
			addToDo()
		})
	})
	localStorage.todo_saved = JSON.stringify(todo_data)
}

addToDo()

todo_control.addEventListener('submit', function(esvent) {
if(header_input.value !== "") {
let new_todo = 
{
	value: header_input.value ,
	completed: false
}
todo_data.push(new_todo)
header_input.value = ""
addToDo()
event.preventDefault()
}

})*/

/*arr=[-1, 2, -3, 4, 10]
let result = arr.filter(function(elem,i) {
	return elem*i<30
})
console.log(result)*/

/*var arr = [1, 2, 3, 4, 5]
let result = []
arr.reduce(function(total, current) {
	result.push(total);
    return total + current;
});
console.log(result);*/

/*window.addEventListener('click', function(event) {
    if (event.target.hasAttribute('data-action')) {
        // От кнопки, по которой кликнули, находим обертку текущего счетчика
        const counterWrapper = event.target.closest('.counter-wrapper');

        // От обертки счетчика находим div со значением счетчика
        const counter = counterWrapper.querySelector('[data-counter');

        if (event.target.dataset.action === 'plus') {
            // Изменяем счетчик, увеличивая его на 1
            counter.innerText = ++counter.innerText;
            if (event.target.closest('.cart-wrapper')) {
            	toggleCartStatus();
            }
		}

	 else if (event.target.dataset.action === 'minus') {
		
		if (event.target.closest('.cart-wrapper')) {
			if (parseInt(counter.innerText) > 1){
				counter.innerText = --counter.innerText;
			}
			else {
				event.target.closest('.cart-item').remove()
			}
			toggleCartStatus()
		}
		else {
			if (parseInt(counter.innerText) > 1){
				counter.innerText = --counter.innerText;
			}
		}
	}
}
})*/

/*let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let button = document.querySelector('#button')

let max;
let first;
let second;

button.addEventListener('click', function(){
if(Number(a.value) > Number(b.value) && Number(a.value) > Number(c.value)) {
	max = Number(a.value)
	first = Number(b.value)
	second = Number(c.value)
}
else if(Number(b.value) > Number(a.value) && Number(b.value) > Number(c.value)) {
	max = Number(b.value)
	first = Number(a.value)
	second = Number(c.value)
}
else if(Number(c.value) > Number(a.value) && Number(c.value) > Number(b.value)) {
	max = Number(c.value)
	first = Number(a.value)
	second = Number(b.value)
}
else {alert('(((')}

console.log(max)
console.log(first)
console.log(second)

if(Math.pow(max, 2)==Math.pow(first, 2)+Math.pow(second, 2)) {
	alert('true')
}
else{
	alert('false')
}
})*/

/*let canvas = document.querySelector('#canvas')
var ctx = canvas.getContext('2d')
for(var i = 1; i<=7; i++) {
	ctx.moveTo(10, 15*i)
	ctx.lineTo(110, 15*i)
	ctx.moveTo(15*i, 10)
	ctx.lineTo(15*i, 110)
}
ctx.stroke()*/

/*function Person(first, last, age, eye) {
  	this.firstName = first;
 	 this.lastName = last;
 	 this.age = age;
  	this.eyeColor = eye;}
let Vasya = new Person(1, 2, 3, "blue")
let Petya = new Person(2, 3, 4, "green")
console.log(Vasya, Petya)*/

/*function Car(name, model, weight, color){
	this.name = name;
	this.model = model;
	this.weight = weight;
	this.color = color
}
let raptor = new Car("Ford", "Raptor", "2500kg", "Blue")
let mustang = new Car("Ford", "Mustang", "1700kg", "Red")
console.log(raptor, mustang)*/

/*class Hero {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }
 win() {
      console.log("WINNER!!");
  }
 def() {
      console.log("DEFEATED!");
  }
}

let Mario = new Hero("Mario", 2)
Mario.win()*/

/*class Calculator {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
 plus() {
      console.log(this.first + this.second);
  }
 minus() {
      console.log(this.first - this.second);
  }
}
let nums = new Calculator(12, 2)
nums.minus()*/

/*class Student {
	constructor(name, surname, year) {
		this.name = name;
		this.surname = surname;
		this.year = year
	}
	getFullName() {
		console.log(this.name + " " + this.surname)
	}
	getCourses() {
		console.log(2021 - this.year)
	}
}
var student = new Student("Иван", "Иванов", 2019)
console.log(student.getCourses())*/

/*let canvas = document.getElementById('canvas')
let ctx = canvas.getContext("2d")
let width = canvas.width
let height = canvas.height
let blockSize = 10;
let widthInBlocks = width / blockSize
let heightInBlocks = height / blockSize
let score = 0;
let drawBorder = function () {
	ctx.fillStyle = "Gray"
	ctx.fillRect(0, 0, width, blockSize);
	ctx.fillRect(0, height - blockSize, width, blockSize);
	ctx.fillRect(0, 0, blockSize, height)
	ctx.fillRect(width - blockSize, 0, blockSize, height)
}
let drawScore = function () {
	ctx.font = "20px Courier";
	ctx.fillStyle = "Black";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Счет: " + score, blockSize, blockSize)
}

let gameOver = function () {
	clearInterval(intervalId)
	ctx.font = "60px Courier";
	ctx.fillStyle = "Black";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.fillText("Конец игры", width / 2, height / 2)
}


let Block = function (col, row) {
	this.col = col
	this.row = row
}
const sampleBlock = new Block(5, 5)
Block.prototype.drawSquare = function () {
	let x = this.col * blockSize
	let y = this.row * blockSize
	let colors = ["Red", "Blue", "Green", "Yellow", "Purple", "LightBlue", "Orange", "LightGreen"]
	let randomcolor = Math.floor(Math.random()*8)
	ctx.fillStyle = colors[randomcolor]
	ctx.fillRect(x, y, blockSize, blockSize)
}
Block.prototype.drawCircle = function (color) {
	let centerX = this.col * blockSize + blockSize/2
	let centerY = this.row * blockSize + blockSize/2
	ctx.fillStyle = color
	circle(centerX, centerY, blockSize/2, true)
}
let circle = function (x, y, radius, fillCircle) {
	ctx.beginPath()
	ctx.arc(x, y, radius, 0, Math.PI * 2, false)
	if (fillCircle) {
		ctx.fill()
	} else {
		ctx.stroke()
	}
}
Block.prototype.equal = function (otherBlock) {
	return this.col === otherBlock.col && this.row === otherBlock.row
}
let Snake = function () {
	this.segments = [new Block(7, 5), new Block(6, 5), new Block(5, 5)]
	this.direction = "right"
	this.nextDirection = "right"
}
Snake.prototype.draw = function () {
	for (let i = 0; i < this.segments.length; i++) {
		this.segments[i].drawSquare('Blue')
	}
}
let Apple = function () {
	this.position = new Block(10, 10)
}
const snake = new Snake()
let apple = new Apple();
let intervalId = setInterval(function () {
	ctx.clearRect(0, 0, width, height);
	drawScore()
	snake.move()
	snake.draw()
	apple.draw()
	drawBorder()
}, 200)
snake.draw()
Snake.prototype.move = function () {
	let head = this.segments[0]
	let newHead
	this.direction = this.nextDirection
	if (this.direction === "right") {
		newHead = new Block(head.col + 1, head.row)
	} else if (this.direction === "down") {
		newHead = new Block(head.col, head.row + 1)
	} else if (this.direction === "left") {
		newHead = new Block(head.col - 1, head.row)
	} else if (this.direction === "up") {
		newHead = new Block(head.col, head.row - 1)
	}
	if (this.checkCollision(newHead)) {
		gameOver()
		return
	}
	this.segments.unshift(newHead)
	if (newHead.equal(apple.position)) {
		score++
		apple.move()
	} else {
		this.segments.pop()
	}
}
Snake.prototype.checkCollision = function (head) {
	let leftCollision = (head.col === 0)
	let topCollision = (head.row === 0)
	let rightCollision = (head.col === widthInBlocks - 1)
	let bottomCollision = (head.row === heightInBlocks - 1)
	let wallCollision = leftCollision || topCollision || rightCollision || bottomCollision
	let selfCollision = false
	for (let i = 0; i < this.segments.length; i++) {
		if (head.equal(this.segments[i])) {
			selfCollision = true
		}
	}
	return wallCollision || selfCollision
}
let directions = {37: "left", 38: "up", 39: "right", 40: "down"}

const body = document.querySelector('body')
body.addEventListener('keydown', function (event) {
	let newDirection = directions[event.keyCode];
	if (newDirection !== undefined) {
		snake.setDirection(newDirection)
	}
})

Snake.prototype.setDirection = function (newDirection) {
	if (this.direction === "up" && newDirection === "down") {
		return;
	} else if (this.direction === "right" && newDirection === "left") {
		return;
	} else if (this.direction === "down" && newDirection === "up") {
		return;
	} else if (this.direction === "left" && newDirection === "right") {
		return;
	}
	this.nextDirection = newDirection
}

Apple.prototype.draw = function () {
	this.position.drawCircle("LimeGreen")
}
Apple.prototype.move = function () {
	let randomCol = Math.floor(Math.random() * (widthInBlocks - 2)) + 1;
	let randomRow = Math.floor(Math.random() * (heightInBlocks - 2)) + 1;
	this.position = new Block(randomCol, randomRow)
}*/

let canvas = document.getElementById('canvas')
let ctx = canvas.getContext("2d")

function MainLoop(time) {
	requestAnimationFrame(MainLoop)
}
let art = new Image()
art.onload = function() {
	requestAnimationFrame(MainLoop)
}
art.src = "art.png"
resizeCanvas()
function resizeCanvas() {
	canvas.width = window.innerWidth - 40
}
function Animation(rate) {
	this.LastTime = 0;
	this.Rate = rate;
	this.update = function () {};
	this.render = function () {}
}
Animation.prototype.run = function(time) {
	if((time - this.LastTime) > this.Rate) {
		this.LastTime = time;
		this.update()
	}
	this.render();
}
let layer1 = new Animation(30)
layer1.sx = 0;
layer1.sy = 0;
layer1.w = 1024;
layer1.h = 600;
layer1.render = function() {
	let x = 0;
	let screen_w = canvas.width;
	while(x < screen_w) {
		let draw_w = Math.min(this.w, screen_w-x)
		ctx.drawImage(art, this.sx, this.sy, draw_w, this.h, x,0, draw_w, this.h)
		x+= this.w;
	}
	ctx.drawImage(art, 1024, 0,300,300,100,0,300,300)
}

function MainLoop(time) {
	layer1.run(time)
	layer2.run(time)
	layer3.run(time)
	layer4.run(time)
	layer5.run(time)
	ded_moroz.run(time)
	requestAnimationFrame(MainLoop)
}

var layer2 = new Animation(30)
layer2.sx = 0;
layer2.sy = 600;
layer2.w = 1664;
layer2.h = 600;
layer2.dx = 0;
layer2.speed = 1;
layer2.update = function () {
	this.dx += this.speed;
	if(this.dx > this.w) {
		this.dx -= this.w
	}
}
layer2.render = function() {
	let x = 0;
	let screen_w = canvas.width;
	if ((this.w - this.dx) > 0) {
		ctx.drawImage(art, this.sx + this.dx, this.sy, this.w - this.dx, this.h, x, 0, this.w - this.dx, this.h)
		x+= this.w - this.dx
	}
	while(x < screen_w) {
		let draw_w = Math.min(this.w, screen_w-x)
		ctx.drawImage(art, this.sx, this.sy, draw_w, this.h, x,0, draw_w, this.h)
		x+= this.w;
	}
	ctx.drawImage(art, 1024, 0,300,300,100,0,300,300)
}
var layer3 = new Animation(30)
layer3.sx = 0;
layer3.sy = 1200;
layer3.w = 1664;
layer3.h = 600;
layer3.dx = 0;
layer3.speed = 3;
layer3.update = layer2.update
layer3.render = layer2.render

var layer4 = new Animation(30)
layer4.sx = 0;
layer4.sy = 1800;
layer4.w = 1664;
layer4.h = 600;
layer4.dx = 0;
layer4.speed = 6;
layer4.update = layer2.update
layer4.render = layer2.render

var layer5 = new Animation(30)
layer5.sx = 0;
layer5.sy = 2400;
layer5.w = 1664;
layer5.h = 600;
layer5.dx = 0;
layer5.speed = 10;
layer5.update = layer2.update
layer5.render = layer2.render

let ded_moroz = new Animation(50)
ded_moroz.frame_num = 0;
ded_moroz.update = function() {
	this.frame_num++;
	if (this.frame_num > 15) this.frame_num = 0
}
ded_moroz.get_frame = function() {
	if(this.frame_num > 7) {
		return {x:((this.frame_num - 8)*150),y:3150}
	} else {
		return {x:(this.frame_num*150),y:3000}
	}
}
ded_moroz.render = function(){
	let frame = this.get_frame()
	ctx.drawImage(art, frame.x, frame.y, 150,150,150,450, 150, 150,)
}