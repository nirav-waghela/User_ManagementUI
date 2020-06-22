
export const logger = (store) => (next) => (action) => {
    console.group(action.type)
    console.log('The action :', action)
    const returnValue = next(action)
    console.log('The new state is:', store.getState())
    console.groupEnd()
    return returnValue
}

export const injectClient = (client) => () => (next) => (action) => {
    const { type, promise, ...rest } = action;
    if (!promise) next(action);

    //handle async calls

    const SUCCESS = type;
    const REQUEST = `${type}_REQUEST`;
    const FAILURE = `${type}_FAILURE`;
    next({ ...rest, type: REQUEST });

    return promise(client)
        .then(res => next({ ...rest, payload: res.data, type: SUCCESS }))
        .catch(err => next({ ...rest, err, type: FAILURE }));
};

