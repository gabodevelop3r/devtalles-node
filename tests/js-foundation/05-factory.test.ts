import { buildMakePerson } from "../../src/js-foundation/05-factory"

describe('js-foundation/05-factory', () => {

    const getId = () => '1234'
    const getAge = () => 35

    test('buildMakePerson should return a function', () => {
        const makeperson = buildMakePerson( { getId, getAge } )
        expect(typeof makeperson).toBe('function')

    })

    test('buildMakePerson should return a person', () => {
        const makePerson = buildMakePerson( { getId, getAge } )
        const johnDoe = makePerson({name: 'John Doe', birthdate: '1985-01-01'})

        expect(johnDoe).toEqual({
            id: '1234',
            name: 'John Doe',
            birthdate: '1985-01-01',
            age: 35
        })
        
    })

})