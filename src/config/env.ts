import { loadEnv, validateEnv } from '../helpers/index.js'

function configEnv() {
	loadEnv()
	validateEnv()
}

export { configEnv }
