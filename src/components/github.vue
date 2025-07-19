<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="">
                <el-input v-model="inputValue" placeholder="请输入"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import {ref} from "vue"
const inputValue = ref('')

</script>
<style>

</style>