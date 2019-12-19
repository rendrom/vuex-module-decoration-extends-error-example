import { getModule, VuexModule, Module } from 'vuex-module-decorators';
import store from '../';

class CollectionBase<T> extends VuexModule {
  items: T[] = [];
  get last() {
    return this.items[this.items.length - 1];
  }
}

@Module({ name: 'app', namespaced: true })
export class AppState extends CollectionBase<number> {
  items = [0, 5, 2];
}

// Get wrapped parent module to access getters
const base: any = Module({})(CollectionBase);
// Copy parent getters to child
Object.assign(AppState.getters, base.getters);
// Manually register module
store.registerModule('app', AppState);

export const appModule = getModule(AppState, store);
