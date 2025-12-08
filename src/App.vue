<template>
  <div class="app__container">
    <nav class="app__navbar">
      <div class="app__navbar-menu-icon" @click="toggleMenu" v-if="isMobile">
        <span :class="['app__navbar-menu-line', {'app__navbar-menu-line--open': menuOpen}]"></span>
        <span :class="['app__navbar-menu-line', {'app__navbar-menu-line--open': menuOpen}]"></span>
        <span :class="['app__navbar-menu-line', {'app__navbar-menu-line--open': menuOpen}]"></span>
      </div>
      
      <div :class="['app__navbar-links', {'app__navbar-links--open': menuOpen}]">
        <router-link to="/about" class="app__navbar-link" @click="closeMenu">
          О себе
        </router-link>
        <router-link to="/skills" class="app__navbar-link" @click="closeMenu">
          Навыки
        </router-link>
        <router-link to="/experience" class="app__navbar-link" @click="closeMenu">
          Опыт работы
        </router-link>
        <router-link to="/projects" class="app__navbar-link" @click="closeMenu">
          Pet projects
        </router-link>
        <router-link to="/contacts" class="app__navbar-link" @click="closeMenu">
          Контакты
        </router-link>
      </div>
    </nav>
    <main class="app__main-content">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

defineOptions({
  name: 'App'
})

const menuOpen = ref(false)
const isMobile = ref(false)
const resizeHandler = () => {
  isMobile.value = window.innerWidth <= 768
  if (!isMobile.value) {
    menuOpen.value = false
  }
}

onMounted(() => {
  resizeHandler()
  window.addEventListener('resize', resizeHandler)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeHandler)
})

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}
</script>