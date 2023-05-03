import type { AccountModel } from '../../domain/models/account'
import { ServerError } from '../errors'
import type { HttpResponse } from '../protocols/http'
const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})
const successRequest = (account: AccountModel): HttpResponse => ({
  statusCode: 200,
  body: account
})
const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: new ServerError()
})

export { badRequest, successRequest, serverError }
