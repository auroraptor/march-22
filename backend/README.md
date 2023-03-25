# 🚀 amoCRM Leads API Backend

Express.js сервер на TypeScript для получения сделок из amoCRM по API.

## 📦 Запуск сервера

1. Установите зависимости:

```bash
npm install
```

2. Запустите сервер в режиме разработки:

```bash
npm run start
```

3. Для сборки проекта выполните: 

```bash
npm run build
```

4. Для запуска собранного проекта: 

```bash
npm run serve
```

## 🔍 Пример запроса

Для получения сделок, отправьте GET-запрос на эндпоинт /api/leads.

`GET http://YOUR_HOST:PORT/api/leads`

Для фильтрации сделок, добавьте GET-параметр query. 

`GET http://YOUR_HOST:PORT/api/leads?query=example`

##

⚠️ Пожалуйста, убедитесь, что вы заменили `YOUR_API_KEY`, `YOUR_SUBDOMAIN` и другие параметры на реальные данные для вашего аккаунта amoCRM в файле конфигурации.