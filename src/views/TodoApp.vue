<template>
  <div class="todo-app">
    <h1>我的待办事项</h1>

    <div class="task-summary">
      <span>未完成: {{ pendingTasks }}</span>
      <span>已完成: {{ completedTasks }}</span>
    </div>

    <form @submit.prevent="addTask" class="task-input-form">
      <input type="text" v-model="newTask" placeholder="添加新任务...">
      <select v-model="newTaskPriority">
        <option value="low">低</option>
        <option value="medium">中</option>
        <option value="high">高</option>
      </select>
      <button type="submit">添加</button>
    </form>

    <div v-if="tasks.length === 0" class="empty-state">
      <p>🎉 任务都完成啦，真棒！</p>
    </div>

    <ul v-else class="task-list">
      <li v-for="task in tasks" :key="task.id" :class="['task-item', `priority-${task.priority}`, { completed: task.completed }]">
        <div class="task-content">
          <input type="checkbox" v-model="task.completed">
          <div v-if="task.editing">
            <input type="text" v-model="task.editText" @keyup.enter="saveTask(task)" @blur="saveTask(task)">
          </div>
          <span v-else @dblclick="editTask(task)">{{ task.text }}</span>
        </div>
        <div class="task-actions">
          <button @click="editTask(task)" class="edit-btn">{{ task.editing ? '保存' : '编辑' }}</button>
          <button @click="removeTask(task.id)" class="delete-btn">删除</button>
        </div>
      </li>
    </ul>

    <div v-if="tasks.length > 0" class="clear-all-container">
      <button @click="clearAllTasks" class="clear-all-btn">全部清空</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';

const tasks = ref([]);
const newTask = ref('');
const newTaskPriority = ref('medium');

const pendingTasks = computed(() => tasks.value.filter(t => !t.completed).length);
const completedTasks = computed(() => tasks.value.filter(t => t.completed).length);

const addTask = () => {
  if (newTask.value.trim() === '') return;
  tasks.value.unshift({ 
    id: Date.now(), 
    text: newTask.value, 
    completed: false, 
    priority: newTaskPriority.value,
    editing: false,
    editText: newTask.value
  });
  newTask.value = '';
  newTaskPriority.value = 'medium';
};

const removeTask = (id) => {
  tasks.value = tasks.value.filter(t => t.id !== id);
};

const editTask = (task) => {
  if (task.editing) {
    saveTask(task);
  } else {
    task.editText = task.text;
    task.editing = true;
  }
};

const saveTask = (task) => {
  if (task.editing) {
    task.text = task.editText;
    task.editing = false;
  }
};

const clearAllTasks = () => {
  if (confirm('确定要清空所有任务吗？')) {
    tasks.value = [];
  }
};

// Load tasks from localStorage on component mount
onMounted(() => {
  const savedTasks = localStorage.getItem('vue-todo-tasks');
  if (savedTasks) {
    tasks.value = JSON.parse(savedTasks);
  }
});

// Watch for changes in tasks and save to localStorage
watch(tasks, (newTasks) => {
  localStorage.setItem('vue-todo-tasks', JSON.stringify(newTasks));
}, { deep: true });
</script>

<style scoped>
.todo-app {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #f0f8ff;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h1 {
  text-align: center;
  color: #005a9e;
  margin-bottom: 1.5rem;
}

.task-summary {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  color: #005a9e;
  font-weight: 600;
}

.task-input-form {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.task-input-form input {
  flex-grow: 1;
  padding: 0.75rem;
  border: 1px solid #add8e6;
  border-radius: 8px;
  font-size: 1rem;
}

.task-input-form select {
  padding: 0.75rem;
  border: 1px solid #add8e6;
  border-radius: 8px;
  background-color: white;
}

.task-input-form button {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.task-input-form button:hover {
  background-color: #0056b3;
}

.empty-state {
  text-align: center;
  padding: 2rem;
  color: #888;
}

.task-list {
  list-style: none;
  padding: 0;
}

.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  background-color: white;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  border-left: 5px solid #ccc;
  transition: background-color 0.2s;
}

.task-item.priority-high { border-left-color: #dc3545; }
.task-item.priority-medium { border-left-color: #ffc107; }
.task-item.priority-low { border-left-color: #28a745; }

.task-item.completed {
  background-color: #e6f7ff;
}

.task-item.completed span {
  text-decoration: line-through;
  color: #888;
}

.task-content {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-grow: 1;
}

.task-content input[type="checkbox"] {
  width: 20px;
  height: 20px;
}

.task-content span {
  cursor: pointer;
}

.task-actions {
  display: flex;
  gap: 0.5rem;
}

.edit-btn, .delete-btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s;
}

.edit-btn { background-color: #ffc107; }
.edit-btn:hover { background-color: #e0a800; }
.delete-btn { background-color: #dc3545; }
.delete-btn:hover { background-color: #c82333; }

.clear-all-container {
  text-align: right;
  margin-top: 1.5rem;
}

.clear-all-btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  background-color: #6c757d;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s;
}

.clear-all-btn:hover {
  background-color: #5a6268;
}

@media (max-width: 600px) {
  .todo-app {
    margin: 1rem;
    padding: 1.5rem;
  }
}
</style>
