/* eslint-disable spaced-comment */
import { MongoClient } from 'mongodb'
import { AccountMongoRepository } from './account'

describe('Account Mongo Repository', () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let client: MongoClient
  beforeAll(async () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-expect-error
    client = await MongoClient.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  })

  afterAll(async () => {
    await client.close()
  })

  it('should return an account on success', async () => {
    const sut = new AccountMongoRepository()
    const account = await sut.add({
      name: 'any_name',
      email: 'any_email@mail.com',
      password: 'any_password'
    })

    expect(account).toBeTruthy()
    expect(account.id).toBeTruthy()
    expect(account.name).toBe('any_name')
    expect(account.email).toBe('any_email@mail.com')
    expect(account.password).toBe('any_password')
  })
})
