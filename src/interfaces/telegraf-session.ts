import { BasketItem } from './basket-item';

export interface TelegrafSession {
  basket: {
    items: BasketItem[];
  };
}
