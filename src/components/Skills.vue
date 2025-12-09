<template>
  <div class="skills">
    <scroll-animation animation-type="fade-up">
      <h2>Навыки</h2>
    </scroll-animation>

    <scroll-animation animation-type="fade-up" v-for="(level, index) in SKILLS" :key="index">
      <h3>{{ level.title }}</h3>
      <div class="skills__chips">
        <span v-for="(skill, idx) in level.items" :key="idx" class="skills__chip">{{ skill }}</span>
      </div>
    </scroll-animation>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import ScrollAnimation from '@/components/ScrollAnimation.vue';
import { SKILLS } from '@/constants/skills';

defineOptions({
  name: 'Skills'
});
</script>