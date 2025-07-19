<template>
    <div >883338</div>
    <!-- <div>{{ famsg }}</div> -->
    <div >883338</div>

</template>
<script setup lang="ts">
import {ref,provide,inject} from "vue"
import {counterStore} from "../store/counter";
    // const store = counterStore()
// const aaa = ref("1111")
const msg = ref("子组件数据");
provide("sonmsg",msg.value)
// const famsg = inject("famsg")
</script>
