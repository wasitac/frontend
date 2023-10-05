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
const id_txt = document.getElementById('txt');
console.log(txt);
id_txt.innerText = '집에 가고 싶다';