import { getUserById } from "../../src/js-foundation/03-callbacks"



describe('js-foundation/03-callbacks.ts', () => {

    test('getUserById should return an error if user does not exist', () => {

        const id = 10
        
        getUserById(id, (err, user) => {

            expect(err).toContain(`User not found with id`)
            expect(user).toBeUndefined()
        })
    
    })


    test('getUserById should return User', (done) => {

        const id = 1
        
        getUserById(id, (err, user) => {
            expect(err).toBeUndefined();
            expect(user).toBeDefined();
            expect(user).toStrictEqual(   {
                id: 1,
                name: 'John Doe',
                email: 'johndoe@example.com'
            })
            expect(user).toHaveProperty('name')
            done();
        })

    })

})