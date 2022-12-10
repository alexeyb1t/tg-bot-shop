import { Category } from './category';

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  attributes?: { value: string; viewValue: string }[];
}
