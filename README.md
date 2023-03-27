# 🚀 amoCRM Full Stack Application 🌐
Это полноценное приложение для работы с данными amoCRM, состоящее из фронтенд и бэкенд частей. Фронтенд отображает сделки, воронки и ответственных пользователей из amoCRM, а бэкенд предоставляет API для взаимодействия с данными amoCRM.

## 📁 Структура проекта
```bash
.
├── backend
│   ├── controllers
│   ├── src
│   ├── utils
│   ├── .gitignore
│   ├── README.md
│   ├── package-lock.json
│   ├── package.json
│   └── tsconfig.json
├── frontend
│   ├── public
│   ├── src
│   ├── .gitignore
│   ├── README.md
│   ├── package-lock.json
│   ├── package.json
│   └── tsconfig.json
└── README.md

```
## 🚀 Backend: amoCRM Leads API
Express.js сервер на TypeScript для получения сделок из amoCRM по API. [Подробнее](https://github.com/auroraptor/march-22/tree/main/backend)

## 🌐 Frontend: amoCRM Frontend Application
Фронтенд-часть приложения для отображения сделок, воронок и ответственных пользователей из amoCRM. Создано с использованием технологий, таких как React, TypeScript и Ant Design. [Подробнее](https://github.com/auroraptor/march-22/tree/main/frontend)

## 🛠️ Технологии
- React
- TypeScript
- Ant Design
- Axios
- Express.js
## 📦 Запуск приложения
**Backend**
1. Перейдите в папку backend
2. Установите зависимости: `npm install`
3. Запустите сервер в режиме разработки: `npm run start`
4. Соберите проект: `npm run build`
5. Запустите собранный проект: `npm run serve`

**Frontend**
1. Перейдите в папку `frontend`
2. Установите зависимости: `npm install`
3. Запустите приложение в режиме разработки: `npm start`
4. Соберите приложение для продакшн: `npm run build`
##
⚠️ Пожалуйста, убедитесь, что вы заменили `YOUR_API_KEY`, `YOUR_SUBDOMAIN` и другие параметры на реальные данные для вашего аккаунта amoCRM в файле конфигурации бэкенда.