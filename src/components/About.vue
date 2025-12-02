<template>
  <div class="about">
    <scroll-animation animation-type="fade-up">
      <div class="about__profile-header about__profile-header--centered">
        <div class="about__profile-picture">
          <img src="/photo.jpg" alt="Айдар Максимов">
        </div>
        <h1>Максимов Айдар</h1>
        <p>Frontend-разработчик (Middle)</p>
        <p>Email: <a href="mailto:aydarmaximov@yandex.ru">aydarmaximov@yandex.ru</a></p>
      </div>
    </scroll-animation>
    
    <scroll-animation animation-type="fade-up">
      <section class="about__content">
        <h2>О себе</h2>
        <p>Привет! Меня зовут <strong>Максимов Айдар</strong>, я Frontend-разработчик с опытом работы более 4 лет. Специализируюсь на разработке веб-приложений с использованием современных технологий.</p>
        
        <h3>Личная информация</h3>
        <ul>
          <li>📍 Проживаю: Казань, Россия</li>
          <li>📧 Email: <a href="mailto:aydarmaximov@yandex.ru">aydarmaximov@yandex.ru</a></li>
          <li>💻 GitHub: <a href="https://github.com/Aidrocker" target="_blank">https://github.com/Aidrocker72</a></li>
          <li>👨‍💻 ВКонтакте: <a href="https://vk.com/id232037611" target="_blank">https://vk.com/id232037611</a></li>
        </ul>
        
        <h3>Образование</h3>
        <div class="about__education">
          <div class="about__education-item">
            <h4>Казанский (Приволжский) федеральный университет, Казань</h4>
            <p>Программная инженерия</p>
            <p>2021 · Магистр</p>
          </div>
          
          <div class="about__education-item">
            <h4>Казанский (Приволжский) федеральный университет, Казань</h4>
            <p>Финансовый менеджмент</p>
            <p>2019 · Бакалавр</p>
          </div>
        </div>
        
        <h3>Повышение квалификации</h3>
        <ul>
          <li><strong>IT PARK, Frontend</strong> (2019)</li>
        </ul>
        
        <h3>Личные качества</h3>
        <ul>
          <li>Внимательность</li>
          <li>Тщательность</li>
          <li>Эффективность</li>
          <li>Ответственность</li>
        </ul>
        
        <h3>Хобби</h3>
        <ul>
          <li>Изучение языков</li>
          <li>Чтение книг</li>
          <li>Разработка веб-приложений</li>
          <li>Сноубординг</li>
        </ul>
        
        <h3>Знание языков</h3>
        <ul>
          <li><strong>Русский</strong>: Родной</li>
          <li><strong>Английский</strong>: B1 (Средний)</li>
        </ul>
      </section>
    </scroll-animation>
  </div>
</template>

<script setup>
import ScrollAnimation from './ScrollAnimation.vue'

defineOptions({
  name: 'About'
})
</script>