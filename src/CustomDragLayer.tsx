import {useDragLayer} from "react-dnd"
import {Column} from "./Column"
import {CustomDragLayerContainer, DragPreviewWrapper} from "./styles"
import {useAppState} from "./state/AppStateContext"
import { Card } from "./Card"

/*
• useDragLayer - will provide us the information about the dragged item.
• Column - it is going to be our dragged element
• CustomDragLayerContainer - is our dragging layer, we’ll render the dragging
    preview inside of it.
• useAppState - we will get the draggedItem from it
* */
export const CustomDragLayer = () => {
    const {draggedItem} = useAppState()
    const {currentOffset} = useDragLayer((monitor) => ({
        currentOffset: monitor.getSourceClientOffset()
    }))
    return draggedItem && currentOffset ? (
        <CustomDragLayerContainer>
            <DragPreviewWrapper position={currentOffset}>
                {draggedItem.type === "COLUMN" ? (
                    <Column
                        id={draggedItem.id}
                        text={draggedItem.text}
                        isPreview
                    />
                ) : (
                    <Card
                        columnId={draggedItem.columnId}
                        isPreview
                        id={draggedItem.id}
                        text={draggedItem.text}
                    />
                )}
            </DragPreviewWrapper>
        </CustomDragLayerContainer>
    ) : null


}


