<template>
  <div class="experience">
    <scroll-animation animation-type="fade-up">
      <h2>Опыт работы</h2>
    </scroll-animation>

    <scroll-animation animation-type="fade-up">
      <div class="experience__job">
        <h3>Индивидуальное предпринимательство / частная практика / фриланс</h3>
        <p>Февраль 2021 — сейчас (4 года 11 месяцев)</p>
        <h4>Frontend-разработчик</h4>
        <ul>
          <li><strong>Технологии</strong>: Vue, React, TypeScript, Redux, Vite, SASS, GitLab CI/CD</li>
          <li>Разработка корпоративных и клиентских проектов (Nissan, Chery, TelePush).</li>
          <li>Ведение команды фронтенда, декомпозиция и оценка задач, контроль сроков.</li>
          <li>Внедрение TypeScript, CI/CD и архитектурных подходов.</li>
          <li>Команды: от 4 до 8 человек (Frontend, Backend, QA, DevOps, HR).</li>
        </ul>
        <p><strong>Достижения</strong>: Опыт управления командой и выстраивания архитектуры, внедрил типизацию и CI/CD.</p>
      </div>
    </scroll-animation>

    <scroll-animation animation-type="fade-up">
      <div class="experience__job">
        <h3>Совкомбанк</h3>
        <p>Июнь 2022 — Февраль 2025 (2 года 9 месяцев)</p>
        <h4>Frontend-разработчик</h4>
        <ul>
          <li><strong>Технологии</strong>: Vue, Vuex, TypeScript, Vite, Nuxt, BEM</li>
          <li>Разработка внутренних систем документооборота.</li>
          <li>Миграция проекта с Vue 2 → Vue 3 и Nuxt → Vite.</li>
          <li>Создание DI-слоя и частичной FSD-архитектуры.</li>
          <li>Оптимизация структуры данных и ускорение интерфейсов.</li>
          <li>Команда: 7 Frontend, 8 Backend, 12 QA, 6 аналитиков.</li>
        </ul>
        <p><strong>Достижения</strong>: Реализовал DI, внедрил FSD, улучшил архитектуру и скорость работы интерфейсов.</p>
      </div>
    </scroll-animation>

    <scroll-animation animation-type="fade-up">
      <div class="experience__job">
        <h3>KIRA&ROCK</h3>
        <p>Июль 2021 — Ноябрь 2021 (5 месяцев)</p>
        <h4>Frontend-разработчик</h4>
        <ul>
          <li><strong>Технологии</strong>: Vue, Vuetify, TypeScript, Sass, BEM, jQuery</li>
          <li>Разработка сайтов: ГТО, сайта компании, Artists.KZN.ru.</li>
          <li>Интеграция Яндекс.Карт, реализация расписания и бронирования площадок.</li>
          <li>Команда: 1 Frontend (я), 1 Backend, 1 HR.</li>
        </ul>
        <p><strong>Достижения</strong>: Создал систему бронирования с кастомными метками и интеграцией с картами.</p>
      </div>
    </scroll-animation>

    <scroll-animation animation-type="fade-up">
      <div class="experience__job">
        <h3>OОO Startted</h3>
        <p>Март 2021 — Август 2021 (6 месяцев)</p>
        <h4>Frontend</h4>
        <ul>
          <li><strong>Технологии</strong>: Vue, Vuex, Vuetify, Nuxt, Sass</li>
          <li>Онлайн-платформа OneLinks для размещения и покупки курсов.</li>
          <li>Разработка личного кабинета, чатов, комментариев и подписок.</li>
          <li>Подключение WebSocket и платёжных систем.</li>
          <li>Команда: 2 Frontend, 1 Backend, 1 HR, Team Lead.</li>
        </ul>
        <p><strong>Достижения</strong>: Разработал систему чатов на WebSocket и оптимизировал обмен данными.</p>
      </div>
    </scroll-animation>

    <scroll-animation animation-type="fade-up">
      <div class="experience__job">
        <h3>LLC 'Tatneft'</h3>
        <p>Июнь 2020 — Ноябрь 2020 (6 месяцев)</p>
        <h4>Assistant Chief Accountant</h4>
        <ul>
          <li>Помощь в сборе данных. Изучение основных финансовых транзакций в организации.</li>
        </ul>
      </div>
    </scroll-animation>

    <scroll-animation animation-type="fade-up">
      <div class="experience__job">
        <h3>Schematus (US)</h3>
        <p>Апрель 2020 — Ноябрь 2020 (8 месяцев)</p>
        <h4>Software Engineer (Frontend)</h4>
        <ul>
          <li><strong>Технологии</strong>: React, Redux, CSS, Storybook</li>
          <li>Платформа для формирования технической документации.</li>
          <li>Разработка интерфейсов, интеграция с API, работа со Storybook.</li>
          <li>Команда: 3 человека (2 фронтенда и Team Lead).</li>
        </ul>
      </div>
    </scroll-animation>

    <scroll-animation animation-type="fade-up">
      <div class="experience__job">
        <h3>Department of the Federal Treasury for RT</h3>
        <p>Февраль 2019 — Февраль 2019 (1 месяц)</p>
        <h4>Assistant to the head of the treasury support department</h4>
        <ul>
          <li>Помощь в сборе данных. Изучение основных финансовых транзакций в организации.</li>
        </ul>
      </div>
    </scroll-animation>
  </div>
</template>

<script setup>
import ScrollAnimation from './ScrollAnimation.vue'

defineOptions({
  name: 'Experience'
})
</script>
