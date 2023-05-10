import type { AccountModel, AddAccount, AddAccountModel, AddAccountRepository, Encrypter } from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
  private readonly encryter: Encrypter
  private readonly addAccountRepository: AddAccountRepository

  constructor(encryter: Encrypter, addAccountRepository: AddAccountRepository) {
    this.encryter = encryter
    this.addAccountRepository = addAccountRepository
  }

  async add(accountData: AddAccountModel): Promise<AccountModel> {
    const hashedPassword = await this.encryter.encrypt(accountData.password)
    const account = await this.addAccountRepository.add({
      ...accountData,
      password: hashedPassword
    })
    return new Promise(resolve => resolve(account))
  }
}
