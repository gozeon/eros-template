const Koa = require('koa')
const app = new Koa()

// logger
app.use(async (ctx, next) => {
  await next()
  const rt = ctx.response.get('X-Response-Time')
  console.log(`${ctx.method} ${ctx.url} - ${rt}`)
})

// x-response-time
app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  ctx.set('X-Response-Time', `${ms}ms`)
})

app.use(async (ctx) => {
  const { url } = ctx.request
  if (url === '/favicon.ico') {
    ctx.body = 'null'
  } else {
    try {
      ctx.body = require(`.${url}`)
    } catch (e) {
      ctx.body = {
        errNo: 404,
        errMsg: 'not fount',
        data: [],
      }
    }
  }
})

app.listen(3000)
