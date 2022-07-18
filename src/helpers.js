const choice = (items) => {
    const randIndex = Math.floor(Math.random() * items.length);
    return items[randIndex];
};

const remove = (items, item) => {
    //itemIndex will be -1 if the item is not in the array. The function will return undefined (default function return value) if itemIndex is < 0.
    const itemIndex = items.indexOf(item);

    if(itemIndex >= 0){
        //Array.splice returns a array with the deleted item, we want to return the item itself
        const itemsLeft = items.slice(0,itemIndex).concat(items.slice(itemIndex+1));
        return itemsLeft;
    };
};

export { choice, remove };