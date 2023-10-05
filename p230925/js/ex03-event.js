const element = document.getElementById('greeting');
const initialText = element.innerText;
// element.innerText = '안녕~';

function textChange() {
  element.innerText = '오늘도 화이팅';
  element.style.backgroundColor = '#ff0';
}

function textBefore() {
  element.innerText = initialText;
  element.style.backgroundColor = 'initial';
}
