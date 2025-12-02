<template>
  <div class="contacts">
    <scroll-animation animation-type="fade-up">
      <h2>Контакты</h2>
      <p>Если у вас есть вопросы или предложения о сотрудничестве, пожалуйста, свяжитесь со мной:</p>
      
      <ul class="contacts__social-links">
        <li><a href="mailto:aydarmaximov@yandex.ru">Email: aydarmaximov@yandex.ru</a></li>
        <li><a href="https://github.com/Aidrocker72" target="_blank">GitHub: https://github.com/Aidrocker72</a></li>
        <li><a href="https://vk.com/id232037611" target="_blank">ВКонтакте: https://vk.com/id232037611</a></li>
        <li><a href="https://t.me/aidrocker" target="_blank">Telegram: https://t.me/aidrocker</a></li>
      </ul>
    </scroll-animation>
    
    <scroll-animation animation-type="fade-up">
      <h3>Основная информация</h3>
      <ul>
        <li>📍 Проживаю: Казань, Россия</li>
        <li>📧 Email: <a href="mailto:aydarmaximov@yandex.ru">aydarmaximov@yandex.ru</a></li>
        <li>💻 GitHub: <a href="https://github.com/Aidrocker72" target="_blank">https://github.com/Aidrocker72</a></li>
        <li>👨‍💻 ВКонтакте: <a href="https://vk.com/id232037611" target="_blank">https://vk.com/id232037611</a></li>
        <li>📱 Telegram: <a href="https://t.me/aidrocker" target="_blank">https://t.me/aidrocker</a></li>
      </ul>
    </scroll-animation>
  </div>
</template>

<script setup>
import ScrollAnimation from './ScrollAnimation.vue'

defineOptions({
  name: 'Contacts'
})
</script>