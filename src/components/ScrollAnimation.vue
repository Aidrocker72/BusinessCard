<template>
  <div
    ref="elementRef" class="scroll-animation"
    :class="{ 'scroll-animation--animated': isAnimated }" :data-animation="animationType"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { IScrollAnimation } from '@/interfaces/props/IScrollAnimation';

defineOptions({
  name: 'ScrollAnimation'
});

const { animationType = 'fade-up'} = defineProps<IScrollAnimation>();


const isAnimated = ref(false);
const elementRef = ref(null);
let observer: IntersectionObserver | null = null;

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
  });

  observer.observe(elementRef.value);
};

onMounted(() => {
  initObserver();
});

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>