<template>
  <div class="projects">
    <ScrollAnimation animation-type="fade-up">
      <h2>Pet projects</h2>
      <p>Ниже представлены мои pet проекты, над которыми я работал в свободное время для развития навыков и экспериментов с новыми технологиями:</p>
    </ScrollAnimation>
    
    <div class="projects__list">
      <ScrollAnimation animation-type="fade-up">
        <div class="projects__item">
          <h3>Vue Mini CRM</h3>
          <p>Мини-приложение CRM (Customer Relationship Management) с открытым исходным кодом, разработанное с использованием современных технологий Vue.js, TypeScript и Vite. Демонстрирует лучшие практики разработки на Vue 3 с Composition API и модульной архитектурой.
          </p>
          <ul>
            <li>Технологии: Vue 3, TypeScript, Vite, Vue Router, Pinia, Sass</li>
            <li>Особенности: Управление клиентами и сделками, воронка продаж с drag-and-drop, панель управления, адаптивный дизайн, полная типизация, архитектура FSD</li>
            <li>GitHub: <a href="https://github.com/Aidrocker72/pet_project_crm" target="_blank">https://github.com/Aidrocker72/pet_project_crm</a></li>
            <li>Демо: <a href="https://aidrocker72.github.io/pet_project_crm" target="_blank">https://aidrocker72.github.io/pet_project_crm</a></li>
          </ul>
        </div>
      </ScrollAnimation>
    </div>
  </div>
</template>

<script setup>
import ScrollAnimation from './ScrollAnimation.vue'

defineOptions({
  name: 'Projects'
})
</script>