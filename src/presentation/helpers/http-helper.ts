import { type HttpResponse } from '../protocols/http'
const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})
const successRequest = (msg: string): HttpResponse => ({
  statusCode: 200,
  body: msg
})
export {
  badRequest,
  successRequest
}
