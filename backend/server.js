import express from 'express';
import cors from 'cors';
import { sdohData } from './data/sdohData.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/sdoh', (req, res) => {
  res.json(sdohData);
});

app.get('/api/sdoh/:category', (req, res) => {
  const category = req.params.category;
  const categoryData = sdohData.find(item => item.id === category);
  
  if (categoryData) {
    res.json(categoryData);
  } else {
    res.status(404).json({ error: 'Category not found' });
  }
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'SDOH API is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
