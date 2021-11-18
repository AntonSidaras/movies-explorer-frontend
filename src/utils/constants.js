const areas = {
  areaMain: 'main',
  areaMovies: 'movies',
  areaSavedMovies: 'savedMovies',
  areaProfile: 'profile',
  areaAuth: 'auth',
};

const aboutMeText = {
  title: 'Студент',
  name: 'Антон',
  info: `Junior UI-developer, ${new Date().getFullYear() - 1994} лет`,
  description: `Я родился в Красноярске. Получил образование в области информационной безопасности и автоматизации производств. 
  Долгое время работал в Сибирском Федеральном Университете IT-эникейщиком, там же и преподавал на кафедре прикладной математики и компьютерной безопасности. 
  С программированием знаком с 2010 года, начинал с Pascal, затем был C++, Python, Java и даже Assembler.
  Полтора года назад решил уйти в веб-разработку, как в абсолютно неизвестную для меня область. Спустя полгода обучения
  в Яндекс.Практикуме сменил работу на разработчика веб-приложений в родном городе, а ещё через полгода получил Job Offer в американскую компанию EIS Group
  с филиалом в Санкт-Петербурге, теперь живу и работаю здесь. У меня есть любимая жена Полина и собака Майкл :)`,
  links: { vk: 'VK', git: 'Github' },
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

const authButtonText = {
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
}

const navTabText = {
  links: {
    movies: 'Фильмы',
    savedMovies: 'Сохранённые Фильмы'
  }
}

const portfolioText = {
  title: 'Поротфолио',
  textItem: {
    static: 'Статичный сайт',
    flex: 'Адаптивный сайт',
    app: 'Одностаничное приложение'
  }
}

const promoText = {
  title: 'Учебный проект студента факультета Веб-разработки.'
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

export {
  areas,
  aboutMeText,
  aboutProjectText,
  authButtonText,
  footerText,
  navTabText,
  portfolioText,
  promoText,
  techsText
}