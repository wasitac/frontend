const form = document.querySelector('form');
const input = document.querySelector('input#text');
const ul = document.querySelector('#container ul');
const submit = document.querySelector('.sign-up');

// text box에 데이터 입력 후, 등록 버튼을 클릭하면
// : ul의 li 추가
//---------------------------------------------------------------------------
// [구현 1]
// form.addEventListener('submit', (event) => {
//   // 1) refresh 방지
//   event.preventDefault();
//   console.log(input.value);
//   //// 3-1)
//   // ul.innerHTML = '<li>' + input.value + '</li>';
//   // ul.innerHTML = `<li>${input.value}</li>`;
//   ul.innerHTML = `<li>${input.value}</li>` + ul.innerHTML;

//   //// 3-2.1) li 엘리먼트 : 생성
//   const li = document.createElement('li');
//   console.log('li >> ', li);

//   //// 3-2.2) li 엘리먼트 : content 추가
//   li.innerText = input.value;

//   //// 3-2.3) li 엘리먼트 : ul의 자식 엘리먼트로 추가
//   ul.appendChild(li);
//   // 2) 입력된 데이터삭제(지우기)
//   input.value = null;
// });
// --------------------------------------------------------------------------
// [구현 2] refactoring
// : [구현 1] 코드 분리 - listener, handler
// const addLi = (content) => {
//   const li = document.createElement('li');
//   li.innerText = content;
//   ul.appendChild(li);
// };

// const handler = (event) => {
//   // refresh 방지
//   event.preventDefault();

//   // li 추가
//   // if (input.value.trim()) addLi(input.value);
//   if (input.value !== '') {
//     addLi(input.value);
//   }

//   // input 입력값 지우기
//   input.value = null;
// };

// submit.addEventListener('click', handler);

// ---------------------------------------------------------------------------
// [구현 3] 기능 추가
// 1) li 엘리먼트가 추가되면, 삭제 버튼도 같이 추가되도록!
// 2) li content를 web browser에 저장
// 3) 삭제 버튼을 클릭함, web browser에 저장된 데이터 삭제
const deleteLi = (event) => {
  const parentElement = event.target.parentElement;
  console.log(parentElement.id);

  li_items = li_items.filter((li_item) => {
    // console.log('li-item : ', li_item);
    // console.log('li-item.id : ', li_item.id);
    // console.log('typeof li_item.id :', typeof li_item.id);
    // console.log('typeof parentElement.id :', typeof parentElement.id);
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
  //버튼 엘리먼트 생성
  // li.appendChild(btn_cross);

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
  // if (input.value.trim()) addLi(input.value);
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

// overlay.addEventListener('click', () => {
//   modal.classList.remove('active');
//   overlay.classList.remove('active');
// });

// btn_close.addEventListener('click', () => {
//   modal.classList.remove('active');
//   overlay.classList.remove('active');
// });

// [방법2] foreach()
const close_elements = [btn_close, overlay];

close_elements.forEach((value) => {
  value.addEventListener('click', () => {
    modal.classList.remove('active');
    overlay.classList.remove('active');
    modal_input.value = '';
  });
});
