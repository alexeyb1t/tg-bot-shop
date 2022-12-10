import { Scenes, session, Telegraf } from 'telegraf';
import { fetchCategories } from '../api/category-api';
import { categoryScreen } from './category-screen';
import { categoryItemsScreen } from './category-items-screen';
import { basketScreen } from './basket-screen';
import { CATEGORY_MENU } from '../constants/category';
import { backToCategoryMenu } from './back-to-category-menu';

const shopScene = new Scenes.BaseScene<Scenes.SceneContext>('shop-scene');

shopScene.enter(categoryScreen);

(async () => {
  const categories = await fetchCategories();
  categories.forEach((category) => {
    shopScene.action(category.name, categoryItemsScreen);
  });
})();

shopScene.action(/^basket-(.*)/i, basketScreen);

shopScene.action(CATEGORY_MENU, backToCategoryMenu);

export default shopScene;
