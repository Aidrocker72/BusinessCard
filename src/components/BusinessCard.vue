<template>
  <div class="business-card">
    <header class="profile-header animate__animated animate__fadeInUp">
      <div class="profile-picture">
        <img src="../assets/images/ava.jpg" alt="Profile Picture" />
        <div class="contact-info">
          <p>Email: {{ email }}</p>
        </div>
      </div>
      <h1>{{ fullName }}</h1>
      <p>Software Engineer (Frontend)</p>
    </header>

    <section class="experience animate__animated animate__fadeInUp">
      <h2 class="animate__animated animate__fadeInUp">Опыт работы</h2>
      <div v-for="(job, index) in experience" :key="index" class="job animate__animated animate__fadeInUp">
        <article>
          <h3>{{ job.position }} - {{ job.company }}</h3>
          <p>{{ job.duration }}</p>
          <ul class="task-list">
            <li v-for="(task, taskIndex) in job.tasks" :key="taskIndex">{{ task }}</li>
          </ul>
        </article>
      </div>
    </section>

    <section class="skills">
      <h2>Навыки</h2>
      <ul class="skill-list">
        <li v-for="(skill, skillIndex) in skills" :key="skillIndex" class="animate__animated animate__fadeIn">{{ skill }}</li>
      </ul>
    </section>

    <footer class="social-footer animate__animated">
      <h2>Социальные сети</h2>
      <ul class="social-links">
        <li><a :href="githubUrl">GitHub</a></li>
        <li><a :href="vkUrl">ВКонтакте</a></li>
        <li><a :href="tgUrl">Telegram</a></li>
      </ul>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BusinessCard',
  data() {
    return {
      fullName: 'Максимов Айдар',
      email: 'aydarmaximov@yandex.ru',
      phone: '+7 (900) 3205457',
      tgUrl: 'https://t.me/aidrocker',
      githubUrl: 'https://github.com/Aidrocker72',
      vkUrl: 'https://vk.com/id232037611',
      experience: [
        {
          position: 'Frontend-разработчик',
          company: 'Совкомбанк',
          duration: 'Июнь 2022 — Февраль 2025 (2 года 8 месяцев)',
          tasks: [
            'Разработка внутренних систем для документооборота.',
            'Автоматизация систем.',
            'Верстка компонентов.',
            'Разработка HOC.'
          ]
        },
        {
          position: 'Frontend-разработчик',
          company: 'Индивидуальное предпринимательство / частная практика / фриланс',
          duration: 'Февраль 2021 — Июнь 2022 (1 год 5 месяцев)',
          tasks: [
            'Верстка компонентов.',
            'Участие в разработке страницы для компании Chery',
            'Участие в разработке внутреней системы для компании Nissan.',
          ]
        },
        {
          position: 'Frontend-разработчик',
          company: 'Kira&Rock',
          duration: 'Июль 2021 — Ноябрь 2021 (5 месяцев)',
          tasks: [
            'Переносил php проект на Vue.',
            'Обработкой данных.',
            'Верстка компонентов.',
            'Рефакторинг кода.'
          ]
        },
      ],
      skills: [
        'HTML5', 'CSS3', 'JavaScript', 'Material UI', 'Sass', 'Mobx', 'Vue', 'Vuex', 'Nuxt', 'БЭМ', 
        'TypeScript', 'vite', 'Vuetify', 'Composition API', 'DI', 'Git', 'REST API', 'Jira', 'Figma'
      ],
    };
  }
});
</script>

<style lang="scss">
.business-card {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;

  text-align: left;

  .profile-header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .profile-picture {
      display: flex;
      flex-direction: column;
      align-items: center;
      align-self: center;
      margin-bottom: 20px;

      img {
        width: 100%;
        max-width: 200px;
        border-radius: 50%;
        margin-bottom: 10px;
      }

      .contact-info {
        p {
          margin: 5px 0;
          font-size: 14px;
        }
      }
    }

    h1 {
      font-size: 2em;
      margin-bottom: 10px;
    }

    p {
      color: #666;
      margin: 5px 0;
    }
  }

  section {
    margin-top: 20px;
    border-top: 1px solid #ccc;
    padding-top: 10px;

    h2 {
      font-size: 1.5em;
      margin-bottom: 10px;
    }

    article {
      margin-bottom: 20px;

      h3 {
        font-size: 1.2em;
        margin-bottom: 5px;
      }

      p {
        color: #888;
        margin: 5px 0;
      }

      ul.task-list {
        list-style: disc;
        padding-left: 20px;
      }
    }

    .skill-list {
      display: flex;
      flex-wrap: wrap;

      li {
        margin: 5px;
        padding: 5px 10px;
        background-color: #e0e0e0;
        border-radius: 15px;
        transition: transform 0.3s ease;
      }

      li:hover {
        transform: scale(1.1);
      }
    }
  }

  footer.social-footer {
    margin-top: 20px;
    border-top: 1px solid #ccc;
    padding-top: 10px;

    h2 {
      font-size: 1.5em;
      margin-bottom: 10px;
    }

    ul.social-links {
      list-style: none;
      padding: 0;

      li {
        margin: 5px 0;

        a {
          color: #007bff;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  @media (max-width: 600px) {
    padding: 10px;

    .profile-picture img {
      width: 100%;
      max-width: 150px;
    }

    h1 {
      font-size: 1.5em;
    }

    .skill-list {
      flex-direction: column;
      align-items: center;
    }
  }
}


@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');
</style>