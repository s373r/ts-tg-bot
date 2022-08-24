import { Extra } from './index.js'
import { Context, SessionFlavor } from 'grammy'
import { I18nContextFlavor, TemplateData } from '@grammyjs/i18n'

interface CustomMethods<C extends Context> {
	text: (text: string, templateData?: TemplateData, extra?: Extra) => ReturnType<C['reply']>
}

type CustomContextMethods = CustomMethods<Context>

type CustomContext = Context &
	CustomMethods<Context> &
	I18nContextFlavor &
	SessionFlavor<{}>

export { CustomContext, CustomContextMethods }
