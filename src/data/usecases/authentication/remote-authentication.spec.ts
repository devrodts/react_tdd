import { HttpPostClient } from "data/protocols/http/httpPostClient"
import { RemoteAuthentication } from "./remote-authentication"

describe('RemoteAuthentication', () => {

    test('Should call HttpClient with correct URL', async () => {

       class HttpPostClientSpy implements HttpPostClient{

            url?: string

            async post(url: string): Promise<void>{
                this.url = url
                return Promise.resolve()
            }
       }

       const httpPostClientSpy = new HttpPostClientSpy()
       const url = 'example.com';
       const sut = new RemoteAuthentication(url, httpPostClientSpy)
       await sut.auth()
       expect(httpPostClientSpy.url).toBe(url)
    })

})
