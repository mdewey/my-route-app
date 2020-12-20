import { AppState } from "../context/useRouteContext"

type Action =
| { type: 'MOVED_ADDED'; value: string }


// action is the data we received from our dispatch
const reducerFunction = (state: AppState, action: Action): AppState => {
console.log({ action, state })

switch (action.type) {
  case 'MOVED_ADDED':
    return { ...state , currentRoute:state.currentRoute.concat({moveId: action.value})}
  default:
    // Returns a new COMPLETE state
    // or I could throw an error
    return {...state}
}
}

export default reducerFunction