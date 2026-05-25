<template>
  <div class="container">
    <h1>学生周报生成器</h1>
    <div class="form-group">
      <label for="studentName">学生姓名:</label>
      <input type="text" id="studentName" v-model="studentName">
    </div>
    <div class="form-group">
      <label for="attendanceDays">考勤天数:</label>
      <input type="number" id="attendanceDays" v-model.number="attendanceDays">
    </div>
    <div class="form-group">
      <label for="homeworkCompleted">作业完成数:</label>
      <input type="number" id="homeworkCompleted" v-model.number="homeworkCompleted">
    </div>
    <button @click="generateReport">生成周报</button>
    <div class="report-output" v-if="report">
      <h2>生成的周报:</h2>
      <textarea readonly :value="report"></textarea>
      <button @click="copyReport" class="copy-btn">复制到剪贴板</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const studentName = ref('');
const attendanceDays = ref(5);
const homeworkCompleted = ref(5);
const report = ref('');

const generateReport = () => {
  if (!studentName.value) {
    alert('请输入学生姓名！');
    return;
  }

  report.value = `
【${studentName.value}同学本周表现】

本周考勤情况：出勤 ${attendanceDays.value} 天，表现良好。

作业完成情况：共完成 ${homeworkCompleted.value} 项作业，态度认真。

总结：
${studentName.value}同学本周整体表现不错，希望下周继续保持，再接再厉！
  `;
};

const copyReport = () => {
  if (!report.value) {
    alert('请先生成周报！');
    return;
  }
  navigator.clipboard.writeText(report.value).then(() => {
    alert('周报已复制到剪贴板！');
  }).catch(err => {
    console.error('复制失败: ', err);
    alert('复制失败，请手动复制。');
  });
};
</script>

<style>
.container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  font-family: sans-serif;
}

h1 {
  text-align: center;
  color: #333;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #555;
}

.form-group input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #0056b3;
}

.report-output {
  margin-top: 2rem;
}

.report-output textarea {
  width: 100%;
  height: 150px;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
}

.copy-btn {
  margin-top: 1rem;
  background-color: #28a745;
}

.copy-btn:hover {
  background-color: #218838;
}
</style>
