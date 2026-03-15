# Projects

## USDA Receipt for Service (Current)
A full-stack rewrite of the USDA Receipt for Service application, which generates service receipts required by the 2014 Farm Bill. Scott is migrating it from legacy ASP.NET Web Forms on physical servers to Angular frontend with .NET 8 APIs, AWS Lambda, and AWS S3.

## USDA FSA Customer Check-in Kiosk (Current)
A check-in kiosk application for USDA Farm Service Agencies that improves tracking of farmer interactions across 2,300 offices nationwide. Scott collaborated across a large organization, coordinating multiple stakeholders to align requirements and delivery. He implemented CI/CD pipelines using Jenkins to streamline deployments and ensure reliability.

## VicTouch (Volgistics)
Scott drove user satisfaction and rejuvenated Volgistics by spearheading the company's first Angular web application and first native application released to the App Store and Play Store. VicTouch is a volunteer clock-in/clock-out system with messaging, scheduling, and touchless QR code sign-in. He implemented continuous integration and deployment processes and worked with non-technical volunteer experts to ensure customer requirements were fulfilled. Built with Angular SPA frontend, Capacitor for cross-platform deployment, Windows Server with Delphi backend, and BTrieve database. Deployed via GitLab CI/CD.

## VicNet (Volgistics)
A volunteer portal for schedule management, service posting, messaging, and profile updates. Scott collaborated with multiple engineers and testers to develop it with a user-friendly, social media-inspired interface. He oversaw continuous integration and deployment, and adapted the Angular application for native platforms, building upon the approach pioneered with VicTouch.

## Volgistics Help
A documentation platform with 700+ help pages. Scott converted static HTML to markdown using Selenium WebDriver and Python, then rebuilt it with Vue.js/Vuepress for dynamic documentation. He engaged with non-technical individuals to ensure they were able to understand and update documentation, and simplified the markdown using Vue components.

## Volgistics DevOps
Scott facilitated Volgistics' adoption of a DevOps development process utilizing GitLab. He significantly reduced the workload of the IT team by automating 'one-click' deployments using GitLab runners. He developed a Python application to import over 8,000 MantisBT bug tracker issues into GitLab issues.

## scottv.dev
Scott's personal portfolio website, built as a programming playground and to showcase his work. It is built with Angular 21, Angular Material for UI components, Firebase/Firestore for real-time data, and SCSS for styling. It features server-side rendering and prerendering via Angular SSR. The site includes a tic-tac-toe game with global win statistics stored in Firestore, algorithm visualizations, developer tools (Base64 encoder/decoder, diff checker, JSON formatter, markdown previewer, JWT debugger), and a snake game. It is hosted on GitHub Pages.

## scottv.dev AI Chatbot
The chatbot on scottv.dev is a RAG (Retrieval-Augmented Generation) system Scott built. It works by: (1) pre-computing vector embeddings of knowledge documents about Scott using OpenAI's text-embedding-3-small model, stored as a static JSON file; (2) when a user asks a question, a Firebase Cloud Function embeds the question, finds the most relevant knowledge chunks via cosine similarity, and sends them as context to OpenAI's gpt-4.1-nano model to generate an answer. This keeps costs near zero while providing accurate, grounded responses. It was Scott's first AI/ML project.

## Harry's Appraisals
A simple Angular website for a local insurance appraisal business.

## TI Launchpad Slot Machine (Academic)
A final project for a microcontroller class, built with collaborator Zakkaria Hales. It was a GameBoy-like device that accepted pennies, featuring a keypad, speaker, tri-color LED, 7-segment display, 16x4 LCD, TI MSP432 Launchpad, servo-controlled door, rechargeable battery, blue ambient lighting, and Super Mario Bros victory tunes.

## Robo Sockey Arduino Robot (Academic)
Built for GVSU's Robo Sockey Competition, a semester-long Arduino robot soccer/hockey hybrid event with ~40 teams of 4 students. The robot navigated autonomously in a 6ft x 6ft arena to capture balls and score goals. Scott's team bot "The Boi" won first place and the Design Innovation Award.
