// ADD_LIST - contains the list title.

import { DragItem } from "../DragItem"

//ADD_TASK - text is the task text, and listId is the reference to the list it belongs to.
export type Action =
    | {
    type: "ADD_LIST"
    payload: string
}
    | {
    type: "ADD_TASK"
    payload: { text: string; listId: string }

}
    | {
    type: "MOVE_LIST";
    payload: { draggedId: string; hoverId: string }

}
    | {
    type: "SET_DRAGGED_ITEM"
    payload: DragItem | null
}

//It will hold the DragItem that we defined earlier. We need to be able to set it to null if
// we are not dragging anything. We are not using the undefined here because it would
// mean that the field could be omitted. In our case it’s not true, it can just be empty
// sometimes.
// Define the action creator

//MOVIE_LIST action has draggedId and hoverId in its
// payload. When we start dragging the column, we remember its id and pass it as
// draggedId. When we hover over other columns we take their ids and use them as a
// hoverId

//action creators.

export const setDraggedItem = (
    draggedItem: DragItem | null,
): Action => ({
    type: "SET_DRAGGED_ITEM",
    payload: draggedItem
})


export const moveList = (draggedId: string, hoverId: string,): Action =>
    ({
        type: "MOVE_LIST",
        payload: {
            draggedId,
            hoverId,
        }
    })

export const addTask = (text: string, listId: string,): Action =>
    ({
        type: "ADD_TASK",
        payload: {
            text,
            listId
        }
    })
export const addList = (
    text: string,
): Action => ({
    type: "ADD_LIST",
    payload: text
})

