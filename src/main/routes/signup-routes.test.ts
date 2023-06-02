import request from 'supertest'
import app from '../config/app'

describe('SignUp routes', () => {
  it('should retun an account on success', async () => {
    await request(app)
      .post('/api/signup').send({
        name: 'John Doe',
        email: 'john@doe.com',
        password: '123456',
        passwordConfirmation: '123456'
      })
      .expect(201)
  })
})
