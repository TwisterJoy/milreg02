[![Русский](https://img.shields.io/badge/русский-blue)](./README.md)
[![English](https://img.shields.io/badge/english-black)](./README.en.md)

# MilReg Frontend (milreg02)

Frontend системы воинского и кадрового учета (общие и образовательные организации)

## Стек технологий

- **Фреймворк:** Quasar
- **Стилизация:** SCSS
- **Сборщик:** Vite
- **Менеджер пакетов:** npm / yarn / pnpm

## Требования

Перед началом убедитесь, что у вас установлены:

- Node.js (v18.x или новее)
- npm / yarn / pnpm

## Установка и запуск

1. Клонируйте репозиторий:

   ```bash
   git clone https://github.com/TwisterJoy/milreg02.git
   ```

2. Перейдите в папку проекта:

   ```bash
   cd milreg02
   ```

3. Установите зависимости:

   ```bash
   npm install
   ```

   _(или `yarn install` / `pnpm install`)_

4. Создайте файл `.env` на основе `.env.example` и заполните переменные окружения.

5. Запустите проект в режиме разработки:
   ```bash
   quasar dev
   ```
   _(приложение откроется на `http://localhost:9000`)_

## Сборка для продакшна

```bash
quasar build
```
