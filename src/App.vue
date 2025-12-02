<template>
  <div class="app__container">
    <nav class="app__navbar">
      <router-link to="/about" class="app__navbar-link">О себе</router-link>
      <router-link to="/skills" class="app__navbar-link">Навыки</router-link>
      <router-link to="/experience" class="app__navbar-link">Опыт работы</router-link>
      <!-- <router-link to="/projects" class="app__navbar-link">Pet projects</router-link> -->
      <router-link to="/contacts" class="app__navbar-link">Контакты</router-link>
    </nav>
    <main class="app__main-content">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>
 </div>
</template>

<script setup>
defineOptions({
  name: 'App'
})
</script>