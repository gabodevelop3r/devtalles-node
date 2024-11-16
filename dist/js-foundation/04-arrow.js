"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = void 0;
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
const getUserById = (id, callback) => {
    const user = users.find((user) => user.id == id);
    user ? callback(undefined, user) : callback(`User not found with id ${id}`);
};
exports.getUserById = getUserById;
