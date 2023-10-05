const emoji = document.querySelector('.emoji');
const h1 = document.querySelector('h1');
const remove = document.querySelector('.remove');
const text_change = document.querySelector('.text_change');

// [이벤트 리스너 등록]
// : << 문법 >>
// : 엘리먼트.addEventListener('이벤트', 이벤트핸들러);
// : 이벤트 리스너(event listener) - 이벤트가 발생했을 때, 그 처리를 담당하는 함수
// : 이벤트핸들러(event handler) - 이벤트 감지 후, 실행되는 함수

emoji.addEventListener('click', emojiHandler);
remove.addEventListener('click', removeHandler);
text_change.addEventListener('click', () => {
  h1.innerText = '하티하티하티호';
  h1.style.color = '#f00';
  h1.style.backgroundColor = '#fee';
});
h1.addEventListener('mouseover', () => console.log('마우스 지나감!!ᓚᘏᗢ'));

function emojiHandler() {
  console.log('👀');
}

function removeHandler() {
  console.log('이모지 출력 이벤트 해제');
  emoji.removeEventListener('click', emojiHandler);
}
