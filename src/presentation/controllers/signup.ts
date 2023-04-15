import { InvalidParamError, MissingParamError } from '../errors'
import { badRequest, serverError, successRequest } from '../helpers/http-helper'
import { type Controller } from '../protocols/controller'
import { type EmailValidator } from '../protocols/email-validator'
import { type HttpRequest, type HttpResponse } from '../protocols/http'
export class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator

  constructor (emailValidator: EmailValidator) {
    this.emailValidator = emailValidator
  }

  handle (httpRequest: HttpRequest): HttpResponse {
    try {
      const requireFilds = ['name', 'email', 'password', 'passwordConfirmation']
      for (const field of requireFilds) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }

      const isValid = this.emailValidator.isValid(httpRequest.body.email)
      if (!isValid) {
        return badRequest(new InvalidParamError('email'))
      }

      return successRequest('User created successfully')
    } catch (error) {
      return serverError()
    }
  }
}
