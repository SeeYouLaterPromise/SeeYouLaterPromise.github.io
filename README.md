# My Personal Portfolio Website

This repository contains the source code for my personal portfolio website, accessible at [**seeyoulaterpromise.github.io**](https://www.google.com/search?q=https://seeyoulaterpromise.github.io/).

This project was built from scratch to showcase my journey, skills, research, and projects in the fields of Computer Science, AI, and Data Science. It serves as a dynamic and modern resume, reflecting my passion for building elegant and efficient web applications.

_(To add the screenshot: take a picture of your finished website, name the image `portfolio-screenshot.png`, and place it in the root directory of your project.)_

## ✨ Features

- **Fully Responsive Design**: Looks great on desktops, tablets, and mobile phones.
- **Modern Tech Stack**: Built with Next.js and React for high performance and a great developer experience.
- **Component-Based Architecture**: Each section of the site is a reusable React component.
- **Utility-First Styling**: Styled with Tailwind CSS for rapid and maintainable UI development.
- **Automated CI/CD**: Automatically deployed to GitHub Pages using GitHub Actions whenever code is pushed to the `main` branch.
- **Showcase Sections**: Dedicated, custom-styled sections for my research publications, projects, skills, and educational background.

## 🚀 Tech Stack

This project was built using the following technologies:

## 🛠️ The Building Process: A Summary

This website was an iterative journey that involved planning, development, configuration, and automated deployment.

#### 1\. Initialization and Foundation

The project was initiated with Next.js, specifically chosen for its powerful Static Site Generation (`output: 'export'`) capabilities, which is perfect for hosting on GitHub Pages. TypeScript was used from the start to ensure type safety and code quality.

#### 2\. Component-Driven Development

The UI was built section by section, creating individual React components for the `Hero`, `About`, `Research`, `Projects`, `Skills`, and `Contact` sections. This modular approach kept the codebase clean and easy to manage.

#### 3\. Styling and Customization

Tailwind CSS was the framework of choice for styling. I used its utility-first classes to rapidly build a custom, responsive design. The project also features a custom color theme (`zju-blue`) configured in `tailwind.config.ts` to give the site a personal touch.

#### 4\. Configuration and Problem-Solving

Along the way, I configured the project to work seamlessly with TypeScript path aliases (`tsconfig.json`) and set up the custom Tailwind theme. I also debugged real-world CSS issues, such as fixing layout overlaps on mobile devices by moving from fixed heights to a robust Flexbox-based card design.

#### 5\. Automated Deployment

The final piece of the puzzle was setting up a CI/CD pipeline with GitHub Actions. A custom workflow file (`.github/workflows/deploy.yml`) was created to automate the entire process:

- It triggers on every push to the `main` branch.
- It sets up a Node.js environment.
- It installs all dependencies using `npm`.
- It builds the static site using `npm run build`.
- Finally, it deploys the generated `out` directory to GitHub Pages.

This entire process has been a valuable, hands-on experience in modern web development, from initial concept to a live, globally accessible portfolio.

## Local Development

To run this project on your local machine:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/SeeYouLaterPromise/SeeYouLaterPromise.github.io.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd SeeYouLaterPromise.github.io
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) in your browser to see the result.

## 📞 Contact

- **Name**: Yexin Liu Lu
- **Email**: `llyexin@qq.com`
