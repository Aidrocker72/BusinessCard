<template>
  <div class="contacts">
    <ScrollAnimation animation-type="fade-up">
      <h2>Контакты</h2>
      <p>Если у вас есть вопросы или предложения о сотрудничестве, пожалуйста, свяжитесь со мной:</p>
      
      <ul class="contacts__social-links" v-for="item in CONTACTS" :key="item.id">
        <li v-if="item.type === BlockTypeEnum.MAIL">
          <a :href="`mailto:${item.link}`">
            {{ item.value }}: {{ item.link }}
          </a>
        </li>
        <li v-else-if="item.type === BlockTypeEnum.LINK">
          <a :href="item.link" target="_blank">
            {{ item.value }}: {{ item.link }}
          </a>
        </li>
        <li v-else>
          <a :href="item.link" target="_blank">{{ item.value }}: {{ item.link }}</a>
        </li>
      </ul>
    </ScrollAnimation>
  </div>
</template>

<script setup>
import { CONTACTS } from '@/constants/contacts';
import ScrollAnimation from './ScrollAnimation.vue'
import { BlockTypeEnum } from '@/enums/BlocksTypeEnum';

defineOptions({
  name: 'Contacts'
})
</script>