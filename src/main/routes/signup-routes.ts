import { type Router } from 'express'

export default (router: Router): void => {
  router.post('/signup', (req, res) => {
    res.status(201).json({ ok: 'ok' })
  })
}
