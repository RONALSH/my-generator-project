<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { skills, type ISkill } from '../data/skills';

const isVisible = ref(false);
const skillCategories = [...new Set(skills.map(skill => skill.category))];

const getSkillsByCategory = (category: string): ISkill[] => {
  return skills.filter(skill => skill.category === category);
};

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

  const element = document.getElementById('about');
  if (element) {
    observer.observe(element);
  }
});
</script>

<template>
  <section id="about" class="py-24 bg-dark-800">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2
          :class="[
            'text-3xl sm:text-4xl font-bold text-white mb-4 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          ]"
        >
          关于我
        </h2>
        <div
          :class="[
            'w-24 h-1 bg-gradient-to-r from-accent-500 to-purple-500 mx-auto transition-all duration-700 delay-200',
            isVisible ? 'opacity-100 w-24' : 'opacity-0 w-0'
          ]"
        ></div>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div
          :class="[
            'transition-all duration-700 delay-300',
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          ]"
        >
          <div class="relative">
            <div class="absolute -inset-4 bg-gradient-to-r from-accent-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
            <div class="relative bg-dark-700 rounded-2xl p-1">
              <img
                src="https://neeko-copilot.bytedance.net/api/text2image?prompt=professional%20portrait%20of%20a%20software%20developer%20dark%20background&image_size=portrait_4_3"
                alt="Profile"
                class="w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </div>

        <div
          :class="[
            'transition-all duration-700 delay-500',
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          ]"
        >
          <h3 class="text-2xl font-semibold text-white mb-4">
            热爱技术的全栈开发者
          </h3>
          <p class="text-gray-400 mb-6 leading-relaxed">
            我是一名充满热情的软件开发者，拥有多年的 Web 开发经验。
            我热爱创造有意义的产品，专注于构建高性能、可扩展的应用程序。
            我相信技术可以改变世界，致力于用代码创造价值。
          </p>
          <p class="text-gray-400 mb-8 leading-relaxed">
            在工作中，我注重代码质量和团队协作，善于解决复杂问题，
            并始终保持学习新技术的热情。
          </p>

          <div class="grid grid-cols-3 gap-4">
            <div class="text-center p-4 bg-dark-700 rounded-lg">
              <div class="text-3xl font-bold text-accent-500">5+</div>
              <div class="text-gray-400 text-sm">年开发经验</div>
            </div>
            <div class="text-center p-4 bg-dark-700 rounded-lg">
              <div class="text-3xl font-bold text-accent-500">50+</div>
              <div class="text-gray-400 text-sm">完成项目</div>
            </div>
            <div class="text-center p-4 bg-dark-700 rounded-lg">
              <div class="text-3xl font-bold text-accent-500">10+</div>
              <div class="text-gray-400 text-sm">技术栈</div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-20">
        <h3
          :class="[
            'text-2xl font-semibold text-white text-center mb-10 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          ]"
        >
          技能栈
        </h3>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="category in skillCategories"
            :key="category"
            :class="[
              'bg-dark-700 rounded-xl p-6 transition-all duration-500 hover:bg-dark-600',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            ]"
            :style="{ transitionDelay: `${skillCategories.indexOf(category) * 100 + 700}ms` }"
          >
            <h4 class="text-white font-semibold mb-4">{{ category }}</h4>
            <div class="space-y-3">
              <div v-for="skill in getSkillsByCategory(category)" :key="skill.name">
                <div class="flex justify-between text-sm mb-1">
                  <span class="text-gray-300">{{ skill.name }}</span>
                  <span class="text-accent-500">{{ skill.level }}%</span>
                </div>
                <div class="h-1.5 bg-dark-600 rounded-full overflow-hidden">
                  <div
                    class="h-full bg-gradient-to-r from-accent-500 to-purple-500 rounded-full transition-all duration-1000"
                    :style="{ width: `${skill.level}%` }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
