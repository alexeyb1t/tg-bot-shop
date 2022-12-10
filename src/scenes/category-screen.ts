import { Context, Markup } from 'telegraf';
import { fetchCategories } from '../api/category-api';
import { TelegrafContext } from '../interfaces/telegraf-context';

export async function categoryScreen(ctx: Context) {
  (ctx as TelegrafContext).session.basket = {
    items: [],
  };

  const categories = await fetchCategories();

  const keyboard = Markup.inlineKeyboard([
    categories.map((category) =>
      Markup.button.callback(category.viewValue, category.name),
    ),
  ]);

  ctx.reply('Select category', keyboard);
}
