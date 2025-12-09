import { IExperience } from "@/interfaces/IExperience";

export const EXPERIENCE: IExperience[] = [
  {
    id: 1,
    title: 'Индивидуальное предпринимательство / частная практика / фриланс',
    period: 'Февраль 2021 — сейчас (4 года 11 месяцев)',
    position: 'Frontend-разработчик',
    stack: [
      {
        id: 1, type: 'Технологии', value: 'Vue, React, TypeScript, Redux, Vite, SASS, GitLab CI/CD',
      },
      {
        id: 2, value: 'Разработка корпоративных и клиентских проектов (Nissan, Chery, TelePush).',
      },
      {
        id: 3, value: 'Ведение команды фронтенда, декомпозиция и оценка задач, контроль сроков.',
      },
      {
        id: 4, value: 'Команды: от 4 до 8 человек (Frontend, Backend, QA, DevOps, HR).',
      },
      {
        id: 5, type: 'Достижения', value: 'Опыт управления командой и выстраивания архитектуры, внедрил типизацию и CI/CD.',
      },
    ]
  },
  {
    id: 2,
    title: 'Совкомбанк',
    period: 'Июнь 2022 — Февраль 2025 (2 года 9 месяцев)',
    position: 'Frontend-разработчик',
    stack: [
      {
        id: 1, type: 'Технологии', value: 'Vue, Vuex, TypeScript, Vite, Nuxt, BEM',
      },
      {
        id: 2, value: 'Разработка внутренних систем документооборота.',
      },
      {
        id: 3, value: 'Миграция проекта с Vue 2 → Vue 3 и Nuxt → Vite.',
      },
      {
        id: 4, value: 'Создание DI-слоя и частичной FSD-архитектуры.',
      },
      {
        id: 5, value: 'Оптимизация структуры данных и ускорение интерфейсов.',
      },
      {
        id: 6, value: 'Команда: 7 Frontend, 8 Backend, 12 QA, 6 аналитиков.',
      },
      {
        id: 7, type: 'Достижения', value: 'Реализовал DI, внедрил FSD, улучшил архитектуру и скорость работы интерфейсов.',
      },
    ]
  },
  {
    id: 3,
    title: 'KIRA&ROCK',
    period: 'Июль 2021 — Ноябрь 2021 (5 месяцев)',
    position: 'Frontend-разработчик',
    stack: [
      {
        id: 1, type: 'Технологии', value: 'Vue, Vuetify, TypeScript, Sass, BEM, jQuery',
      },
      {
        id: 2, value: 'Разработка сайтов: ГТО, сайта компании, Artists.KZN.ru.',
      },
      {
        id: 3, value: 'Интеграция Яндекс.Карт, реализация расписания и бронирования площадок.',
      },
      {
        id: 4, value: 'Команда: 1 Frontend (я), 1 Backend, 1 HR.',
      },
      {
        id: 5, type: 'Достижения', value: 'Создал систему бронирования с кастомными метками и интеграцией с картами.',
      },
    ]
  },
  {
    id: 4,
    title: 'OОO Startted',
    period: 'Март 2021 — Август 2021 (6 месяцев)',
    position: 'Frontend-разработчик',
    stack: [
      {
        id: 1, type: 'Технологии', value: 'Vue, Vuex, Vuetify, Nuxt, Sass',
      },
      {
        id: 2, value: 'Онлайн-платформа OneLinks для размещения и покупки курсов.',
      },
      {
        id: 3, value: 'Разработка личного кабинета, чатов, комментариев и подписок.',
      },
      {
        id: 4, value: 'Подключение WebSocket и платёжных систем.',
      },
      {
        id: 5, value: 'Команда: 2 Frontend, 1 Backend, 1 HR, Team Lead.',
      },
      {
        id: 5, type: 'Достижения', value: 'Разработал систему чатов на WebSocket и оптимизировал обмен данными.',
      },
    ]
  },
  {
    id: 5,
    title: 'Schematus (US)',
    period: 'Апрель 2020 — Ноябрь 2020 (8 месяцев)',
    position: 'Frontend-разработчик',
    stack: [
      {
        id: 1, type: 'Технологии', value: 'React, Redux, CSS, Storybook',
      },
      {
        id: 2, value: 'Платформа для формирования технической документации.',
      },
      {
        id: 3, value: 'Разработка интерфейсов, интеграция с API, работа со Storybook.',
      },
      {
        id: 4, value: 'Команда: 3 человека (2 фронтенда и Team Lead).',
      },
    ]
  },
]