const path = require('path')
// const fs = require('fs')
const url = require('url')
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const static = require('koa-static')
const views = require('koa-views')
const Router = require('koa-router')
// const axios = require('axios')

const CommonController = require('./middleware/CommonController')

const app = new Koa()
const router = new Router()

//映射静态资源
app.use(static(path.join(__dirname, './static'), {maxage: 3600000 * 24}))

//配置模版引擎
app.use(views(path.join(__dirname, './view'), {
    extension: 'html'
}))

//解析请求体数据
app.use(bodyParser())

router.all(/^\/api\/*/, CommonController)

router.all(/.*/, async ctx => {
    //处理网络安全
    ctx.set('X-Frame-Options', 'SAMEORIGIN')
    ctx.set('X-XSS-Protection', '1; mode=block')

    await ctx.render('./index.html')
})

app.use(router.routes())

app.listen(8080, "0.0.0.0");
console.log('app start at: 8080', process.env.NODE_ENV);