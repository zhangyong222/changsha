<template>
  <div class="real-time-clock">
    {{ formattedTime }}
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

// 创建响应式时间对象
const currentTime = ref(new Date());

// 格式化时间为 YYYY-MM-DD HH:mm:ss 格式
const formattedTime = ref('');

// 更新时间函数
const updateTime = () => {
  currentTime.value = new Date();
  
  // 直接格式化为字符串
  formattedTime.value = currentTime.value.toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false  // 24小时制
  }).replace(/\//g, '-'); // 将斜杠替换为横杠
};

// 定时器引用
let timer = null;

onMounted(() => {

  updateTime(); // 立即更新一次
  // 每秒更新一次时间
//  timer = setInterval(updateTime, 1000); 
});

onBeforeUnmount(() => {
  // 组件卸载前清除定时器
  clearInterval(timer);
});
</script>

<style scoped>
.real-time-clock {
  font-family: monospace;
  font-size: 1.8em;
  padding: 10px;
  background: #f5f5f5;
  border-radius: 4px;
  display: inline-block;
}
</style>