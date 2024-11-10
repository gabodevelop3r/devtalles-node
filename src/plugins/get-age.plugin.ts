const getAgePlugin = require('get-age')

export const getAge = ((birthDate: string) => {
    // return getAgePlugin(age)
    return new Date().getFullYear() - new Date(birthDate).getFullYear()
}) 
