"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAge = void 0;
const getAgePlugin = require('get-age');
exports.getAge = ((birthDate) => {
    // return getAgePlugin(age)
    return new Date().getFullYear() - new Date(birthDate).getFullYear();
});
