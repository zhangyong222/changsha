<template>
    <div >883338</div>
    <div>{{ famsg }}</div>
    <div >883338</div>
</template>
<script setup lang="ts">
import {ref,provide,inject} from "vue"
import {counterStore} from "../store/counter";
    // const store = counterStore()
const famsg = inject("famsg")
</script>
