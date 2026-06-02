<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { projects, type IProject } from '../data/projects';

const isVisible = ref(false);

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

  const element = document.getElementById('projects');
  if (element) {
    observer.observe(element);
  }
});

const handleCardClick = (project: IProject) => {
  window.open(project.link, '_blank');
};
</script>

<template>
  <section id="projects" class="py-24 bg-dark-900">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2
          :class="[
            'text-3xl sm:text-4xl font-bold text-white mb-4 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          ]"
        >
          项目展示
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
          以下是我参与开发的部分项目
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in projects"
          :key="project.id"
          :class="[
            'bg-dark-800 rounded-xl overflow-hidden transition-all duration-500 hover:scale-[1.02] cursor-pointer group',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          ]"
          :style="{ transitionDelay: `${index * 150 + 300}ms` }"
          @click="handleCardClick(project)"
        >
          <div class="relative overflow-hidden">
            <img
              :src="project.image"
              :alt="project.name"
              class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-white mb-2 group-hover:text-accent-500 transition-colors">
              {{ project.name }}
            </h3>
            <p class="text-gray-400 text-sm mb-4 line-clamp-2">
              {{ project.description }}
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.techStack"
                :key="tech"
                class="px-3 py-1 bg-dark-700 text-gray-300 text-xs rounded-full"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
