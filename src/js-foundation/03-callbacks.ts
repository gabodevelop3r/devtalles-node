interface User {
    id: number,
    name: string,
    email: string
}

const users: User[] = [
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

export function getUserById ( id: number , callback:(err?:string, user?:User)=>void) {
    const user = users.find( (user) => user.id == id)
    if (!user)
        return callback(`User not found with id ${id}`)
    
    return callback(undefined, user)
    
}