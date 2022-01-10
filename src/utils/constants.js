const toSocial = {
  vk: 'https://vk.com/antonsidaras',
  git: 'https://github.com/AntonSidaras'
}

const moviesServerRoot = 'https://api.nomoreparties.co';
const mainApiServerRoot = 'https://api.movies.asidaras.ru';

const appRoutes = {
  root: '/',
  content: {
    movies: '/movies',
    savedMovies: '/saved-movies',
  },
  profile: '/profile',
  auth: {
    signIn: '/signin',
    signUp: '/signup',
  },
  any: '*'
}

const areas = {
  areaMain: 'main',
  areaMovies: 'movies',
  areaSavedMovies: 'saved-movies',
  areaProfile: 'profile',
  areaAuth: 'auth',
};

const appInitValues = {
  user: {
    _id: '',
    email: '',
    name: ''
  }
}

const aboutMeText = {
  title: 'Студент',
  name: 'Антон',
  info: `Junior UI-developer, ${new Date().getFullYear() - 1994} лет`,
  description: `Я родился в Красноярске. Получил образование в области информационной безопасности и автоматизации производств. 
  Долгое время работал IT-эникейщиком. Полтора года назад решил уйти в веб-разработку, как в абсолютно неизвестную для меня область. 
  Спустя полгода обучения в Яндекс.Практикуме сменил профессию в родном городе, а ещё через полгода получил Job Offer 
  в американскую компанию EIS Group с филиалом в Санкт-Петербурге, теперь живу и работаю здесь. У меня есть любимая жена Полина и собака Майкл.`,
  links: {
    vk: 'VK',
    git: 'Github'
  },
  to: {
    vk: toSocial.vk,
    git: toSocial.git
  },
  alt: 'Portrait of Anton Sidaras'
}

const aboutProjectText = {
  title: 'О проекте',
  subtitle: {
    stages: 'Дипломный проект включал 5 этапов',
    duration: 'На выполнение диплома ушло 5 недель'
  },
  text: {
    plan: 'Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.',
    deadline: 'У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.'
  },
  weeks: {
    one: '1 неделя',
    four: '4 недели'
  },
  stack: {
    back: 'Back-end',
    front: 'Front-end'
  },
}

const authButtonsText = {
  signUp: 'Регистрация',
  signIn: 'Войти'
}

const footerText = {
  title: 'Учебный проект Яндекс.Практикум х BeatFilm.',
  copyright: `${new Date().getFullYear()}`,
  links: {
    yandex: 'Яндекс.Практикум',
    vk: 'VK',
    git: 'Github'
  },
  to: {
    yandex: 'https://practicum.yandex.ru',
    vk: toSocial.vk,
    git: toSocial.git
  }
}

const headerText = {
  alt: 'Логотип проекта Movies Explorer'
}

const localStorageKeys = {
  moviesCards: 'moviesCards',
  moviesCardsSearched: 'moviesCardsSearched',
  moviesCardsVisible: 'moviesCardsVisible',
  moviesCardsSaved: 'moviesCardsSaved',
  filterCkeckboxSatate: 'filterCkeckboxSatate',
  filterCkeckboxSavedSatate: 'filterCkeckboxSavedSatate',
  position: 'position',
  user: 'user',
  jwt: 'jwt'
}

const loginText = {
  title: 'Рады видеть!',
  captions: {
    email: 'E-mail',
    password: 'Пароль'
  },
  errorText: 'Что-то пошло не так...',
  buttonText: 'Войти',
  text: 'Ещё не зарегистрированы?',
  singUpText: 'Регистрация'
}

const navText = {
  links: {
    root: 'Главная',
    movies: 'Фильмы',
    savedMovies: 'Сохранённые Фильмы'
  }
}

const notFoundText = {
  title: '404',
  text: 'Страница не найдена',
  backLink: 'Назад'
}

const moviesCardAlt = 'Постер фильма';

const moviesCardListText = {
  buttonMoreText: 'Ещё'
}

const portfolioText = {
  title: 'Портфолио',
  textItem: {
    static: 'Статичный сайт',
    flex: 'Адаптивный сайт',
    app: 'Одностраничное приложение'
  },
  to: {
    static: 'https://github.com/AntonSidaras/how-to-learn',
    flex: 'https://antonsidaras.github.io/russian-travel/',
    app: 'https://asidaras.mesto.nomoredomains.club/sign-in'
  }
}

const profileText = {
  title: 'Привет, ',
  placeholders: {
    name: 'Имя',
    email: 'E-mail'
  },
  editButtonText: 'Редактировать',
  logoutButtonText: 'Выйти из аккаунта'
}

const promoText = {
  title: 'Учебный проект студента факультета Веб-разработки.'
}

const registerText = {
  title: 'Добро пожаловать!',
  captions: {
    name: 'Имя',
    email: 'E-mail',
    password: 'Пароль'
  },
  errorText: 'Что-то пошло не так...',
  buttonText: 'Зарегистрироваться',
  text: 'Уже зарегистрированы?',
  singInText: 'Войти'
}

const searchFormText = {
  placeholder: 'Фильм',
  checkbox: 'Короткометражки'
}

const techsText = {
  title: 'Технологии',
  mainTitle: '7 технологий',
  description: 'На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.',
  items: {
    html: 'HTML',
    css: 'CSS',
    js: 'JS',
    react: 'React',
    git: 'Git',
    express: 'Express.js',
    mongo: 'mongoDB'
  }
}

const defaultLoginTooltipData = {
  title: '',
  texts: [''],
  image: ''
}

export {
  moviesServerRoot,
  mainApiServerRoot,
  appRoutes,
  areas,
  appInitValues,
  aboutMeText,
  aboutProjectText,
  authButtonsText,
  headerText,
  footerText,
  localStorageKeys,
  loginText,
  navText,
  notFoundText,
  moviesCardAlt,
  moviesCardListText,
  portfolioText,
  profileText,
  promoText,
  registerText,
  searchFormText,
  techsText,
  defaultLoginTooltipData
}