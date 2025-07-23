<template>
  <div class="formClass">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="名称">
        <el-input
          v-model="form.inputValue"
          style="width: 250px"
          placeholder="请输入"
        ></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary" size="large" @click="getGit">点击</el-button>
        <el-button type="info" size="large" @click="getGit1">点击</el-button>
      </el-form-item>
    </el-form>
    <div>
      <el-checkbox-group v-model="checkcitys" @change="handleChange">
        <el-checkbox
          v-for="item in checkOptions"
          :label="item"
          size="large"
          :key="item"
          :value="item"
        />
      </el-checkbox-group>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { getGitHub } from "../api/github/index";
import { ElMessage } from "element-plus";
import {Edit,Delete,Tickets} from "@element-plus/icons-vue"
const checkcitys = ref([]);
const checkOptions = ref(["北京", "上海"]);
const form = ref({
  inputValue: "",
});
const getGit = () => {
  const aa = getGitHub();
  console.log(aa);
  ElMessage.success("点击");
};
const getGit1 = () => {
  const aa = getGitHub();
  console.log(aa);
  ElMessage.error("点击");
};
const handleChange = (val: any) => {
  console.log(val);
};
</script>
<style></style>
