import express from 'express';

const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.json({ message: 'Test server is running' });
});

app.listen(port, () => {
  console.log(`Test server running on port ${port}`);
}); 