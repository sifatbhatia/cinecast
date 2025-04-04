# CineCast - Weather Forecasting for Film Makers

CineCast is a specialized weather application designed specifically for cinematographers and film makers. It provides detailed weather information crucial for film production, including golden hour timing, sun luminance, visibility conditions, and more.

## Features

- Detailed Weather Information
  - Sunset/Sunrise times
  - Golden hour information
  - Sun luminance data
  - UV index and visibility conditions
  - Weather conditions
- Interactive Timeline
  - Scrollable weather forecast
  - Detailed hourly breakdown
- Map Integration
  - Location-based weather data
  - Visual weather representation

## Tech Stack

- Frontend: React.js with Tailwind CSS
- Backend: Node.js/Express
- Authentication: Firebase
- API: OpenWeatherMap API

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   cd app && npm install
   ```
3. Set up environment variables:
   - Create `.env` file in the root directory
   - Add your OpenWeatherMap API key
   - Add your Firebase configuration
4. Start the development server:
   ```bash
   npm run dev:react
   ```

## Project Structure

```
cinecast/
├── app/                 # React frontend
├── server/             # Node.js backend
├── docs/              # Project documentation
└── package.json       # Project configuration
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the ISC License.