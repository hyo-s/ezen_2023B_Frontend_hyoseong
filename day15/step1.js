/* 
    자료형
        0.undefined     : 자료가 없다.
        1.숫자형
        2.문자열
        3.불
        4.배열[ ]       : 여러개의 자료를 하나의 자료 집합
            - 성질, 상태, 필드 = 현재 데이터의 상태
        5.함수( ){ }    : 코드의 집합
            - 행위, 이벤트, 메소드

    함수
        코드의 집합을 나타내는 자료형
        용어
            함수호출    : 함수사용 f(x)
            매개변수    : 함수호출 할 때 함수내부{ }에 여러가지 *자료를 넣을때 = 인수
                변수, 상수, 함수, 객체, 배열 == 자료
            리턴값      : 함수호출해서 최종적으로 나오는 결과 = 반환 return
            void       : 반환이 없다.
        
        종류
            1.매개변수O 리턴O
                funtion 함수(x,y){z=x+y; return z;}
            2.매개변수O 리턴X
                funtion 함수(x,y){z=x+y;}
            3.매개변수X 리턴O
                funtion 함수( ){return 3+3;}
            4.매개변수X 리턴X
                funtion 함수( ){ }

        - 함수 사용하면 좋은점.
            1. 반복되는 코드를 한번에 정의하고 필요에 따라 호출해서 반복 작업을 피할 수 있다.[코드 양 줄일 수 있다.]
            2. 긴 프로그램을 기능별로 나눠 여러 함수로 나눠 작성하면 모듈화[조각/쪼개서 단위]로 전체 코드의 가독성[읽고 관리가]이 좋아진다.
            3. 기능별(함수별)로 수정이 가능하므로 유지보수가 쉽다.
            4. 매개변수에 따른 서로 다른 결과물

        - 1. 익명함수   : 이름이 없는 함수
            function(){} : 함수에 이름이 없어서 호출이 불가능
            익명함수를 변수/상수에 넣자 그럼 변수/상수 호출 시 함수가 실행
                const/let 변수명 = function( ){ }

        - 2. 선언적함수 : 이름이 있는 함수
            funtion 함수명( ){ }     : 함수에 이름이 있는 상태
*/

// p.197 *익명함수
// ============ 함수 선언부 start ============ //
const 함수 = function(){
    // ============ 함수 내부 ============ //
    console.log('함수 내부의 코드입니다.1');
    console.log('함수 내부의 코드입니다.2');
    console.log('함수 내부의 코드입니다.3');
    console.log('');
    // ============ 함수 내부 ============ //

}
// ============ 함수 선언부 end ============ //

함수(); // 함수 호출
함수(); // 함수 재 호출
// 함수2(); // 함수2 is not undefined [오류]

console.log(typeof 함수);   // function
console.log(함수);



// p.199 선언적함수
// ============ 함수 선언부 start ============ //
function 선언함수(){        // function 함수명( ){ }
    // ============ 함수 내부 ============ //
    console.log('함수 내부의 코드입니다.1');
    console.log('함수 내부의 코드입니다.2');
    console.log('함수 내부의 코드입니다.3');
    console.log('');
    // ============ 함수 내부 ============ //

}
// ============ 함수 선언부 end ============ //

선언함수();
선언함수();

console.log(typeof 선언함수);
console.log(선언함수);


// p.201
    // 함수명:'f'     매개변수:'X'    리턴값:'x+x'
function f(x){return x+x};
// 함수[console.log]호출(함수[f]호출)
    // 1. f(3) => 6
    // 2. console.log(6);
console.log(f(3)); 

// 1. 함수명/기능 : 오늘스페셜메뉴, 매개변수:50000, 리턴값:'랍스터음식'
function 오늘스페셜메뉴(금액){
    // 요리하는 로직/코드
    return '고급음식';
}
// 손님왔어.
오늘스페셜메뉴(50000);