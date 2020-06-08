import item from './item.js';

const items = [];
const hideCheckedItems = false;

function findById(id) {
    let found =  items.find(element => {
        return element.id === id;
    });
    return found;
}

function addItem(name) {
    try {
        item.validateName(name);
        this.items.push(item.create(name));
    } catch (error) {
        console.log(`Cannot add item: ${error.message}`);
    }
}

function findAndToggleChecked(id) {
    findById(id).checked = !(findById(id).checked);
}

function findAndUpdateName(id, newName) {
    try {
       item.validateName(newName);
        findById(id).name = newName;
    } catch (error) {
        console.log(`Cannot update name: ${error.message}`);
    }
}
    
function findAndDelete(id) {

    let index = this.items.indexOf(findById(id));
    this.items.splice(index, 1);
}

function toggleCheckedFilter() {
    this.hideCheckedItems = !this.hideCheckedItems;
}

export default {
    items,
    hideCheckedItems,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter,
};

