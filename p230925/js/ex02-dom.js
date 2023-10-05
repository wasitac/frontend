const title = document.querySelector('#title');
const append = document.querySelector('#append');
const selector = document.querySelector('.paragraph');
const paragraph = document.querySelectorAll('.paragraph');

console.log('title >> ', title);
console.log('title.innerHTML >> ', title.innerHTML);
title.innerText = '변경된 제목';
// document.querySelector('#append').innerText = '안녕';
// console.log("append >> ", append);
// append.innerText = '<h3>추가된 제목</h3>';
append.innerHTML = '<h3>추가된 제목</h3>';
console.log('append >> ', append.innerHTML);
console.log('append >> ', append);

console.log('첫 번째 단락 접근');
console.log(selector);

selector.innerText = '첫 번째 단락만 변경';
selector.style.color = '#f00';

// [방법 2] for of문
// for (let para of paragraph) {
//   //자바스크립트에서는 camelCase로 작성해야한다.
//   para.style.textAlign = 'center'
//   console.log(para);
// };

// [방법 3] 함수 정의
// const setTextAlign = function(args) {
//   args.style.textAlign = 'center'
// };

// for (let para of paragraph) {
//   setTextAlign(para);
// }

// [방법 4] forEach 함수
// foreach는 nodelist타입이 프로토타입으로 가지고 있는 함수다.
// paragraph는 htmlcollection타입이어서 foreach 함수를 사용할 수 없다.
// paragraph.forEach();
const arr_paragraph = Array.from(paragraph);
console.log('arr_paragraph >> ', arr_paragraph);

// arr_paragraph.forEach((value, i, arr)=>{
//   console.log('value >> ', value);
//   console.log('index >> ', i);
//   console.log('array >> ', arr);
//   console.log('array[index] >> ', arr[i]);
// });

// 자바스크립트에서 넣은 style은 인라인으로 들어간다.
arr_paragraph.forEach((v) => (v.style.textAlign = 'center'));
