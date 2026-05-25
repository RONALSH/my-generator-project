<template>
  <div id="app">
    <nav>
      <router-link to="/">周报生成器</router-link>
      <router-link to="/todos">待办事项</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
</script>

<style>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  background-color: #f4f4f8;
}

nav {
  display: flex;
  justify-content: center;
  background-color: #333;
  padding: 1rem;
}

nav a {
  color: white;
  margin: 0 1rem;
  text-decoration: none;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: background-color 0.3s;
}

nav a.router-link-exact-active {
  background-color: #007bff;
}
</style>
