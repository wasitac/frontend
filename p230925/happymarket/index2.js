const form = document.querySelector('form');
const input = document.querySelector('input#text');
const ul = document.querySelector('#container ul');
const submit = document.querySelector('.sign-up');

const deleteLi = (event) => {
  const parentElement = event.target.parentElement;
  console.log(parentElement.id);

  li_items = li_items.filter((li_item) => {
    return li_item.id !== parseInt(parentElement.id);
  });

  //로컬 스토리지에 저장
  storage_save();
  //지정된 엘리먼트 삭제
  parentElement.remove();
};

// const addLi = (content) => {
const addLi = (li_item) => {
  // li 엘리먼트 생성 후, ul의 자식으로 추가
  const li = document.createElement('li');
  // li.innerText = content;
  // li.innerHTML = `<span>${content}</span>`;
  ul.appendChild(li);

  // span 엘리먼트 생성 후, li 엘리먼트 자식으로 추가
  const span = document.createElement('span');
  span.innerText = li_item.content;
  // li.appendChild(span);

  const btn_cross = document.createElement('button');

  // 자식 한번에 추가 가능
  li.append(span, btn_cross);

  // x버튼 클릭 시 리스트 삭제
  btn_cross.addEventListener('click', deleteLi);

  storage_save();

  //// localStorage에 저장된 요소 삭제할 때
  //// (li_items에 저장된 요소 삭제할 때)
  //// 기준으로 사용될 id 지정(저장)
  li.id = li_item.id;
};

var li_items = [];

// localStorage에 li_items 저장
const storage_save = () => {
  localStorage.setItem('li_items', JSON.stringify(li_items));
};
const handler = (event) => {
  // refresh 방지
  event.preventDefault();

  // 빈 문자열이 아닌 경우에만 li 추가
  if (input.value !== '') {
    const li_item = {
      id: Date.now(),
      content: input.value,
    };
    li_items.push(li_item);
    addLi(li_item);
  }

  // input 입력값 지우기
  input.value = null;
};

submit.addEventListener('click', handler);

//// 초기화
//// 페이지가 로드될 때, local storage에 저장된 데이터 가져오기
const init = () => {
  const local_storage_data = JSON.parse(localStorage.getItem('li_items'));
  console.log('local_storage_data : ', local_storage_data);

  if(local_storage_data)
    li_items = local_storage_data;
    li_items.forEach(value => {
      addLi(value);
    });
};

init();

// [모달]
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btn_modal = document.querySelector('.btn-modal');
const btn_close = document.querySelector('.btn-close');
const modal_input = document.querySelector('#email');

btn_modal.addEventListener('click', () => {
  modal.classList.add('active');
  overlay.classList.add('active');
});

// [방법2] foreach()
const close_elements = [btn_close, overlay];

close_elements.forEach((value) => {
  value.addEventListener('click', () => {
    modal.classList.remove('active');
    overlay.classList.remove('active');
    modal_input.value = '';
  });
});
