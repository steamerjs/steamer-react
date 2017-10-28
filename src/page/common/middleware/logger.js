const logger = store => next => action => {
    let result = next(action); // 返回的也是同样的action值

    // console.log('dispatching', action);
    // console.log('next state', store.getState());
    return result;
};

export default logger;