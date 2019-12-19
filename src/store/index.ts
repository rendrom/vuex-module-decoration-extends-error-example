import Vue from 'vue';
import Vuex from 'vuex';
import { AppState } from './app';

Vue.use(Vuex);

// @ts-ignore
const strict = process.env.NODE_ENV !== 'production';

export interface RootState {
  app: AppState;
}

// Declare empty store first, dynamically register all modules later.
export default new Vuex.Store<RootState>({ strict });
