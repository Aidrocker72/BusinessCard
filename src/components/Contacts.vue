<template>
  <div class="contacts">
    <ScrollAnimation animation-type="fade-up">
      <h2>Контакты</h2>
      <p>Если у вас есть вопросы или предложения о сотрудничестве, пожалуйста, свяжитесь со мной:</p>
      
      <ul class="contacts__social-links" v-for="{ id, type, link } in CONTACTS" :key="item.id">
        <template v-if="id !== 1">
          <li v-if="type === BlockTypeEnum.MAIL">
            <a :href="`mailto:${link}`">
              {{ value }}: {{ link }}
            </a>
          </li>
          <li v-else-if="type === BlockTypeEnum.LINK">
            <a :href="link" target="_blank">
              {{ value }}: {{ link }}
            </a>
          </li>
          <li v-else>
            <a :href="link" target="_blank">{{ value }}: {{ link }}</a>
          </li>
        </template>
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