import type { AddAccountRepository } from '../../../../data/protocols/add-account-repository'
import type { AccountModel } from '../../../../domain/models/account'
import type { AddAccountModel } from '../../../../domain/usecase/add-account'

export class AccountMongoRepository implements AddAccountRepository {
  async add(accountData: AddAccountModel): Promise<AccountModel> {
    return {
      id: '123243',
      name: 'any_name',
      email: 'any_email@mail.com',
      password: 'any_password'
    }
  }
}
