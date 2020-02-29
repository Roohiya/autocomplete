import Koa from 'koa'
import createRedisInstance from './redis'

const app = new Koa()

app.use(async ctx => {
  ctx.body = 'Hello World'
})

app.listen(3000)

createRedisInstance()
