import type { AccountModel } from '../../../domain/models/account'
import type { AddAccount, AddAccountModel } from '../../../domain/usecase/add-account'
import type { Encrypter } from '../../protocols/encypter'

export class DbAddAccount implements AddAccount {
  private readonly encryter: Encrypter

  constructor(encryter: Encrypter) {
    this.encryter = encryter
  }

  async add(account: AddAccountModel): Promise<AccountModel> {
    await this.encryter.encrypt(account.password)
    return new Promise(resolve => resolve({
      ...account,
      id: ''
    }))
  }
}
