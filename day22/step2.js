
// 1. HTML을 모두 읽었을대 해당 함수 실행
document.addEventListener('DOMContentLoaded', function(){
        // 2. h1요소를 개체로 1개* 가져오기
        const header=document.querySelector('h1'); console.log(header)
            // document.querySelector('h1');            해당 요소를 객체로 호출
            // document.querySelector('h1').value;      해당 요소의 입력된 값 호출
            // [* 단 value 속성 가지는 요소만 가능] : input, select, textarea 등 / div, h1, span[x]
            // document.querySelector('h1').innerHTML;  해당 요소 사이의 HTML을 텍스트 호출[HTML코드 자체]

    header.textContent='HEADERS';       // DOM객체명.textContent : 텍스트 호출 [HTML 렌더링 결과물]
    header.style.color='white';         // 객체명.style.css속성명='값';
    header.style.backgroundColor='black';
    header.style.padding='10px';
        // css : background-color vs JS : backgroundColor : 카멜표기법

        // 3.[p.313]
        // .querySelectorAll()을 이용한 h1 dom객체를 여러개/배열로 반환.
        const headers=document.querySelectorAll('h1'); console.log(headers);
        // 
        for(let i=0; i<headers.length; i++){
            // i는 0부터 배열의 길이만큼 1씩증가 반복
            // [조건]
            if(i%2==0){headers[i].style.color='white'}
            else{headers[i].style.color='red'}
               
            headers[i].textContent='HEADERS';
         /*    headers[i].style.color='white'; */
            headers[i].style.backgroundColor='black';
            headers[i].style.padding='10px';
        }

    // 4.[p.314]
        const a= document.querySelector('#a');
        const b= document.querySelector('#b');

        a.textContent=`<h1>textContent 속성</h1>`;  // 문자 그대로
        b.innerHTML='<h1>innerHTML 속성</h1>';      // HTML형식으로
})