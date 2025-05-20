import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());

app.get('/api/people', async (req, res) => {
  try {
    const response = await fetch('https://swapi.dev/api/people/');
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error('Error fetching from SWAPI:', err);
    res.status(500).json({ error: 'Failed to fetch data from SWAPI' });
  }
});

app.listen(PORT, () => {
  console.log(`SWAPI Proxy running at http://localhost:${PORT}`);
});
