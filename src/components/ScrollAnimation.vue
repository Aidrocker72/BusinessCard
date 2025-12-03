<template>
  <div
    ref="elementRef" class="scroll-animation"
    :class="{ 'scroll-animation--animated': isAnimated }" :data-animation="animationType"
  >
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  animationType: {
    type: String,
    default: 'fade-up'
  }
})

const isAnimated = ref(false)
const elementRef = ref(null)
let observer = null

const initObserver = () => {
  if (!elementRef.value) return

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isAnimated.value = true
        if (observer && entry.target) {
          observer.unobserve(entry.target)
        }
      }
    })
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  })

  observer.observe(elementRef.value)
}

onMounted(() => {
  initObserver()
})

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect()
  }
})

defineOptions({
  name: 'ScrollAnimation'
})
</script>