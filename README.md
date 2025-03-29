# Markdown Editor

> Whatever happened to just getting it all out on paper?

A modern, responsive markdown editor application built with React, TypeScript, and Vite. This application allows users to create, edit, and preview markdown documents with a clean, intuitive interface.

## Features

- **Document Management**: Create, read, update, and delete markdown documents
- **Real-time Preview**: See your markdown rendered in real-time as you type
- **Split View**: Edit and preview your markdown side by side
- **Full Preview Mode**: Toggle to a full-screen preview of your document
- **Dark/Light Mode**: Switch between dark and light themes
- **Responsive Design**: Works on desktop and mobile devices
- **Persistent Storage**: Documents are saved to localStorage

## Technical Stack

- **React**: UI library for building the interface
- **TypeScript**: Type-safe JavaScript
- **Vite**: Fast, modern build tool
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Marked**: Markdown parser and compiler
- **DOMPurify**: HTML sanitizer for security
- **Lucide React**: Icon library

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or pnpm

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/bittricky/markdown-editor.git
   cd markdown-editor
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   pnpm install
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   pnpm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
# or
pnpm run build
```

The built files will be in the `dist` directory.

## Application Architecture

### Component Structure

- **App.tsx**: Main application component that manages global state and layout
- **Header.tsx**: Contains the application header with document name, save button, and theme toggle
- **Sidebar.tsx**: Displays a list of documents and provides document management functionality
- **Editor.tsx**: The markdown editor and preview component

### State Management

The application uses React's built-in state management with hooks:

- **useDocument**: Custom hook for document CRUD operations
- **useLocalStorage**: Custom hook for persisting data to localStorage

### Theming

The application supports both light and dark themes using Tailwind CSS's dark mode. Theme preferences are stored and persisted between sessions.

