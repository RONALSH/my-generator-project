<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="bg-dark-900 py-8">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col sm:flex-row justify-between items-center">
        <div class="text-gray-400 text-sm mb-4 sm:mb-0">
          © {{ currentYear }} Portfolio. All rights reserved.
        </div>
        <div class="flex items-center space-x-4">
          <a href="#" class="text-gray-400 hover:text-white transition-colors text-sm">
            隐私政策
          </a>
          <span class="text-gray-600">|</span>
          <a href="#" class="text-gray-400 hover:text-white transition-colors text-sm">
            使用条款
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
