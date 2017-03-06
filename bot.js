import Botkit from 'botkit'

const controller = Botkit.slackbot({ debug: false })
controller.spawn({ token: process.env.SLACK_TOKEN }).startRTM()

const { hears } = controller

hears('hello', 'direct_message,direct_mention', (bot, msg) => {
  bot.reply(msg, 'Hello yourself.')
})

hears('call me (.*)', 'direct_message', (bot, msg) => {
  const name = msg.match[1]
  bot.reply(msg, `Hello ${name}!`)
})

hears('', 'ambient', (bot, msg) => {
  const { channel, text, user } = msg
  bot.reply(msg, text.toUpperCase())
})
