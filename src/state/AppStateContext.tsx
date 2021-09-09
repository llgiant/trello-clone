import {createContext, useContext, FC, Dispatch} from 'react'
import {appStateReducer, AppState, List, Task} from "./appStateReducer"
import {Action} from "./actions";

//a library that allows you to mutate an object and it will create a new object instance based on your mutations
import {useImmerReducer} from "use-immer"

//define a context to propagate the data across the whole application
/*
React wants us to provide the default value for our context. This value will only
be used if we don’t wrap our application into our AppStateProvider, so we can
omit it. To do this, pass an empty object that we’ll cast to AppStateContextProps
to createContext function. Here we use an as operator to make TypeScript think
that our empty object actually has AppStateContextProps type:
*/

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps)


// the type  provided for our context
type AppStateContextProps = {
    lists: List[]
    getTasksByListId(id: string): Task[]
    dispatch: Dispatch<Action>
}

const appData: AppState = {
    lists: [
        {
            id: "0",
            text: "To Do",
            tasks: [{id: "c0", text: "Generate app scaffold"}]
        },
        {
            id: "1",
            text: "In Progress",
            tasks: [{id: "c2", text: "Learn Typescript"}]
        },
        {
            id: "2",
            text: "Done",
            tasks: [{id: "c3", text: "Begin to use static typing"}]

        }
    ]
}

export const AppStateProvider: FC = ({children}) => {
    // we get the state value from the reducer and also provide the dispatch method through the context.
    const [state, dispatch] = useImmerReducer(appStateReducer, appData)
    const {lists} = appData

    const getTasksByListId = (id: string) => {
        return lists.find((list) => list.id === id)?.tasks || []
    }
    return (
        <AppStateContext.Provider value={{lists, getTasksByListId, dispatch}}>
            {children}
        </AppStateContext.Provider>
    )
}

export const useAppState = () => {
    return useContext(AppStateContext)
}