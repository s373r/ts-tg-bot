import { Handler } from '../types/index.js'

const startController: Handler = ctx => {
	ctx.text('state.started', {
		username: ctx.from?.username
	})
}

export { startController }
