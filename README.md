# Photolabs
This is a React-based web application for browsing and interacting with a collection of photos. It allows users to select topics, view photos, and see detailed information about selected photos in a modal. Users can mark photos as favorites and count their selections. The project fetches data from a local backend API and employs React hooks for state management and user interactions, providing a user-friendly photo browsing experience.

## Screenshots

### App displays picture and has functional like button, which accumulates likes number
!["home"](https://github.com/Andrew-Li-12138/PhotoLabs/blob/main/docs/home.png)

### Clients can select picture category to view pictures in with same theme
!["animal"](https://github.com/Andrew-Li-12138/PhotoLabs/blob/main/docs/animal.png)

### When clicking a picture, clients can view the picture in a bigger view, see similar pictures, and like pictures
!["modal"](https://github.com/Andrew-Li-12138/PhotoLabs/blob/main/docs/modal.png)

## Setup

Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

## [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

## [Backend] Running Backend Servier

Read `backend/readme` for further setup details.

```sh
cd backend
npm start
```
## Dependencies
- React
- React DOM
- React Scripts
- Web Vitals
- @testing-library/jest-dom
- @testing-library/react
- @testing-library/user-event

### Development Dependencies
- Sass

