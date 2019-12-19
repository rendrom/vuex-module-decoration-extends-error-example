## VUEX-MODULE-DECORATION Example

This example shows that if the property name in the class extended from VuexModule is 'store', then an error `RangeError: Maximum call stack size exceeded` will occur

To run example run

```bash
git clone https://github.com/rendrom/vuex-module-decoration-extends-error-example.git
cd ./vuex-module-decoration-extends-error-example
npm i
npm start
```
and open http://localhost:8080 - look at the console error

then comment in `store/app/index.ts` next line to avoid a error

```typescript
store: any = [];
```


