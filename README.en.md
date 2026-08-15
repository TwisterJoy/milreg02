[![Русский](https://img.shields.io/badge/русский-black)](./README.md)
[![English](https://img.shields.io/badge/english-blue)](./README.en.md)

# MilReg Frontend (milreg02)

Frontend of the military and personnel records system

## Tech Stack

- **Framework:** Quasar
- **Styling:** SCSS
- **Bundler:** Vite
- **Package Manager:** npm / yarn / pnpm

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v18.x or higher)
- npm / yarn / pnpm installed

## Getting started

1. Clone the repository:

   ```bash
   git clone https://github.com/TwisterJoy/milreg02.git
   ```

2. Navigate to the project directory:

   ```bash
   cd milreg02
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

   _(or `yarn install` / `pnpm install`)_

4. Set up environment variables:
   Create a `.env` file based on `.env.example` and fill in the required values.

5. Start the development server:
   ```bash
   quasar dev
   ```
   _(the app will open at `http://localhost:9000`)_

## Production Build

```bash
quasar build
```
