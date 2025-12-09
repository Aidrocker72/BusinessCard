<template>
  <div class="experience">
    <scroll-animation animation-type="fade-up">
      <h2>Опыт работы</h2>
    </scroll-animation>

    <scroll-animation animation-type="fade-up" v-for="{id, title, period, position, stack } in EXPERIENCE">
      <div class="experience__job" :key="id">
        <h3>{{ title }}</h3>
        <p>{{ period }}</p>
        <h4>{{ position }}</h4>
        <ul v-for="stackItem in stack">
          <li v-if="stackItem.type" :key="stackItem.id">
            <strong>{{ stackItem.type }}</strong>: {{ stackItem.value }}
          </li>
          <li v-else>
            {{ stackItem.value }}
          </li>
        </ul>
      </div>
    </scroll-animation>
  </div>
</template>

<script setup>
import { EXPERIENCE } from '@/constants/experience';
import ScrollAnimation from '@/components/ScrollAnimation.vue'

defineOptions({
  name: 'Experience'
});
</script>
