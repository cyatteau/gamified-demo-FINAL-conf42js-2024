# React Gamified Map App - Conf42 JavaScript 2024 Demo

## Overview

This project is the demo final code for my Conf42 JavaScript 2024 talk: [React and the Art of Gamification](https://www.conf42.com/JavaScript_2024_Courtney_Yatteau_15_react_gamification_frontend).

We’ll use a gamified map app as an example, demonstrating the **G.A.M.E.S.** principles (Gamified Components, Advanced State Management, Memoization, Efficient Rendering, Social Elements) to elevate user experience.

## Getting Started

Follow these instructions to set up the project locally and start working with the gamified map app.

### Prerequisites

Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)
- A code editor like [VSCode](https://code.visualstudio.com/)

### Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/cyatteau/gamified-demo-conf42js-2024.git
    ```
    
2. Navigate to the project directory:
    ```bash
    cd react-gamified-map-app
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Add your ArcGIS API key by creating a `.env` file in the root directory:
    ```bash
    VITE_ARCGIS_API_KEY=your-api-key-here
    ```

5. Start the development server:
    ```bash
    npm run dev
    ```

6. Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

## Features

This app is a simple example of how to integrate gamified components into a React project:
- **Gamified Map**: Explore Washington D.C. landmarks and earn XP for visiting new locations.
- **XP and Badges**: Earn XP and level up as you explore the map. Badges are awarded for reaching certain milestones.
- **Social Sharing**: Share your progress on Twitter, Facebook, or LinkedIn.
- **Efficient Rendering**: The map and key components are lazy-loaded to optimize performance.
  
## How to Contribute

Feel free to clone the repo, create your own version, and add more features! You can also join us live on October 31st during my Conf42 JavaScript 2024 talk and work alongside us as we add new gamified elements to the project.

## License

This project is licensed under the MIT License.