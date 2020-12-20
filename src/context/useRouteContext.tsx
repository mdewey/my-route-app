import { createContext, useContext } from 'react'

export interface AppState {
}

export interface AppContextInterface {
  state: AppState
  dispatch: any
}

// Used to setup the provider
export const RouteContext = createContext<AppContextInterface>(
  {} as AppContextInterface
)

// Used to be able to get data from the context
export const useRouteContext = () => useContext(RouteContext)