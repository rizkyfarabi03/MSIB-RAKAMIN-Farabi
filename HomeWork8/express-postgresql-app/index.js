// app.js

const express = require('express');
const Sequelize = require('sequelize');
const ejs = require('ejs');
const db = require('./models');

const app = express();

app.set('view engine', 'ejs');

// Middleware untuk mengizinkan penggunaan file statis (misalnya: CSS, JS)
app.use(express.static('public'));

// Routing untuk menampilkan seluruh list film
app.get('/films', async (req, res) => {
  const films = await db.Film.findAll();
  res.render('films', { films });
});

// Routing untuk menampilkan data film tertentu berdasarkan id
app.get('/films/:id', async (req, res) => {
  const film = await db.Film.findByPk(req.params.id);
  res.render('film', { film });
});

// Routing untuk menampilkan list category
app.get('/categories', async (req, res) => {
  const categories = await db.Category.findAll();
  res.render('categories', { categories });
});

// Routing untuk menampilkan list film berdasarkan category
app.get('/categories/:id/films', async (req, res) => {
  const category = await db.Category.findByPk(req.params.id, {
    include: [{ model: db.Film }],
  });
  res.render('category_films', { category });
});

app.listen(3000, () => {
  console.log('Server berjalan pada port 3000');
});
