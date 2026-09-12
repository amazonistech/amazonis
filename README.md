# Amazonis

Official website repository of **Amazonis IT Services Pvt. Ltd.**

Amazonis is a technology company focused on building modern websites, applications, digital platforms, AI solutions, and scalable technology systems for businesses.

## About Amazonis

**Amazonis IT Services Pvt. Ltd.** provides software development, AI, digital marketing, hosting, maintenance, and technology solutions for businesses.

Official Website: **https://amazonis.in**

## Services

* Website Development
* E-Commerce Development
* Mobile App Development
* AI Solutions
* Digital Marketing
* Social Media Management
* Influencer Marketing
* Hosting & Maintenance

## Products

### Venuefy™

**Venuefy™** is a venue discovery, enquiry, booking, and partner operations platform.

It helps customers discover and connect with wedding venues, banquet halls, farmhouses, hotels, event spaces, and celebration destinations.

Website: **https://venuefy.in**

Venuefy™ is owned and operated by **Amazonis IT Services Pvt. Ltd.**

### Slour

**Slour** is an AI-powered social media management platform for creators, managers, agencies, and marketing teams.

It helps users create content with AI, schedule posts, manage multiple social platforms, track performance, and manage brand deals and collaborations.

Website: **https://slour.in**

Slour is owned and operated by **Amazonis IT Services Pvt. Ltd.**

## Technology Stack

The Amazonis website is currently built using:

* React
* Vite
* JavaScript
* HTML5
* CSS
* ESLint
* Git
* GitHub

## React + Vite

This project uses **React with Vite** for fast development and optimized production builds.

Vite provides:

* Fast development server
* Hot Module Replacement (HMR)
* Optimized production builds
* Modern JavaScript support
* Efficient React development workflow

The project may use one of the official React plugins:

* `@vitejs/plugin-react` — uses Babel for Fast Refresh
* `@vitejs/plugin-react-swc` — uses SWC for Fast Refresh

For more information about Vite:

**https://vite.dev/**

## ESLint

ESLint is used to maintain consistent code quality and identify potential issues during development.

Developers should resolve relevant linting issues before submitting production-ready changes.

If TypeScript is introduced in the future, the ESLint configuration may be expanded to include type-aware linting rules.

## Project Setup

Clone the repository:

```bash id="1x06d3"
git clone <repository-url>
```

Enter the project directory:

```bash id="x6qk33"
cd <project-folder>
```

Install dependencies:

```bash id="ir73kk"
npm install
```

Start the development server:

```bash id="805xqy"
npm run dev
```

Create a production build:

```bash id="c75gzo"
npm run build
```

Run linting:

```bash id="qt9mh5"
npm run lint
```

## Project Structure

```text id="k7qslx"
src/
├── assets/
├── components/
├── pages/
├── sections/
├── services/
├── utils/
├── App.jsx
└── main.jsx
```

The project structure may evolve as new functionality is added.

## Environment Variables

Sensitive configuration should never be committed directly to GitHub.

Use a local `.env` file where required.

Example:

```env id="9ug78c"
VITE_API_URL=
```

Only placeholder values should be included in `.env.example`.

Never commit:

* API keys
* API secrets
* Passwords
* Database credentials
* Authentication tokens
* SMTP credentials
* Payment gateway secrets
* Private cloud credentials
* Production environment files

## Development Workflow

Development should follow:

```text id="qkm6yn"
Feature Branch
      ↓
   Develop
      ↓
   Testing
      ↓
     Main
      ↓
 Production
```

Developers should create separate branches for features, fixes, and improvements.

Production-ready changes should reach the `main` branch only after review and testing.

For complete contribution rules, see:

**CONTRIBUTING.md**

## Security

Never expose private credentials or production secrets in:

* Source code
* Git commits
* Pull Requests
* Issues
* Screenshots
* Documentation

If a credential is accidentally exposed, it should be revoked and replaced immediately.

## Repository Usage

This repository is intended for authorized Amazonis developers and approved collaborators.

Repository access does not grant permission to copy, redistribute, sell, publish, disclose, or commercially use proprietary source code outside authorized Amazonis work.

## Ownership

This repository and its source code are owned and maintained by:

**Amazonis IT Services Pvt. Ltd.**

© 2026 Amazonis IT Services Pvt. Ltd.
All Rights Reserved.
