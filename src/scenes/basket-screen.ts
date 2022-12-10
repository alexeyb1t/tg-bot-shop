import { fetchProducts } from '../api/product-api';
import { Context, Markup } from 'telegraf';
import { TelegrafContext } from '../interfaces/telegraf-context';
import { BasketService } from '../services/basket-service';
import { CATEGORY_MENU } from '../constants/category';

export async function basketScreen(ctx: Context) {
  const key = (ctx.update as any).callback_query.data;
  const categoryName = key.split('-')[1];
  const productName = key.split('-')[2];
  const products = await fetchProducts(categoryName);
  const product = products.find(
    (productItem) => productItem.name === productName,
  );

  if (!product) {
    throw new Error();
  }

  const basketService = new BasketService((ctx as TelegrafContext).session);

  basketService.addToBasket(product);

  const total = basketService.total();

  const keyboard = Markup.inlineKeyboard([
    Markup.button.callback('Back', CATEGORY_MENU),
  ]);

  ctx.reply(`Added to basket ${product.name}, Total: ${total}`, keyboard);
}
