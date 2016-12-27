exports.get = async (ctx) => {
  ctx.body = ctx.render('templates/home');
}
