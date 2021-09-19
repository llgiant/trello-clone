import {Action} from './actions'
import {nanoid} from "nanoid"
import {findItemIndexById, moveItem} from "../utils/arrayUtils"
import {DragItem} from "../DragItem"


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
    draggedItem: DragItem | null;
}
const sourceListIndex = findItemIndexById(
    draft.lists,
    sourceColumnId
)
const targetListIndex = findItemIndexById(
    draft.lists,
    targetColumnId
)

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
        //Here we take the draggedId and the hoverId from the action payload. Then we
// calculate the indices of the dragged and the hovered columns. And then we override
// the draft.lists value with the result of the moveItem function, which takes the
// source array, and two indices that it swaps.

        case "MOVE_LIST": {
            const {draggedId, hoverId} = action.payload
            const dragIndex = findItemIndexById(draft.lists, draggedId)
            const hoverIndex = findItemIndexById(draft.lists, hoverId)
            draft.lists = moveItem(draft.lists, dragIndex, hoverIndex)
            break
        }
        case "SET_DRAGGED_ITEM": {
            draft.draggedItem = action.payload
            break
        }
        case "MOVE_TASK": {
            const {
                draggedItemId,
                hoveredItemId,
                sourceColumnId,
                targetColumnId
            } = action.payload

        }
        default: {
            break
        }
    }
}
