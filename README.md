# CineCast - Weather-Based Film Recommendations

CineCast is a web application that provides film recommendations based on the current weather conditions. It helps filmmakers and movie enthusiasts find the perfect film to watch based on the weather outside.

## Features

- Real-time weather data for any location
- 5-day weather forecast
- Film recommendations based on weather conditions
- Responsive design for mobile and desktop
- Dark/light mode support

## Tech Stack

- **Frontend**: React, Webpack, Babel
- **Backend**: Node.js, Express
- **Deployment**: Netlify (Frontend), Render (Backend)
- **APIs**: Weather API, Movie Database API

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/cinecast.git
   cd cinecast
   ```

2. Install dependencies for both frontend and backend
   ```
   # Install frontend dependencies
   cd app
   npm install

   # Install backend dependencies
   cd ../server
   npm install
   ```

3. Start the development servers
   ```
   # Start the backend server
   cd server
   npm start

   # Start the frontend development server
   cd ../app
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3001`

## Deployment

The application is deployed at:
- Frontend: [https://cinecast.netlify.app](https://cinecast.netlify.app)
- Backend: [https://weather-app-backend-4a2p.onrender.com](https://weather-app-backend-4a2p.onrender.com)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Weather data provided by OpenWeatherMap
- Film data provided by TMDB
- Icons from Weather Icons