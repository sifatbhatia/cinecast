import express from 'express';
import axios from 'axios';

const router = express.Router();

// Get detailed weather information for a location
router.get('/location/:lat/:lon', async (req, res) => {
  try {
    const { lat, lon } = req.params;
    const apiKey = process.env.OPENWEATHER_API_KEY;
    
    // Get current weather
    const currentWeather = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    );

    // Get forecast
    const forecast = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    );

    // Get UV index
    const uvIndex = await axios.get(
      `https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=${apiKey}`
    );

    // Get air pollution data
    const airPollution = await axios.get(
      `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`
    );

    res.json({
      current: currentWeather.data,
      forecast: forecast.data,
      uvIndex: uvIndex.data,
      airPollution: airPollution.data
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get golden hour information
router.get('/golden-hour/:lat/:lon', async (req, res) => {
  try {
    const { lat, lon } = req.params;
    const apiKey = process.env.OPENWEATHER_API_KEY;
    
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
    );

    const { sunrise, sunset } = response.data.sys;
    
    // Calculate golden hour times (approximately 1 hour after sunrise and 1 hour before sunset)
    const goldenHourMorning = new Date(sunrise * 1000);
    goldenHourMorning.setHours(goldenHourMorning.getHours() + 1);
    
    const goldenHourEvening = new Date(sunset * 1000);
    goldenHourEvening.setHours(goldenHourEvening.getHours() - 1);

    res.json({
      sunrise: new Date(sunrise * 1000),
      sunset: new Date(sunset * 1000),
      goldenHourMorning,
      goldenHourEvening
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router; 