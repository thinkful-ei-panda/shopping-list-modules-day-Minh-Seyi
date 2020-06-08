

function create(title) {
    let id = cuid();
    let name = title;
    let checked = false;
    return {
        id,
        name,
        checked,
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