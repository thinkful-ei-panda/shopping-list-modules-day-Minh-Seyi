

function create(title) {
    return {
        id: cuid(),
        name: title,
        checked: false,
    };
}

function validateName(name) {
    if (name === undefined || name === "" || name === " ") {
        throw new TypeError("Name must not be blank");
    }
}

export default {
    create,
    validateName,
};