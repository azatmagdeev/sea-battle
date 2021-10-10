import {Sea} from "./lib/Sea.js";

const sea = new Sea()


const app = new Vue({
  el: '#app',
  components: {
    'app-sea': sea.vue()
  },
  data: {
    message: 'Привет, Vue!',
    sea: sea
  },
  template: `
    <div>
      {{message}}
      <app-sea v-bind:cols="sea.cols" 
               v-bind:rows="sea.rows" 
               v-bind:cells="sea.cells">
      </app-sea>
    </div>
    
  
  `
})


