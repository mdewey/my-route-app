import { AppState } from "../context/useRouteContext"

type Action =
| { type: 'MOVED_ADDED'; value: string }
| { type: 'REMOVE_LAST'; }

const reducerFunction = (state: AppState, action: Action): AppState => {
console.log({ action, state })

switch (action.type) {
  case 'MOVED_ADDED':
    return { ...state , currentRoute:state.currentRoute.concat({moveId: action.value})}
    case 'REMOVE_LAST':
      const {currentRoute} = state;
      currentRoute.pop()
      console.log({currentRoute});
      
      return {...state,currentRoute}
  default:
    // Returns a new COMPLETE state
    // or I could throw an error
    return {...state}
}
}

export default reducerFunction