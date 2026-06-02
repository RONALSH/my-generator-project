<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const navItems = [
  { label: '首页', href: '#hero' },
  { label: '关于我', href: '#about' },
  { label: '项目', href: '#projects' },
  { label: '联系方式', href: '#contact' },
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-dark-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    ]"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <a href="#hero" class="text-2xl font-bold bg-gradient-to-r from-accent-500 to-purple-500 bg-clip-text text-transparent">
          Portfolio
        </a>

        <nav class="hidden md:flex items-center space-x-8">
          <a
            v-for="item in navItems"
            :key="item.label"
            :href="item.href"
            class="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
          >
            {{ item.label }}
          </a>
        </nav>

        <button
          class="md:hidden text-gray-300 hover:text-white p-2"
          @click="toggleMobileMenu"
        >
          <svg
            v-if="!isMobileMenuOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <div
      v-if="isMobileMenuOpen"
      class="md:hidden bg-dark-800/98 backdrop-blur-md border-t border-gray-700"
    >
      <nav class="px-4 py-4 space-y-3">
        <a
          v-for="item in navItems"
          :key="item.label"
          :href="item.href"
          class="block text-gray-300 hover:text-white hover:bg-dark-700 px-4 py-2 rounded-lg transition-colors duration-200"
          @click="closeMobileMenu"
        >
          {{ item.label }}
        </a>
      </nav>
    </div>
  </header>
</template>
