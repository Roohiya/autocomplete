import Koa from 'koa'
import Router from 'koa-router'
import suggestions from './suggestions'
import createRedisInstance from './redis'

const app = new Koa()
const route = new Router()

route.get('/getSuggestions', suggestions.getList)

app.use(route.routes())

app.listen(3000)

createRedisInstance()
