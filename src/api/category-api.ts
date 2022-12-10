import { Category } from "../interfaces/category";

export async function fetchCategories(): Promise<Category[]> {
  const categories = [
    {
      id: '1',
      name: 'First Category',
      viewValue: 'First Category'
    },
    {
      id: '2',
      name: 'Second Category',
      viewValue: 'Second Category'
    }
  ];

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(categories);
    }, 1000);
  });
}
