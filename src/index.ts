import * as dotenv from 'dotenv'
import { Telegraf, Scenes, session } from 'telegraf';
const { message } = require('telegraf/filters');
import shopScene from "./scenes/shop-scene";

dotenv.config()

const bot = new Telegraf(process.env.BOT_TOKEN || '');

const stage = new Scenes.Stage([shopScene], {
  ttl: 10,
});

bot.use(session());
bot.use(stage.middleware());

bot.on(message('text'), async (ctx) => {
  (ctx as any).scene.enter('shop-scene');
})

bot.launch();
