<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 100);
});
</script>

<template>
  <section id="hero" class="min-h-screen flex items-center justify-center bg-dark-900 relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900"></div>
    
    <div class="absolute inset-0 opacity-20">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500/30 rounded-full blur-[100px] animate-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-[100px] animate-pulse" style="animation-delay: 1s;"></div>
    </div>

    <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div
        :class="[
          'transition-all duration-1000 transform',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
      >
        <div class="inline-flex items-center px-4 py-2 bg-dark-700/80 backdrop-blur-sm rounded-full border border-gray-700 mb-8">
          <span class="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
          <span class="text-gray-300 text-sm">全栈开发者</span>
        </div>

        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span class="text-white">Hi, I'm </span>
          <span class="bg-gradient-to-r from-accent-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Developer
          </span>
        </h1>

        <p class="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          热爱创造，专注于构建优雅的 Web 应用。<br />
          擅长 Vue.js、React 和 TypeScript。
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            class="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-lg hover:from-accent-600 hover:to-accent-700 transition-all duration-300 shadow-lg hover:shadow-accent-500/25"
          >
            查看项目
          </a>
          <a
            href="#contact"
            class="inline-flex items-center justify-center px-8 py-3 bg-dark-700 border border-gray-600 text-white font-semibold rounded-lg hover:bg-dark-600 hover:border-gray-500 transition-all duration-300"
          >
            联系我
          </a>
        </div>
      </div>
    </div>

    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <a href="#about" class="text-gray-400 hover:text-white transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>
    </div>
  </section>
</template>
