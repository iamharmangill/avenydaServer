const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const pool = require('../../../DB/db')

const app = new Koa()
app.use(bodyParser())

app.use(async ctx => {
  // const dbtitle = await ctx.request.body.title
  const item = await show()
  ctx.body = item
})

async function show() {
  try {
    const itemData = await pool.query(`SELECT * FROM avenyda.User WHERE id=1`)
    return itemData
  } catch (error) {
    console.log(error)
  }
}

module.exports = app.callback()
