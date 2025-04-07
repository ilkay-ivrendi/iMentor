# iMentor — AI-Powered E-Learning Platform

iMentor is a modern web-based educational platform built with Angular 19 and powered by AI. It provides an immersive learning experience through a virtual 3D teacher, personalized lessons, and student analytics. Designed for students, teachers, and parents, it combines intelligent learning with real-time tracking and communication.

[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)
![Angular](https://img.shields.io/badge/Angular-19-red)
![Contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen)
![Status](https://img.shields.io/badge/status-alpha-orange)

## 🚀 Features

- 🧑‍🏫 3D model-based virtual AI teacher
- 💬 Chatbox for interactive learning and Q&A
- 📚 Student dashboard with recommended lessons
- 📊 Teacher tools to assign & monitor progress
- 🧠 Skill & strength analysis for students
- 👨‍👩‍👧 Parental access to learning analytics
- 🔐 Auth system (login, register, forgot password)
- 🧱 Built with Angular 19, Angular Material, Flex Layout, SSR support

## 🧰 Tech Stack

- **Frontend:** Angular 19, Angular Material, Flex Layout, RxJS
- **SSR:** Angular Universal
- **AI Backend:** Ollama (LLaMA3 / Mistral) running on Docker
- **3D Rendering:** Three.js + Mixamo models
- **Authentication:** JWT-based AuthService with Role Guard
- **Storage:** LocalStorage (SSR-safe wrapper)

## 📦 Setup

```bash
git clone https://github.com/your-username/iMentor.git
cd iMentor

# Install dependencies
npm install

# Start dev server
npm run dev

# Start with SSR
npm run build:ssr && npm run serve:ssr