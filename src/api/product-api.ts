import { Product } from '../interfaces/product';
import { Category } from '../interfaces/category';

const category1: Category = {
  id: '1',
  name: 'First Category',
  viewValue: 'First Category',
};

const category2: Category = {
  id: '2',
  name: 'First Category',
  viewValue: 'First Category',
};

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'First Category Product',
    category: category1,
    price: 50,
  },
  {
    id: '2',
    name: 'Second Category Product',
    category: category2,
    price: 100,
  },
];

export async function fetchProducts(categoryName: string): Promise<Product[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        mockProducts.filter(
          (product) => product.category.name === categoryName,
        ),
      );
    }, 1000);
  });
}
