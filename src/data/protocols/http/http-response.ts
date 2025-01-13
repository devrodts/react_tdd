export enum HttpStatusCode{
    unauthorized = 401,
    noContent = 204,
    badRequest = 400,
    serverError = 500,
    ok = 200
}

export type HttpResponse = {
    statusCode: HttpStatusCode
    body?: any
}