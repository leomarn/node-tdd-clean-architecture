import bcrypt from 'bcrypt'
import { BcryptAdapter } from './bcrypt-adapter'

jest.mock('bcrypt', () => ({
  async hash(): Promise<string> {
    return new Promise(resolve => resolve('hash'))
  }
}))

const makeBcryptAdapter = (value: number): BcryptAdapter => {
  return new BcryptAdapter(value)
}
describe('Bcrypt adapter', () => {
  it('should call bcrypt with correct values', async () => {
    const salt = 12
    const sut = makeBcryptAdapter(salt)
    const hashSpy = jest.spyOn(bcrypt, 'hash')
    await sut.encrypt('any_value')
    expect(hashSpy).toHaveBeenCalledWith('any_value', salt)
  })

  it('should return a hash on success', async () => {
    const salt = 12
    const sut = makeBcryptAdapter(salt)

    const hash = await sut.encrypt('any_value')
    expect(hash).toBe('hash')
  })
})
