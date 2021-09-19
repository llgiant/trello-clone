import styled from "styled-components"

interface DragPreviewContainerProps {
    isHidden?: boolean
    isPreview?: boolean
}

type DragPreviewWrapperProps = {
    position: {
        x: number
        y: number
    }
}
/*
By default for every property passed to the styled component it will automatically
generate a CSS class. It has a big performance overhead. To avoid this we use the
attrs⁵⁵ method. This way it will assign the styles attribute to our component instead
of generating a new class every time the position of the preview changes.
Note that we are passing the type of the props twice. First time we do it to provide
the type for the attributes that we are passing and the second time we do it to define
the props of the resulting component.
*/

export const DragPreviewWrapper = styled.div.attrs<DragPreviewWrapperProps>(
    ({ position: { x, y } }) => ({
        style: {
            transform: `translate(${x}px, ${y}px)`
        }
    })
)<DragPreviewWrapperProps>``

export const DragPreviewContainer = styled.div<DragPreviewContainerProps>`
  transform: ${props => (props.isPreview ? "rotate(5deg)" : undefined)};
  opacity: ${props => (props.isHidden ? 0 : 1)};
`

export const CustomDragLayerContainer = styled.div`
  height: 100%;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`

export const AppContainer = styled.div`
align-items: flex-start;
background-color: #3179ba;
display: flex;
flex-direction: row;
height: 100%;
padding: 20px;
width: 100%;
`

export const ColumnContainer = styled(DragPreviewContainer)`
background-color: #ebecf0;
width: 300px;
min-height: 40px;
margin-right: 20px;
border-radius: 3px;
padding: 8px 8px;
flex-grow: 0;
`

export const ColumnTitle = styled.div`
padding: 6px 16px 12px;
font-weight: bold;
`

export const CardContainer = styled(DragPreviewContainer)`
  background-color: #fff;
  cursor: pointer;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  max-width: 300px;
  border-radius: 3px;
  box-shadow: #091e4240 0px 1px 0px 0px;
`
//define a type for AddItemButtonProps

type AddItemButtonProps = {
    dark?: boolean
}
//Now define the AddNewItemButton styled-component:

export const AddItemButton = styled.button<AddItemButtonProps>`
background-color: #ffffff3d;
border-radius: 3px;
border: none;
color: ${props => (props.dark ? "#000" : "#fff")};
cursor: pointer;
max-width: 300px;
padding: 10px 12px;
text-align: left;
transition: background 85ms ease-in;
width: 100%;
&:hover {
background-color: #ffffff52;
}
`

//define a type for AddItemButtonProps

export const NewItemFormContainer = styled.div`
max-width: 300px;
display: flex;
flex-direction: column;
width: 100%;
align-items: flex-start;
`
//Create a NewItemButton component with the following styles:

export const NewItemButton = styled.button`
background-color: #5aac44;
border-radius: 3px;
border: none;
box-shadow: none;
color: #fff;
padding: 6px 12px;
text-align: center;
`
//Define styles for the input as well

export const NewItemInput = styled.input`
border-radius: 3px;
border: none;
box-shadow: #091e4240 0px 1px 0px 0px;
margin-bottom: 0.5rem;
padding: 0.5rem 1rem;
width: 100%;
`
