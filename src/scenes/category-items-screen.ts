import { Context, Markup } from 'telegraf';
import { fetchProducts } from '../api/product-api';
import { categoryScreen } from './category-screen';

export async function categoryItemsScreen(ctx: Context) {
  if (!ctx.chat) {
    throw new Error();
  }

  // @ts-ignore
  const category = ctx.update.callback_query.data;

  const products = await fetchProducts(category);

  const keyboard = Markup.inlineKeyboard(
    products.map((product) =>
      Markup.button.callback(
        product.price.toString(),
        `basket-${product.category.name}-${product.name}`,
      ),
    ),
  );

  await ctx.telegram.sendMessage(
    ctx.chat.id,
    `
    ${products.map((product) => product.name)}
  `,
    keyboard,
  );
}
