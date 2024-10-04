const express = require('express');
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.post('/api/application', async (req, res) => {
  try {
    const newApplication = await prisma.scienceDayApplication.create({
      data: req.body,
    });
    res.status(200).json(newApplication);
  } catch (error) {
    console.error('Error creating application:', error);
    res.status(500).json({ error: 'Failed to create application' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
