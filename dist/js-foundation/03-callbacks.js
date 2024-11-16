"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = getUserById;
const users = [
    {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@example.com'
    },
    {
        id: 2,
        name: 'Jane Doe',
        email: 'janedoe@example.com'
    }
];
function getUserById(id, callback) {
    const user = users.find((user) => user.id == id);
    setTimeout(() => {
        if (!user)
            return callback(`User not found with id ${id}`);
        return callback(undefined, user);
    }, 1000);
}
