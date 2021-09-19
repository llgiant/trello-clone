import { useDrag } from "react-dnd"
import { useAppState } from "../state/AppStateContext"
import { DragItem } from "../DragItem"
import { setDraggedItem } from "../state/actions"
import { useEffect } from "react"
import { getEmptyImage } from "react-dnd-html5-backend"

//The dragging logic will be similar for both cards and columns. I suggest we move it
// to a custom hook.
// This hook will return a drag method that accepts the ref of a draggable element.
// Whenever we start dragging the item, the hook will dispatch a SET_DRAG_ITEM action
// to save the item in the app state. When we stop dragging, it will dispatch this action
// again with null as the payload

export const useItemDrag = (item: DragItem) => {
    const { dispatch } = useAppState()
    const [, drag, preview] = useDrag({
        type: item.type,
        item: () => {
            dispatch(setDraggedItem(item))
            return item
        },
        end: () => dispatch(setDraggedItem(null))
    })
    useEffect(() => {
        preview(getEmptyImage(), { captureDraggingState: true })
    }, [preview])
    return { drag }
}


//Internally this hook uses useDrag from react-dnd. We pass an options object to it.
// • type - it will be CARD or COLUMN
// • item - returns dragged item object and dispatches the SET_DRAGGED_ITEM action
// • end - is called when we release the item
// As you can see inside this hook we dispatch the new SET_DRAGGED_ITEM action. When
// we start dragging, we store the item in our app state, and when we stop, we reset it
// to null.
// The useDrag hook returns three values inside the array: * [0] - Collected Props: An
// object containing collected properties from the collect function. If no collect function
// is defined, an empty object is returned. * [1] - DragSource Ref: A connector function
// for the drag source. This must be attached to the draggable portion of the DOM. * [2]
// - DragPreview Ref: A connector function for the drag preview. This may be attached
// to the preview portion of the DOM.
// It is a common pattern with hooks, because it allows us to destructure this array and
// assign its values to variables that have the names we want