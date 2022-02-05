<div id="top"></div>

<!-- PROJECT SHIELDS -->
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">

<h3 align="center">WMGTSS Prototype (Resource Board Implementation)</h3>

  <p align="center">
    A functional prototype of the WMG Teaching Support System with particular care given to the resource board module function
    <br />
    <br />
    <br />
  </p>
</div>



<!-- ABOUT THE PROJECT -->
## About The Project
![Module Functions Page][module-functions-page-screenshot]

![Resource Page][resource-board-screenshot]

![Resource Display][resource-display-screenshot]

<br />

### Built With
* [TypeScript](https://www.typescriptlang.org/)
* [Angular](https://angular.io/)
* [Material UI](https://material.angular.io/)
* [Keycloak](https://www.keycloak.org/)
* [Docker](https://www.docker.com/)
* [RxJS](https://rxjs.dev/)
* [Karma](https://karma-runner.github.io/latest/index.html)
* [Jasmine](https://jasmine.github.io/)
* [Cypress](https://www.cypress.io/)

<br />

<!-- GETTING STARTED -->
## Getting Started


### Prerequisites
* [Docker](https://www.docker.com/)
* [Web Browser (Chrome Recommended)](https://www.google.com/intl/en_uk/chrome/)

<br />

### Prerequisites (for development)
* [Docker](https://www.docker.com/)
* [Node.js](https://nodejs.org/en/)
* [Angular](https://angular.io/)
* [Web Browser (Chrome Recommended)](https://www.google.com/intl/en_uk/chrome/)

<br />

### Installation
1. Download or clone repository
2. Run `docker-compose up` in the repository


### Usage
1. Navigate to [localhost](localhost)

<br />

### Installation (for development)
1. Download or clone repository
2. Run `npm install` in the repository
3. Run up the app using one of the development server commands listed below


### Usage (for development)

#### Development server (production)
Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

#### Development server (dev data)
Run `npm run start:dev` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

#### Build
Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

#### Running unit tests
Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

#### Running end-to-end tests
Run `npm run e2e` to execute the end-to-end tests via Cypress. Ensure you are not concurrently running a development server.


<br />

### Authentication Accounts (keycloak logins)
#### Tutor #1
Username: **tutor1**<br />
Password: **password**

#### Student #1
Username: **student1**<br />
Password: **password**

#### Student #2
Username: **student2**<br />
Password: **password**


<!-- MARKDOWN LINKS & IMAGES -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/curtismartin3
[module-functions-page-screenshot]: images/website/module-functions-page.png
[resource-board-screenshot]: images/website/resource-board.png
[resource-display-screenshot]: images/website/resource-display.png
