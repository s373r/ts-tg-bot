import { Handler } from '../types/index.js'

const stopController: Handler = ctx => {
	ctx.text('state.stopped', {
		username: ctx.from?.username
	})
}

export { stopController }
