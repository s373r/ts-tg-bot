import { startBot } from './index.js'
import { loadEnv, validateEnv } from '../helpers/index.js'

async function startApp() {
	try {
		loadEnv()
		validateEnv()
	} catch (error) {
		console.error(`Error occurred while loading environment:`, error)
		process.exit(1)
	}

	try {
		await startBot()
	} catch (error) {
		console.error(`Error occurred while starting bot:`, error)
		process.exit(2)
	}
}

export { startApp }
