import { initGlobalState, MicroAppStateActions } from 'qiankun';


const initState = {
  name: '小猪',
  age: '66',
}

const action = initGlobalState(initState)


action.onGlobalStateChange((state, prev) => {
  for(let key in state){
    initState[key] = state[key]
  }
})

action.getGlobalState = (key) => {
  return key ? initState[key] : initState
}

export default action;