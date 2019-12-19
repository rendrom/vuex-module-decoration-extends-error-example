import { Vue, Component } from 'vue-property-decorator';
import { appModule } from '../store/app';


@Component
export default class App extends Vue {

  last: number | false = false;

  get items() {
    return appModule.items;
  }

  async mounted() {
    await appModule.addItem(6);
    await appModule.deleteItem(1);
    this.last = await appModule.getLast();
  }
}
