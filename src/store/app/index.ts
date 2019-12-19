import { getModule, VuexModule, Module, Action, Mutation } from "vuex-module-decorators";
import store from '../';

class FirstState extends VuexModule {
  items: number[] = [];

  // This property name is not allowed
  // comment to avoid error
  store: any = [];

  @Action({ commit: 'SET_ITEMS' })
  async getItems() {
    if (this.items.length) {
      return this.items;
    }
    const items = await new Promise<number[]>((resolve) => {
      setTimeout(() => resolve([1, 2, 3, 4]), 1000)
    });
    return items;
  }

  @Action({ commit: 'SET_ITEMS' })
  async addItem(item: number) {
    await this.context.dispatch('getItems');
    // await this.getItems();
    const items = [...this.items];
    items.push(item);
    return items;
  }

  @Mutation
  SET_ITEMS(items: number[]) {
    this.items = items;
  }

}


export class SecondState extends FirstState {

  @Action({ commit: 'SET_ITEMS' })
  async deleteItem(item: number) {
    await this.context.dispatch('getItems');
    // await this.getItems();
    const items = [...this.items];
    const index = items.indexOf(item);
    if (index !== -1) {
      items.splice(index, 1);
    }
    return items;
  }


}


@Module({ name: "app", namespaced: true, dynamic: true, store })
export class AppState extends SecondState {


  @Action({ commit: '' })
  async getLast() {
    await this.getItems()
    return this.items[this.items.length - 1];
  }

}

// Get wrapped parent module to access getters
// const base: any = Module({})(CollectionBase);
// Copy parent getters to child
// Object.assign(AppState.getters, base.getters);
// Manually register module
// store.registerModule('app', AppState);

export const appModule = getModule(AppState, store);
