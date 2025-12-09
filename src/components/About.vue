<template>
  <div class="about">
    <scroll-animation animation-type="fade-up">
      <div class="about__profile-header about__profile-header--centered">
        <div class="about__profile-picture">
          <img src="/photo.jpg" alt="Айдар Максимов">
        </div>
        <template v-for="item in PERSON">
          <h1 v-if="item.name === 'name'" :key="item.id">
            {{ item.value }}
          </h1>
          <p v-else-if="item.name === 'position'">
            {{ item.value }}
          </p>
          <p v-else-if="item.type === 'link'">
            {{ item.name }}
            <a :href="item.value">
              {{ item.value }}
            </a>
          </p>
        </template>
      </div>
    </scroll-animation>
    
    <scroll-animation animation-type="fade-up">
      <section class="about__content">
        <h2>О себе</h2>
        <p>Привет! Меня зовут <strong>Максимов Айдар</strong>, я Frontend-разработчик с опытом работы более 4 лет. Специализируюсь на разработке веб-приложений с использованием современных технологий.</p>
        
        <h3>Личная информация</h3>
        <ul v-for="item in CONTACTS">
          <li v-if="!item.type" :key="item.id">
            {{ item.icon }} {{ item.value }}
          </li>
          <li v-else-if="item.type === BlockTypeEnum.MAIL">
            {{ item.icon }} {{ item.value }}: 
            <a :href="`mailto: ${item.link}`">
              {{ item.link }}
            </a>
          </li>
          
          <li v-else>{{ item.icon }} {{ item.value }}: 
            <a :href="item.link" target="_blank">
              {{ item.value }}
            </a>
          </li>
        </ul>
        
        <h3>Образование</h3>
        <div class="about__education">
          <div class="about__education-item" v-for="item in EDUCATION" :key="item.id">
            <h4>{{ item.value }}</h4>
            <p>{{ item.specialization }}</p>
            <p>{{ item.year }} · {{ item.level }}</p>
          </div>
        </div>
        
        <h3>Повышение квалификации</h3>
        <ul>
          <li v-for="item in COURSES" :key="item.id">
            <strong>{{ item.value }}</strong>
            {{ item.year }}
          </li>
        </ul>
        
        <h3>Личные качества</h3>
        <ul>
          <li v-for="item in PERSON_QUALITIES" :key="item">
            {{ item }}
          </li>
        </ul>
        
        <h3>Хобби</h3>
        <ul>
          <li v-for="item in HOBBY" :key="item">
            {{ item }}
          </li>
        </ul>
        
        <h3>Знание языков</h3>
        <ul>
          <li v-for="item in LANGUAGES" :key="item.id">
            <strong>{{ item.value }}</strong>: 
            {{ item.level }}
          </li>
        </ul>
      </section>
    </scroll-animation>
  </div>
</template>

<script setup lang="ts">
import ScrollAnimation from '@/components/ScrollAnimation.vue';
import { CONTACTS } from '@/constants/contacts';
import { COURSES } from '@/constants/courses';
import { EDUCATION } from '@/constants/education';
import { HOBBY } from '@/constants/hobby';
import { LANGUAGES } from '@/constants/languages';
import { PERSON } from '@/constants/person';
import { PERSON_QUALITIES } from '@/constants/personal-qualities';
import { BlockTypeEnum } from '@/enums/BlocksTypeEnum';

defineOptions({
  name: 'About'
});
</script>