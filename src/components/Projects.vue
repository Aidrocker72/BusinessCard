<template>
  <div class="projects">
    <scroll-animation animation-type="fade-up">
      <h2>Pet projects</h2>
      <p>Ниже представлены мои pet проекты, над которыми я работал в свободное время для развития навыков и экспериментов с новыми технологиями:</p>
    </scroll-animation>
    
    <div class="projects__list">
      <scroll-animation animation-type="fade-up">
        <div class="projects__item">
          <h3>Система управления задачами</h3>
          <p>Веб-приложение для управления личными и командными задачами с использованием Vue 3 и Pinia. Реализованы функции создания, редактирования и отслеживания задач, а также фильтрация и сортировка.</p>
          <ul>
            <li>Технологии: Vue 3, Pinia, Composition API, SCSS</li>
            <li>Особенности: Реализация архитектуры FSD, локальная типизация, система уведомлений</li>
            <li>GitHub: <a href="https://github.com/Aidrocker72" target="_blank">https://github.com/Aidrocker72</a></li>
          </ul>
        </div>
      </scroll-animation>
      
      <scroll-animation animation-type="fade-up">
        <div class="projects__item">
          <h3>Финансовый трекер</h3>
          <p>Приложение для отслеживания личных финансов и бюджета. Позволяет вести учет доходов и расходов, строить графики и анализировать траты.</p>
          <ul>
            <li>Технологии: Vue 3, TypeScript, Vuetify, IndexedDB</li>
            <li>Особенности: Локальное хранение данных, диаграммы и графики, система категорий расходов</li>
            <li>GitHub: <a href="https://github.com/Aidrocker72" target="_blank">https://github.com/Aidrocker72</a></li>
          </ul>
        </div>
      </scroll-animation>
      
      <scroll-animation animation-type="fade-up">
        <div class="projects__item">
          <h3>Мессенджер</h3>
          <p>Веб-мессенджер с поддержкой чатов, групповых бесед и отправки файлов. Реализована система авторизации и реал-тайм обмен сообщениями.</p>
          <ul>
            <li>Технологии: Vue 3, WebSocket, Vuex, Socket.io</li>
            <li>Особенности: Реал-тайм коммуникация, поддержка медиа-файлов, чаты и группы</li>
            <li>GitHub: <a href="https://github.com/Aidrocker72" target="_blank">https://github.com/Aidrocker72</a></li>
          </ul>
        </div>
      </scroll-animation>
    </div>
  </div>
</template>

<script setup>
import ScrollAnimation from './ScrollAnimation.vue'

defineOptions({
  name: 'Projects'
})
</script>