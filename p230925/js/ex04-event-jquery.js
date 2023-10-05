/* 
JQuery
$('선택자')
$('선택자').함수()
*/

//[연습] 아이디가 greeting인 엘리먼트 접근
const greeting = $('#greeting')[0].innerText;
console.log(greeting);
// 텍스트 버튼을 클릭하면, h1의 텍스트 변경
$('#textChange').click(() => {
  // $('#greeting').html('무야호야호!')
  //               .css('background-color', '#efe');
  // $('#greeting').css('background-color', '#efe');
  $('#greeting').html('무야호야호!')
                .css({ backgroundColor: '#efe', color: '#dcc' });
});

$('#undo').click(() => {
  $('#greeting').html(greeting)
                .css({ 'background-color' : 'initial',
                        'color':'initial',
                      })
});
