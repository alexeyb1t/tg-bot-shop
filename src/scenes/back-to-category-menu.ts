import { Context } from 'vm';

export function backToCategoryMenu(ctx: Context) {
  (ctx as any).scene.enter('shop-scene');
}
