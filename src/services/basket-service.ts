import { BasketItem } from "../interfaces/basket-item";
import { Product } from "../interfaces/product";

export class BasketService {
  private items: BasketItem[];

  addToBasket(product: Product) {
    const basketItem: BasketItem = {
      product
    };

    this.items.push(basketItem);
  }

  total() {
    return this.items.reduce((acc, current) => {
      acc += current.product.price;
      return acc;
    }, 0);
  }
}
