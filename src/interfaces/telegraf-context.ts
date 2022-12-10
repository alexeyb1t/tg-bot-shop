import { Context } from 'telegraf';
import { BasketService } from '../services/basket-service';
import { TelegrafSession } from './telegraf-session';

export interface TelegrafContext extends Context {
  session: TelegrafSession;
}
