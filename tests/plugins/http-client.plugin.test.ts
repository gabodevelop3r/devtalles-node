import { log } from "console"
import { httpClientPlugin } from "../../src/plugins/http-client.plugin"

describe('plugins/http-client.plugin', () => {

    test('httpclient plugin should return to string',async () => {
        const data = await httpClientPlugin.get('https://jsonplaceholder.typicode.com/posts/1')

        expect(data).toEqual({
            userId: expect.any(Number),
            id: expect.any(Number),
            title: expect.any(String),
            body: expect.any(String)
          })

    })

    test('httpclient plugin should have POST, PUT and Delete methods',async () => {

        expect(typeof httpClientPlugin.post).toBe('function')  
        expect(typeof httpClientPlugin.put).toBe('function') 
        expect(typeof httpClientPlugin.delete).toBe('function') 
    })

})