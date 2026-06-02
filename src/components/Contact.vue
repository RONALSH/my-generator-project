<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isVisible = ref(false);

const contactInfo = [
  {
    icon: 'mail',
    label: '邮箱',
    value: 'developer@example.com',
    href: 'mailto:developer@example.com'
  },
  {
    icon: 'github',
    label: 'GitHub',
    value: '@developer',
    href: 'https://github.com'
  },
  {
    icon: 'twitter',
    label: 'Twitter',
    value: '@developer',
    href: 'https://twitter.com'
  },
];

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          isVisible.value = true;
        }
      });
    },
    { threshold: 0.1 }
  );

  const element = document.getElementById('contact');
  if (element) {
    observer.observe(element);
  }
});
</script>

<template>
  <section id="contact" class="py-24 bg-dark-800">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2
          :class="[
            'text-3xl sm:text-4xl font-bold text-white mb-4 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          ]"
        >
          联系方式
        </h2>
        <div
          :class="[
            'w-24 h-1 bg-gradient-to-r from-accent-500 to-purple-500 mx-auto transition-all duration-700 delay-200',
            isVisible ? 'opacity-100 w-24' : 'opacity-0 w-0'
          ]"
        ></div>
        <p
          :class="[
            'text-gray-400 mt-4 transition-all duration-700 delay-300',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          ]"
        >
          欢迎联系我，期待与您的交流
        </p>
      </div>

      <div class="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
        <a
          v-for="(contact, index) in contactInfo"
          :key="contact.label"
          :href="contact.href"
          :class="[
            'bg-dark-700 rounded-xl p-6 text-center hover:bg-dark-600 transition-all duration-300 hover:scale-105 group',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          ]"
          :style="{ transitionDelay: `${index * 150 + 400}ms` }"
        >
          <div class="w-12 h-12 mx-auto mb-4 bg-dark-600 rounded-full flex items-center justify-center group-hover:bg-accent-500/20 transition-colors">
            <svg v-if="contact.icon === 'mail'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <svg v-else-if="contact.icon === 'github'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-accent-500" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .268.18.579.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
            </svg>
            <svg v-else-if="contact.icon === 'twitter'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-accent-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </div>
          <h3 class="text-white font-semibold mb-1">{{ contact.label }}</h3>
          <p class="text-gray-400 text-sm">{{ contact.value }}</p>
        </a>
      </div>
    </div>
  </section>
</template>
