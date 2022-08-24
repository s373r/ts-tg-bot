import { initBot, configEnv } from './index.js'

function initApp() {
	try {
		configEnv()
	} catch (error) {
		console.error(`Error occurred while loading environment:`, error)
		process.exit(1)
	}
	const startBot = initBot()
	startBot()
}

export { initApp }
