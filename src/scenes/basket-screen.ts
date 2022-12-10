import { Context } from 'telegraf';
import { fetchProducts } from '../api/product-api';
import { BasketService } from '../services/basket-service';

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

  const basket = new BasketService();
  basket.addToBasket(product);

  ctx.reply('Added to basket');
}
