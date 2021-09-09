import {Action} from './actions'
import {nanoid} from "nanoid"
import {findItemIndexById} from "../utils/arrayUtils";

export type Task = {
    id: string
    text: string
}
export type List = {
    id: string
    text: string
    tasks: Task[]
}
export type AppState = {
    lists: List[]
}

/*
We also updated the return type of our reducer. The type is now AppState | void.
Sometimes we still might need to return a new instance of the state, for example to
reset the state to the initial value, but as we usually won’t return anything - we added
the void type to the union.

 */
export const appStateReducer = (draft: AppState, action: Action): AppState | void => {
    switch (action.type) {
        case "ADD_LIST": {
            draft.lists.push({
                id: nanoid(),
                text: action.payload,
                tasks: []
            })
            break
        }
        case "ADD_TASK": {
            const {text, listId} = action.payload
            const targetListIndex = findItemIndexById(draft.lists, listId)

            draft.lists[targetListIndex].tasks.push({
                id: nanoid(),
                text
            })
            break
        }
        default: {
            break
        }
    }
}
