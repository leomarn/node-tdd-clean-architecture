import { ServerError } from '../errors/server-error'
import { type HttpResponse } from '../protocols/http'
const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})
const successRequest = (msg: string): HttpResponse => ({
  statusCode: 200,
  body: msg
})
const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: new ServerError()
})

export {
  badRequest,
  successRequest,
  serverError
}
