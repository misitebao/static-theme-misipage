import { createApp } from 'petite-vue';

import './styles/main.scss';

createApp({
  pageName: 'index',
  pingFunc() {
    console.log(`pong ${this.pageName} page`);
  },
}).mount('#app');
