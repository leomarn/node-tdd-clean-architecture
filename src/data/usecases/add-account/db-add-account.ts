import type { AccountModel, AddAccount, AddAccountModel, Encrypter } from './db-add-account-protocols'

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
