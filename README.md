# 🚀 Three Fold J-Bot Site Audit Portal - GitHub Pages Guide

This project is a modern, single-page React application powered by **Vite**, **Tailwind CSS**, and **Motion**, featuring J-Bot's intelligent offline-fallback site claims assessment engine.

---

## 🛠️ Build & Hosting Configurations Added

We have fully prepared the codebase with two pristine methods to host the J-Bot application seamlessly on **GitHub Pages**:

1. **Relative Paths Bundling (`base: './'`)**: Automated Vite compile configs resolve assets using clean relative pathways. This guarantees the dashboard renders beautifully whether deployed on a custom domain or hosted in a GitHub repository sub-directory (e.g. `https://username.github.io/repository-name/`).
2. **Local Deployment Script**: Configured the standard `gh-pages` helper utility so you can push your build artifacts directly with a simple command.
3. **Continuous Integration Pipeline**: Added an automated GitHub Actions pipeline that triggers a fresh build and handles deployment on every commit.

---

## 🚀 Deployment Instructions

### Method A: Automated GitHub Actions (Recommended)
This method is fully automated. Every time you push a change to your repository, GitHub compiles it and updates your static site.

1. **Create a GitHub Repository**: Create a new repository on GitHub.
2. **Push the Code**:
   ```bash
   git init
   git add .
   git commit -m "Initialize J-Bot Tracker Portal"
   git branch -M main
   git remote add origin https://github.com/your-username/your-repo-name.git
   git push -u origin main
   ```
3. **Configure Workflow Permissions**:
   Since the workflow needs to write the compiled artifacts to your `gh-pages` branch, enable write permissions:
   - Go to your repository on **GitHub** → **Settings** → **Actions** → **General**.
   - Under **Workflow permissions**, select **"Read and write permissions"**.
   - Click **Save**.
4. **Done!** The pipeline configured in `.github/workflows/deploy.yml` will run automatically.

---

## 💻 Local Commands

You can run these commands easily from your local terminal workspace:

* **Start Local Dev Server**: `npm run dev`
* **Test Client Build Locally**: `npm run build:client`
* **Manual GitHub Pages Deploy**:
  ```bash
  npm run deploy
  ```
