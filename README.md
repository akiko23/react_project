# Каталог услуг компании "Сбербанк"

### Описание проекта
Просмотр всех услуг компании, недавних новостей, а также личного кабинета. В нем содержится персональная информация и данные по кредитной карте пользователя
### Структура проекта
```
CompanyServiceApp/
├── public/                 # Публичные файлы приложения
└── src/                    # Исходный код приложения
    ├── components/         # Компоненты React
    ├── layouts/            # Компоненты шаблонов
    ├── pages/              # Компоненты страниц проекта
    ├── store/              # Модули для работы с состоянием
    package.json            # Зависимости и скрипты проекта
    README.md               # Документация проекта
```

### Конвенция разработки
- Все компоненты называются с **большой буквы**;
- Лежат в **одноименной директории**;
- Именование папок компонентов в формате **main-page**;

### Наименование веток
- Для новых функций:
``feature/<название-задачи>``
- Для обновлений: ``update/<название-задачи>``
- Для добавления исправлений: ``hotfix/<название-задачи>``

### Наименование коммитов
- `feat` - добавление новой функциональности
- `fix` - исправление ошибок
- `refactor` - переработка кода
- `docs` - изменение документации
- `chore` - обновление зависимостей, настройка среды разработки
- `delete` - удаление файлов