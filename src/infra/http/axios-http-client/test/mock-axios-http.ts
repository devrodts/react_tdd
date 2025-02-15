import axios from 'axios'
import {faker} from '@faker-js/faker'

export const mockAxios = (): jest.Mocked<typeof axios> => {

    const mockedAxios = axios as jest.Mocked<typeof axios>

    mockedAxios.post.mockResolvedValue({
        data: faker.commerce.productName(),
        status: faker.number.int(),
        statusText: faker.word.sample(),
        headers:{},
        config: {url: faker.internet.url()}        
    })

    return mockedAxios
}
