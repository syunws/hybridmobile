const loggerMiddleware = store =>next =>action => {
    //미들웨어에서 할일!

    console.log("현재 스토어 상태",  store.getState());
    console.log("액션", action);
    
    // next : 해야할 일을 하고 middleware 또는 Reducer로 넘겨주는 아이
    const result = next(action);

    console.log("액션수행후 스토어 상태", store.getState());


    return result; 

}

export default loggerMiddleware;