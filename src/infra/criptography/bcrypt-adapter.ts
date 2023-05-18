import bcrypt from 'bcrypt'
import type { Encrypter } from '../../data/protocols/encypter'
export class BcryptAdapter implements Encrypter {
  private readonly salt
  constructor(salt: number) {
    this.salt = salt
  }

  async encrypt(value: string): Promise<string> {
    await bcrypt.hash(value, this.salt)
    return ''
  }
}
