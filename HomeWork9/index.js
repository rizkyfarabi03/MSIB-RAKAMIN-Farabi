const express = require('express');
const app = express();
const pool = require('./queries.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const secretKey = 'kunci_rahasia_tertentu';

const things = require('./things.js');

app.use('/things', things);

pool.connect((err, res) => {
    console.log(err);
    console.log(res);
});

app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.listen(3000);

// Middleware untuk otentikasi
function authenticateToken(req, res, next) {
  const token = req.header('Authorization');
  if (!token) return res.sendStatus(401);

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// Rute untuk login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await db.oneOrNone('SELECT * FROM users WHERE username = $1', username);

  if (!user) return res.sendStatus(401);

  if (await bcrypt.compare(password, user.password)) {
    const accessToken = jwt.sign({ username: user.username }, secretKey);
    res.json({ accessToken: accessToken });
  } else {
    res.sendStatus(401);
  }
});

// Rute untuk mendaftarkan pengguna
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await db.none('INSERT INTO users(username, password) VALUES($1, $2)', [username, hashedPassword]);
    res.json({ message: 'Pengguna berhasil terdaftar' });
  } catch (err) {
    res.status(400).json({ error: 'Username sudah digunakan' });
  }
});

// Rute untuk mendapatkan data (hanya diakses oleh pengguna yang terotentikasi)
app.get('/data', authenticateToken, (req, res) => {
  res.json({ message: 'Data yang diakses oleh pengguna yang terotentikasi' });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});

//Middleware Swagger
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig'); 

const appp = express();

// Middleware Swagger UI untuk menampilkan dokumentasi
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rute-rute API 
app.use('/api', require('./routes')); 

app.listen(3000, () => {
  console.log('Server berjalan pada port 3000');
});

// Implementation logging
const express = require('express');
const logger = require('./path-to-logger'); 

const ap = express();

app.get('/api/route', (req, res) => {
  // Log peristiwa
  logger.info('Mengakses rute /api/route');
  // Log pesan kesalahan (error)
  logger.error('Terjadi kesalahan saat mengakses rute /api/route');
  // ...
  res.send('Response dari rute');
});

app.listen(3000, () => {
  console.log('Server berjalan pada port 3000');
});

