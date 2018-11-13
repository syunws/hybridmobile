const ADDTODO= 'ADDTODO';
const REMOVETODO= 'REMOVETODO';
const CHANGEINPUTTODO= 'CHANGEINPUTTODO';
const DONECHECKTODO = 'DONECHECKTODO ';


export const changeInputTodo = ()=> ({type:CHANGEINPUTTODO});
export const addTodo = (todo)=> ({type:ADDTODO});


export const removeTodo = (id)=> ({type:REMOVETODO});
export const doneCheckTodo = (id)=> ({type:DONECHECKTODO});

const initState = {
    todo:'',
    todos:[]
}


//리듀서 구현
export default function counter (state=initState,action){ 
    switch (action.type)
    {

        case CHANGEINPUTTODO:
        return{
        ...state,            
            todo: action.todo
        };           
        case ADDTODO:
            return{
                ...state,    
                todos: state.todos.concat(state.toDo),
                toDo:''               
                
            };
        case REMOVETODO:
            return{
            ...state,                    
        };       
        case DONECHECKTODO:
        return{
            ...state,                    
        };               
        default :
            return state;
    }
}