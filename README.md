# Telephonist

An agenda application made with Next.js, Styled Components, JSON Server and TypeScript.

## Quickstart

- Clone the project
- run npm i or yarn inside the project folder
- Open 2 windows in your terminal: one for the Front End, another for the JSON Server.
- On the first, you run the command yarn server, on the other window, run yarn dev
- Once you ran the commands above, you're ready to use the application!

## Links for the production app:
Application: https://telephonist.vercel.app/
Storybook: https://628bfcb5167ffb004a5d2a0a-xirhscprfm.chromatic.com/?path=/story/button--button-create

### Bonuses checklist

[x] Showcase your front end skills with animations, transitions or effects
[x] Applying a design system and brand
[x] Configure a CI/CD pipeline
[-] Infrastructure automation
[] A/B testing frameworks
[-] Logging, auditing and monitoring of web usage
[] Make both web and mobile apps


# Behind the scenes:

At first, I focused my efforts on setting up the development environment, which consists of:
- Set up project (Next JS)
- Set up test runner (Jest) and test library (React Testing Library)
- Set up git hooks (Husky, lint-staged and @commitlint 
- Set up gloal styles (like css reset) with Styled Components
- Configure the _app.tsx page, which is the custom entrypoint for Next apps.
- Set up Cypress
- Set up CI/CD (GitHub Actions) jobs in the yml file
- Set up Storybook
- Set up environment variables.

After all these steps are done, I really started coding the app. I decided to start by creating a class to hold the Firebase settings, but after some setbacks, I decided to not follow with Firebase as my backend solution.
Then, I gone towards using Mirage.js, that I didn't know how to use very well, and at the beginning, was easy, but when I was implementing the PUT requests, the lack of content related to Mirage.js on the Internet and the library poor documentation made me remove this lib from my project too.
Then, I decided to go for the tech I have more domain, JSON Server, which is very easy to setup and use. Few lines of code, and I had it in production via Heroku, way easier than Mirage.js, and easier to handle data than Firebase.

The entire app is all contained in just one page: index.tsx. I made this way because due to the app simplicity, I didn't want to make it hard by over-engineering it tons of libs, such as Router or even state management tools, like Redux. It's plai React.js at its purest. I control the entire flux only by triggering events and changing states and props. As told before, I could make use of state management tools and routes, but I really like to make things as simple to understand and maintain as possible, besides that use those tools for this app is totally overkill.
