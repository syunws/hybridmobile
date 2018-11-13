
//액션 정의
const INCREMENT = 'INCREMENT'; // counetr/INCREMENT 붙여주면 프로젝트가 커졌을때 액션명이 중복 되는 것을 방지할 수 있음
const DECREMENT = 'DECREMENT';

//액션 생성 함수
export const increment = ()=> ({type:INCREMENT});
export const decrement = ()=> ({type:DECREMENT});

const initState = {
    number : 0
}
//리듀서 구현
export default function counter (state=initState,action){ // state가 있으면 쓰고 없으면 initState를 써요
    switch (action.type)
    {
        case INCREMENT:
            return{
                ...state,                   //기존 state 객체에서 number만 바꾸는 문법(펼침 연산자)
                number: state.number + 1 
            };
        case DECREMENT:
            return{
            ...state,            
            number: state.number - 1 
        };        
        default :
            return state;
    }
}