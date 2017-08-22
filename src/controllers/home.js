module.exports = async (ctx) => {
  const title = 'koa2 restful api'
  await ctx.render('home', {
    title
  })
}
