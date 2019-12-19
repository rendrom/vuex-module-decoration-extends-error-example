import { Vue, Component } from 'vue-property-decorator';
import { appModule } from '../store/app';


@Component
export default class App extends Vue {
  get last() {
    return appModule.last
  }
}
