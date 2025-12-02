<template>
  <div class="skills">
    <scroll-animation animation-type="fade-up">
      <h2>Навыки</h2>
    </scroll-animation>

    <scroll-animation animation-type="fade-up" v-for="(level, index) in skillLevels" :key="index">
      <h3>{{ level.title }}</h3>
      <div class="skills__chips">
        <span v-for="(skill, idx) in level.items" :key="idx" class="skills__chip">{{ skill }}</span>
      </div>
    </scroll-animation>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import ScrollAnimation from './ScrollAnimation.vue'

defineOptions({
  name: 'Skills'
})

const skillLevels = reactive([
  {
    title: 'Средний уровень',
    items: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Material UI',
      'Sass',
      'Vue',
      'Nuxt',
      'БЭМ',
      'TypeScript',
      'Vuetify',
      'Composition API',
      'Git',
      'REST API',
      'Jira',
      'Figma',
      'React',
      'Redux',
      'ООП',
      'Делегирование',
      'Декомпозиция бизнес-процессов',
      'Next.js',
      'Postman',
      'UI',
      'BEM',
      'Flex',
      'Pinia',
      'Jest',
      'React-query',
      'CI/CD',
      'OpenAI',
    ]
  },
])
</script>