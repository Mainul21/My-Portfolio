# My Portfolio

Personal website showcasing my skills, education, projects and experience.
Live: https://mainul-hossain-chisty.onrender.com/

## Introduction

Hello! I am **MD. MAINUL HOSSAIN CHISTY** – a Computer Science student and technology enthusiast with a passion for web development, machine learning, and competitive programming. This portfolio provides details about my educational background, skills, project work, and professional experience.

## Stack

- React 18 + Vite, styled with custom CSS (Tailwind base/utilities still imported in `src/index.css`)
- Canvas-rendered `TechText` headings
- Contact form via [Web3Forms](https://web3forms.com) (`VITE_WEB3FORMS_KEY`)
- Skills logos from [simple-icons](https://simpleicons.org) (CC0) in `src/skillIcons.js`
- Hosted on Render; GitHub Actions CI (lint + build, `.github/workflows/ci.yml`) gates Render auto-deploy
- Node 22

## Setup

```
git clone https://github.com/Mainul21/My-Portfolio.git
cd My-Portfolio
npm ci
cp .env.example .env   # set VITE_WEB3FORMS_KEY
npm run dev
```

Other scripts: `npm run build`, `npm run lint`.

`VITE_WEB3FORMS_KEY` is build-time: also set it in Render env vars and redeploy after changing it.

## License

MIT License, Copyright (c) 2023 Mainul21.
