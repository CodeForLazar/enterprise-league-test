require('dotenv').config({ path: './backend/.env' });
const path = require('path');
const express = require('express');
const bookRoute = require('./routes/bookRoute.js');
const cors = require('./middleware/cors.js');

const app = express();
app.use(express.json());

app.use(cors);

app.use(express.static(path.join(__dirname, '..', 'frontend', 'dist')));

app.use('/api/book', bookRoute);

app.use((req, res, next) => {
   res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'));
});

const PORT = process.env.PORT;
app.listen(PORT, (err) => {
   if (err) console.error(err);
   console.log(`Server running on port: [${PORT}]`);
});
