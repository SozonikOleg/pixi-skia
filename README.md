# Pixi.js + Skia Integration with PDF Export

This project integrates **Pixi.js** for rendering graphics and **Skia** for generating vector graphics and exporting them as PDF files. It includes a custom wrapper for rendering Pixi.js containers using Skia, along with interactive features such as event handling and PDF export.

## Features

- **Render Pixi.js container with Skia**: Allows rendering of Pixi.js containers (`PIXI.Container`) with various child elements (`PIXI.Graphics`, `PIXI.Sprite`).
- **Event handling**: Supports `pointerdown` and `pointerup` events for interactive elements.
- **PDF Export**: Uses Skia's PDF backend to export rendered graphics to a vector-based PDF file.
- **Interactivity**: Includes functionality to generate random shapes and switch between different Pixi containers.

## Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js**: [Install Node.js](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Vite** (Development server)

## Installation

Follow these steps to get your development environment set up.

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   npm install
   npm run dev
   ```
