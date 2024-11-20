import { createApp } from 'vue'
import App from './App.vue'
import VueApexCharts from "vue3-apexcharts"
import './style.css'

createApp(App)
  .use(VueApexCharts)
  .mount('#app')