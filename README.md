# My Portfolio

Welcome to **My Portfolio** – a personal website built to showcase my skills, experiences, education, and projects. This portfolio is crafted with a modern web stack that leverages **React**, **Vite**, **Tailwind CSS**, and **Firebase**, along with impressive animations powered by **GSAP** and an interactive contact form powered by **EmailJS**. Enjoy a smooth and dynamic experience as you navigate through my work!

---

## Introduction

Hello! I am **MD. MAINUL HOSSAIN CHISTY** – a Computer Science student and technology enthusiast with a passion for web development, machine learning, and competitive programming. This portfolio site is designed for both style and substance, providing details about my educational background, skills, project work, and professional experience. The website offers dynamic animations, a responsive design, and interactive components for an engaging user experience.

---

## Features

- **Responsive Design & Smooth Scrolling:** Built using modern libraries and frameworks, the portfolio adapts to various screen sizes with smooth scrolling between sections.
- **Dynamic Animations:** Animated components using **GSAP** for impressive visual transitions and creative effects.
- **Interactive Typewriter Effect:** Implements a typewriter effect to introduce key information dynamically.
- **Project Showcase:** Displays project cards including live previews and source code links, along with a minimal yet engaging hover effect.
- **Education & Experience Timeline:** Uses timeline components to list educational institutes and work-related experiences.
- **Contact Form:** Includes a contact form powered by **EmailJS** with real-time validations and visual feedback using sweet alerts.
- **Modern Tooling & Styling:** Developed with **React** in a **Vite** environment, styled with **Tailwind CSS** and **DaisyUI** for UI components.
- **Firebase Integration:** Prepared for Firebase hosting and further backend service integration.

---

## Requirements

To work with this project, ensure that you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- Basic knowledge of React, Vite, and tailwind setup
- Environment variables configured for EmailJS and Firebase (see configuration below)

Additional dependencies are defined in the [package.json](./package.json) file, which includes:

| Package                   | Purpose                                       |
|---------------------------|-----------------------------------------------|
| React & React-DOM         | Core library to build UI                      |
| Vite                      | Fast build tool and development server        |
| Tailwind CSS & DaisyUI    | Styling and UI components                     |
| GSAP & @gsap/react         | Animation library for dynamic effects         |
| EmailJS Browser           | Sends emails via form submission              |
| Firebase                  | Hosting and backend integration               |
| React Icons               | Icons for visual enhancements                 |

---

## Installation

Follow these steps to run the project locally:

1. **Clone the repository**

   ```
   git clone https://github.com/Mainul21/My-Portfolio.git
   cd My-Portfolio
   ```

2. **Install dependencies**

   Using npm:
   ```
   npm install
   ```
   Or using yarn:
   ```
   yarn install
   ```

3. **Run the development server**

   Using npm:
   ```
   npm run dev
   ```
   Or using yarn:
   ```
   yarn dev
   ```

4. **Open in your browser**

   Typically, the development server runs at `http://localhost:3000` (or another available port as indicated in your terminal).

---

## License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2023 Mainul21

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

---

## Contributing

Contributions are very welcome! If you would like to enhance this portfolio:

- **Fork the repository** and create your feature branch.
- **Make your changes** and ensure your code follows the project's style and best practices.
- **Submit a pull request** describing your improvements.
- Feel free to open an issue for any feature requests or bug reports.

Please ensure that any changes you make are tested locally before submitting a pull request.

---

## Configuration

Before running the project, ensure you configure your environment variables required for EmailJS and (if needed) Firebase. Create a file named `.env` in the project root and include the following variables:

```
VITE_service_id=your_emailjs_service_id
VITE_template_id=your_emailjs_template_id
VITE_public_key=your_emailjs_public_key
```

Additionally, if you integrate further Firebase features, adjust the `firebase.config.js` file with the necessary credentials.

---

## Usage

After successfully setting up the project, you can use the portfolio by:

- **Navigating through sections:** Click on the navigation links in the header or footer to smoothly scroll between the About Me, Education, Skills, Projects, and Experience sections.
- **Interacting with animations:** Enjoy various animations such as fading effects, sliding transitions, and typewriter animations as you scroll.
- **Checking out the projects:** Hover over project cards to reveal details, live links, and source code on GitHub.
- **Submitting a message:** Use the contact form to send a message. Once submitted, a sweet alert will notify you of the email status.
- **Deploying the project:** Build the project using `npm run build` (or `yarn build`) to generate optimized production files, then deploy using your preferred hosting provider (Firebase hosting is configured by default).

Feel free to explore the code inside the `src`, `Components`, and configuration files to learn more about how each part is integrated.

─────────────────────────────────────────────  
Happy coding! 🚀✨  
─────────────────────────────────────────────  

This documentation is written entirely with the repository’s existing code structure and functionality in mind, ensuring that every section reflects the actual implementation and features of the project.

# **Live Link: https://my-portfolio-9721b.web.app/**
