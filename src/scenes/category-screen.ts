import { Telegraf, Markup, Context } from 'telegraf';
import { Category } from '../interfaces/category';
import { fetchCategories } from '../api/category-api';

export async function categoryScreen(ctx: Context) {
  const categories = await fetchCategories();

  const keyboard = Markup.inlineKeyboard([
    categories.map((category) =>
      Markup.button.callback(category.viewValue, category.name),
    ),
  ]);

  ctx.reply('Select category', keyboard);
}
