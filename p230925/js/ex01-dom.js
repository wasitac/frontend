/* 
1. 단일 element 추출(반환)
1-1) document.getElementById('아이디를 반드시 문자열로 넣어주셔야 해요');
1-2) document.querySelector('선택자');
    아이디 : '#아이디'
    클래스 : '.클래스'
    태그   : '태그'

2. 복수 element 추출(반환)
2-1) document.getElementsByClassName('클래스');
2-2) document.getElementsByTagName('태그');
2-3) document.querySelectorAll('선택자');
     document.querySelectorAll('선택자1', '선택자2');
*/

// 1.  단일 element 추출(반환)
const id_txt = document.getElementById('txt');
const id_greeting = document.querySelector('#greeting');

// 1.  단일 element 추출(반환)
console.log('id_txt : ', id_txt);
console.log('id_greeting : ', id_greeting);
console.log('typeof id_greeting : ', typeof id_greeting);
console.log('id_greeting.innerText : ', id_greeting.innerText);
console.log('id_greeting[innerText] : ', id_greeting['innerText']);

// 2. 복수 element 추출(반환)
const class_c_txt = document.getElementsByClassName('c_txt');
console.log('class_c_txt', class_c_txt);
console.log(class_c_txt.greeting.innerText);
console.log(class_c_txt.greeting['innerText']);
console.log(class_c_txt[1].innerText);
console.log(class_c_txt[1]['innerText']);

const div = document.getElementsByTagName('div');
console.log(div);

const selector = document.querySelectorAll('.c_txt');
console.log('selector : ', selector);

const selector_two = document.querySelectorAll('#greeting');
console.log('selector_two :', selector_two);

selector_two[0].innerText = '쉬는시간';
console.log('selector_two[0] :', selector_two[0].innerText);
