import { Bot, CustomContext } from '../types/index.js'
import { I18n } from '@grammyjs/i18n'

import { Bot as TelegramBot, session } from 'grammy'

import { resolvePath } from '../helpers/index.js'

import { initLocaleEngine } from './index.js'
import * as handlers from '../controllers/index.js'
import { createReplyWithTextFunc } from '../services/index.js'

function extendContext(bot: Bot) {
	bot.use(async (ctx, next) => {
		ctx.text = createReplyWithTextFunc(ctx)
		await next()
	})
}

function setupMiddlewares(bot: Bot, localeEngine: I18n) {
	bot.use(session())
	bot.use(localeEngine.middleware())
}

function setupControllers(bot: Bot) {
	bot.command('start', handlers.start)
	bot.command('stop', handlers.stop)
}

function initBot() {
	const localesPath = resolvePath(import.meta.url, '../locales')
	const i18n = initLocaleEngine(localesPath)
	const bot = new TelegramBot<CustomContext>(process.env.TOKEN)
	extendContext(bot)
	setupMiddlewares(bot, i18n)
	setupControllers(bot)
	return () => bot.start()
}

export { initBot }
