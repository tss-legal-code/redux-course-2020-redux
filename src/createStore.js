// with initialisation of state
export function MyCreateStore(rootReducer, initialState) {
    let state = rootReducer(initialState, {"type": "__init__"})
    const subscribers = []
    return {
        dispatch(action) {
            state = rootReducer(state, action);
            subscribers.forEach(sub => sub())
        },
        subscribe(callback) {
            subscribers.push(callback)
        },
        getState() {
            return state;
        }
    }
}



// // without initail state
// export function MyCreateStore(rootReducer) {
//     let state = {}
//     const subscribers = []
//     return {
//         dispatch(action) {
//             state = rootReducer(state, action);
//             subscribers.forEach(sub => sub())
//         },
//         subscribe(callback) {
//             subscribers.push(callback)
//         },
//         getstate() {
//             return state;
//         }
//     }
// }


