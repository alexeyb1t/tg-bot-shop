import { BasketItem } from '../interfaces/basket-item';
import { Product } from '../interfaces/product';
import { TelegrafSession } from '../interfaces/telegraf-session';

export class BasketService {
  constructor(private session: TelegrafSession) {}

  addToBasket(product: Product) {
    const basketItem: BasketItem = {
      product,
    };

    this.session.basket.items.push(basketItem);
  }

  total() {
    return this.session.basket.items.reduce((acc, current) => {
      acc += current.product.price;
      return acc;
    }, 0);
  }
}
