type Item = {
    id: string
}

export const findItemIndexById = <TItem extends Item>(
    items: TItem[],
    id: string
) => {
    return items.findIndex((item: TItem) => item.id === id)
}
//utility function that will help us to move the items inside the array

export const moveItem = <TItem>(array: TItem[], from: number, to: number) => {
    const item = array[from]
    return insertItemAtIndex(removeItemAtIndex(array, from), item, to)
}
//We want to be able to work with arrays with any kind of items in them, so we use a
// type variable TItem.



