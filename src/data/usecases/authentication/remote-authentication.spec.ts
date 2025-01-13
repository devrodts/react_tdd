import { RemoteAuthentication } from "./remote-authentication"
import { HttpPostClientSpy } from "../../test/mock-http-client"

describe('RemoteAuthentication', () => {

    test('Should call HttpClient with correct URL', async () => {
       const httpPostClientSpy = new HttpPostClientSpy()
       const url = 'example.com';
       const sut = new RemoteAuthentication(url, httpPostClientSpy)
       await sut.auth()
       expect(httpPostClientSpy.url).toBe(url)
    })

})
