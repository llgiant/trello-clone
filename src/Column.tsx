import {ColumnContainer, ColumnTitle} from "./styles";
import {AddNewItem} from "./AddNewItem";
import { useAppState } from "./state/AppStateContext"
import { Card } from "./Card"
import { addTask } from "./state/actions"
import { useRef } from "react"
import { useItemDrag } from "./utils/useItemDrag"
//Define the ref that will hold the reference to the dragged div element. Get the drag
// connector function from the useItemDrag. Pass the ref to the drag function and also
// pass it as a prop to the ColumnContainer:
type ColumnProps = {
    text: string
    id:string
}

export const Column = ({text,id}:ColumnProps) => {
    const {draggedItem, getTasksByListId,dispatch} = useAppState()
    const tasks = getTasksByListId(id)
    const ref = useRef<HTMLDivElement>(null)

    const { drag } = useItemDrag({ type: "COLUMN", id, text })
    drag(ref)


    return (
        <ColumnContainer ref={ref}>
            <ColumnTitle>{text}</ColumnTitle>
            {tasks.map(task => (
                <Card text={task.text} key={task.id} id={task.id} />
            ))}
            <AddNewItem
                toggleButtonText="+ Add another task"
                onAdd={text =>
                    dispatch(addTask(text, id))
                }
                dark
            />
        </ColumnContainer>
    )
}