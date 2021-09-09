// ADD_LIST - contains the list title.
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
//It would work same way, I just prefer using types.
// The technique we are using here is called discriminated union
// interface AddListAction {
//     type: "ADD_LIST"
//     payload: string
// }
// interface AddTaskAction {
//     type: "ADD_LIST"
//     payload: { text: string; listId: string }
// }

//action creators.

export const addTask = (
    text: string,
    listId: string,
): Action => ({
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