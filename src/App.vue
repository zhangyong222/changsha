<template>
  <DateTime/>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <Counter/>
  <div>22222</div>
  {{ msg }}
  <div>11111</div>

</template>
<script setup lang="ts">
/**provide,inject方法只能由父级组件向下传递数据给后代组件，不能由后代组件向上传递数据 
 * 
 */
import {ref,inject,provide} from "vue";
import HelloWorld from './components/HelloWorld.vue';
import Counter from './components/counter.vue';
import DateTime from './components/dateTime.vue';

const msg = inject("sonmsg")
// const famsg = ref("父组件数据");
// provide("famsg",famsg.value)
</script>
<style scoped>
.logo {
  height: 7em;
  
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
