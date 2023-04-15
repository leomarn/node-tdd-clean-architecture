import { MissingParamError } from '../errors/missing-param-error'
import { badRequest, successRequest } from '../helpers/http-helper'
import { type Controller } from '../protocols/controller'
import { type HttpRequest, type HttpResponse } from '../protocols/http'

export class SignUpController implements Controller {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requireFilds = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requireFilds) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }

    return successRequest('User created successfully')
  }
}
