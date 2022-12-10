import * as dotenv from 'dotenv';
import { Telegraf, Scenes } from 'telegraf';
const RedisSession = require('telegraf-session-redis');
const { message } = require('telegraf/filters');
import shopScene from './scenes/shop-scene';

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN || '');

const session = new RedisSession({
  store: {
    host: process.env.TELEGRAM_SESSION_HOST || '127.0.0.1',
    port: process.env.TELEGRAM_SESSION_PORT || 6379,
    password: process.env.REDISPASSWORD,
  },
});

const stage = new Scenes.Stage([shopScene], {
  ttl: 10,
});

bot.use(session);
bot.use(stage.middleware());

bot.on(message('text'), async (ctx) => {
  (ctx as any).scene.enter('shop-scene');
});

bot.launch();
