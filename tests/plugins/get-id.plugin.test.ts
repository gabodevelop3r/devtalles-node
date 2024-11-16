import { getId } from "../../src/plugins";

describe('plugins/get-id.plugin.ts', ()=>{

    test('should return a string', ()=>{
        expect(getId()).toEqual(expect.any(String))
    })

    test('should return a string of length 36', ()=>{
        expect(getId().length).toBe(36)
    })

    test('should return a string that is a uuid', ()=>{
        const regex = new RegExp('^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$')
        expect(getId()).toMatch(regex)
    })

})