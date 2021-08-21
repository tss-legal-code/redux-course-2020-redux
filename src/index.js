import './styles.css'
import { applyMiddleware, compose, createStore } from "redux"
import thunk from 'redux-thunk';
import { MyRootReducer } from './myRedux/MyRootReducer';
import { DECREMENT, INCREMENT } from './myRedux/types';
import { asyncIncrement, changeTheme, decrement, increment } from './MyRedux/actions';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const counter = document.getElementById("counter");
const addBtn = document.getElementById("add");
const subBtn = document.getElementById("sub");
const asyncBtn = document.getElementById("async");
const themeBtn = document.getElementById("theme");

// function logger (state) {
//   return function (next) {
//     return function (action) {
//       console.log("State to amend  with action V : ", state.getState());
//       console.log("            Amending action ->: ", action);
//       const doStep = next(action)
//       console.log("State amended  with action  ^ : ", state.getState());
//       return doStep 
//     }
//   }
// }

compose

const store = createStore(
  MyRootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk,
      logger),
   )
)

window.store = store

addBtn.addEventListener("click", () => {
  store.dispatch(increment())
})

subBtn.addEventListener("click", () => {
  store.dispatch(decrement())
})



asyncBtn.addEventListener("click", () => {
  store.dispatch(asyncIncrement())
})


themeBtn.addEventListener("click", () => {
  const newTheme = document.body.classList.contains("light") ? "dark" : "light"
  store.dispatch(changeTheme(newTheme))
})

store.subscribe(() => {
  const state = store.getState()
  counter.textContent = state.counter
  document.body.className = state.theme.value;

  [addBtn, subBtn, themeBtn, asyncBtn].forEach(
    btn => btn.disabled = state.theme.disabled
  )
})

store.dispatch({ type: "INIT_APPLICATION" })



















































// //before adding theme toggle
// import './styles.css'
// import { applyMiddleware, createStore } from "redux"
// import thunk from 'redux-thunk';
// import { MyRootReducer } from './myRedux/MyRootReducer';
// import { DECREMENT, INCREMENT } from './myRedux/types';
// import { asyncIncrement, decrement, increment } from './MyRedux/actions';
// import logger from 'redux-logger';

// const counter = document.getElementById("counter");
// const addBtn = document.getElementById("add");
// const subBtn = document.getElementById("sub");
// const asyncBtn = document.getElementById("async");
// const themeBtn = document.getElementById("theme");

// // function logger (state) {
// //   return function (next) {
// //     return function (action) {
// //       console.log("State to amend  with action V : ", state.getState());
// //       console.log("            Amending action ->: ", action);
// //       const doStep = next(action)
// //       console.log("State amended  with action  ^ : ", state.getState());
// //       return doStep 
// //     }
// //   }
// // }


// const store = createStore(
//   MyRootReducer,
//   42,
//   applyMiddleware(
//     thunk,
//     logger)
// )

// window.store = store

// addBtn.addEventListener("click", () => {
//   store.dispatch(increment())
// })

// subBtn.addEventListener("click", () => {
//   store.dispatch(decrement())
// })

// store.subscribe(() => {
//   const state = store.getState()
//   counter.textContent = state
// })

// store.dispatch({ type: "INIT_APPLICATION" })

// asyncBtn.addEventListener("click", () => {
//   store.dispatch(asyncIncrement())
// })


// themeBtn.addEventListener("click", () => {

// })




























// // before importing redux
// import './styles.css'
// import { MyCreateStore } from "./MyCreateStore"
// import { MyRootReducer } from './myRedux/MyRootReducer';

// const counter = document.getElementById("counter");
// const addBtn = document.getElementById("add");
// const subBtn = document.getElementById("sub");
// const asyncBtn = document.getElementById("async");
// const themeBtn = document.getElementById("theme");

// const store = MyCreateStore(MyRootReducer, 0)

// window.store = store

// addBtn.addEventListener("click", () => {
//   store.dispatch({ type: "INCREMENT" })
// })

// subBtn.addEventListener("click", () => {
//   store.dispatch({ type: "DECREMENT" })
// })

// store.subscribe(() => {
//   const state = store.getState()
//   counter.textContent = state  
// }) 

// store.dispatch({type: "INIT_APPLICATION"})

// asyncBtn.addEventListener("click", () => {


// })

// themeBtn.addEventListener("click", () => {

// })






















// // plain JS, no reducing
// import './styles.css'


// const counter = document.getElementById("counter");
// const addBtn = document.getElementById("add");
// const subBtn = document.getElementById("sub");
// const asyncBtn = document.getElementById("async");
// const themeBtn = document.getElementById("theme");

// let state = 0

// function render() {
//   counter.textContent = state.toString()
// }

// render()

// addBtn.addEventListener("click", () => { 
//   state += 1; 
//   render() 
// })

// subBtn.addEventListener("click", () => { 
//   state -= 1; 
//   render() 
// })


// asyncBtn.addEventListener("click", () => { 
//   setTimeout( ()=> {
//     state += 1; 
//     render()} , 2000)
// })

// themeBtn.addEventListener("click", () => { 
//   document.body.classList.toggle("dark") 
//   render() 
// })





















//  ///downloaded, unknown///
// import {applyMiddleware, createStore, compose} from 'redux'
// import thunk from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import logger from 'redux-logger'
// import {rootReducer} from './redux/rootReducer'
// import {asyncIncrement, changeTheme, decrement, increment} from './redux/actions'


// const counter = document.getElementById('counter')
// const addBtn = document.getElementById('add')
// const subBtn = document.getElementById('sub')
// const asyncBtn = document.getElementById('async')
// const themeBtn = document.getElementById('theme')

// // function logger(state) {
// //   return function(next) {
// //     return function(action) {
// //       console.log('Prev State', state.getState())
// //       console.log('Action', action)
// //       const newState = next(action)
// //       console.log('New State', newState)
// //       return newState
// //     }
// //   }
// // }

// // const store = createStore(
// //   rootReducer,
// //   compose(
// //     applyMiddleware(thunk, logger),
// //     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// //   )
// // )

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(
//     applyMiddleware(thunk, logger)
//   )
// )

// addBtn.addEventListener('click', () => {
//   store.dispatch(increment())
// })

// subBtn.addEventListener('click', () => {
//   store.dispatch(decrement())
// })

// asyncBtn.addEventListener('click', () => {
//   store.dispatch(asyncIncrement())
// })

// themeBtn.addEventListener('click', () => {
//   const newTheme = document.body.classList.contains('light')
//     ? 'dark'
//     : 'light'
//   store.dispatch(changeTheme(newTheme))
// })


// store.subscribe(() => {
//   const state = store.getState()

//   counter.textContent = state.counter
//   document.body.className = state.theme.value;

//   [addBtn, subBtn, themeBtn, asyncBtn].forEach(btn => {
//     btn.disabled = state.theme.disabled
//   })
// })

// store.dispatch({ type: 'INIT_APPLICATION' })
