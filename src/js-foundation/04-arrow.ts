interface User {
    id: number,
    name: string,
    email: string
}


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
]

export const getUserById = ( id:number , callback : (err?:string, user?:User )=>void) => {
    const user = users.find( (user) => user.id == id)
    
    user  ? callback(undefined, user) : callback(`User not found with id ${id}`)   
}