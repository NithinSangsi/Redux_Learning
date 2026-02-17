# Redux Learning 

A small repository containing two example projects built with React + Vite to demonstrate basic frontend concepts and Redux state management. This repo is meant to showcase what I've learned so far and provide a simple, runnable example of using Redux (Redux Toolkit) in a small application.

---

## Overview

This repository contains two projects:

- `demo`: A lightweight Vite + React starter demonstrating minimal app structure, styling, and asset usage.
- `Redux_small_application`: A small React + Vite app that uses Redux (Redux Toolkit) to manage application state (a basic counter app with global state and slices).

Both projects are intended for learning and experimentation.

---

## Folders

- `demo`  
  Purpose: Basic Vite + React example to practice app scaffolding, CSS, and static assets.  
  Topics demonstrated: Vite dev server, React components (`App.jsx`), basic CSS (`App.css`, `index.css`), project metadata (`package.json`), and simple asset imports.

- `Redux_small_application`  
  Purpose: A compact app that demonstrates Redux integration into a React + Vite app.  
  Topics demonstrated: Redux Toolkit slices, centralized store, dispatching actions, selecting state with hooks, and component-state interaction.

---

## Redux Small Application — Description

The `Redux_small_application` folder contains a simple counter application built with React and Redux Toolkit. It illustrates how to:

- Create a Redux store and provide it to the React app.
- Define a slice with reducers and actions (increment, decrement, reset).
- Use `useSelector` to read global state from components.
- Use `useDispatch` to dispatch actions that update state.
- Organize state logic in `slices` and keep UI components focused on rendering and user interaction.

Flow:
- UI components dispatch actions (e.g., increment).
- Reducers in the slice update the store.
- Components read updated state via `useSelector` and re-render.

---

## Key Concepts & Features

- Global state management with Redux Toolkit
- Slice-based state organization (reducer + actions in one file)
- React hooks for Redux (`useSelector`, `useDispatch`)
- Vite-powered dev environment (fast refresh, modern toolchain)
- Minimal, clear structure suitable for learning and extension

---

## File Overview

Important files to explore:

- `Redux_small_application/src/ReduxCounter.jsx` — UI component demonstrating read/dispatch with Redux.
- `Redux_small_application/src/store/store.js` — Configures and exports the Redux store.
- `Redux_small_application/src/store/slices/ReduxCounterSlice.js` — Defines the counter slice (initial state, reducers, actions).
- `Redux_small_application/src/main.jsx` — App bootstrap; where the store is provided to React.
- `demo/src/App.jsx` — Simple demo app entry component.
- `demo/src/main.jsx` — Demo app bootstrap.
- Each project's `package.json` — Scripts and dependencies.

---

## Setup & Run

Each folder is an independent Vite project. From a project folder, run:

1. Install dependencies in each Folder
```bash
npm install
npm install react-redux
npm install @reduxjs/toolkit
```

2. Start dev server
```bash
npm run dev
```

Notes:
- Recommended: Node.js v16+ and npm.
- Vite defaults to port `5173`; it will pick another port if busy.
- See each project's `package.json` for exact scripts.

---

## Development Notes

- Redux is integrated via Redux Toolkit for concise slice and store setup.
- The counter slice shows patterns you can reuse:
  - Keep reducer logic and actions together in a slice.
  - Export actions for components to dispatch.
  - Keep UI components focused on presentation; use `useSelector` for state.
- Suggested enhancements:
  - Add async logic with `createAsyncThunk`.
  - Split state into multiple slices (e.g., `user`, `todos`).
  - Persist state with `redux-persist` or localStorage.

---


