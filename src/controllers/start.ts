import { Handler } from '../types/index.js'

const startController: Handler = async ctx => {
	const results = await ctx.db.selectFrom('words').selectAll().execute()
	console.log(results)
	await ctx.text('state.started', {
		username: ctx.from?.username
	})
}

export { startController }
