require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

const baseURL = process.env.JSONPLACEHOLDER_BASE_URL || 'https://jsonplaceholder.typicode.com';
const client = axios.create({ baseURL, timeout: 8000 });

app.get('/api/health', (_req, res) => res.json({ status: 'ok' }));

app.get('/api/posts', async (_req, res) => {
  try {
    const response = await client.get('/posts');
    res.json(response.data);
  } catch (_error) {
    res.status(502).json({ error: 'Upstream posts API is unavailable.' });
  }
});

app.get('/api/posts/:id', async (req, res) => {
  if (!/^\d+$/.test(req.params.id)) return res.status(400).json({ error: 'Post ID must be numeric.' });
  try {
    const response = await client.get(`/posts/${req.params.id}`);
    if (!response.data || !response.data.id) return res.status(404).json({ error: 'Post not found.' });
    res.json(response.data);
  } catch (error) {
    if (error.response && error.response.status === 404) return res.status(404).json({ error: 'Post not found.' });
    res.status(502).json({ error: 'Upstream posts API is unavailable.' });
  }
});

const port = Number(process.env.PORT) || 3000;
if (require.main === module) app.listen(port, () => console.log(`API integration demo listening on http://localhost:${port}`));
module.exports = app;
