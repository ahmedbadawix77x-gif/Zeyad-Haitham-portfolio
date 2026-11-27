# Zeyad Haitham: Sales Portfolio

**A single-page professional portfolio for a sales and business-development student: hero, professional overview, experience, education, training and certificates, skills and languages, contact, and a print-ready resume view.**

![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white) ![Tailwind](https://img.shields.io/badge/Tailwind-06B6D4?logo=tailwindcss&logoColor=white)

## Features

- Sections: Hero, Professional Overview, Experience, Education, Training and Certifications, Skills and Languages, Contact.
- Resume modal designed for printing or saving as PDF.
- All content lives in one typed data file (`src/data/portfolioData.ts`), so updating the portfolio never touches the layout code.
- Responsive layout and a sticky navigation bar.

## Run locally

```bash
git clone https://github.com/ahmedbadawix77x-gif/Zeyad-Haitham-portfolio.git
cd Zeyad-Haitham-portfolio
npm install
npm run dev
npm run build
```

No API key is needed to run the site. `.env.example` only lists optional placeholders from the AI Studio template.

## Structure

```
src/
  components/   Hero, Navbar, Experience, Education, ...
  data/         portfolioData.ts (all content)
  types.ts      shared types
```

## Built by

[Ahmed Badawy](https://github.com/ahmedbadawix77x-gif) · [Portfolio](https://ahmed-badawy-portfolio.vercel.app)
