import { characters } from '../../src/js-foundation/02-destructuring'

describe('js-foundation/02-destructuring', () => {

    test('characters should containt batman', ()=>{

        expect(characters).toContain('Batman')
    })

    test('First character should by Flash , and second Superman', ()=>{

        const [flash, superman] = characters

        expect(flash).toBe('Flash')
        expect(superman).toBe('Superman')

    })
})