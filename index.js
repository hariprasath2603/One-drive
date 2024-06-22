import express from 'express';
import router from './src/outlook-route';

const app = express();

app.use('/', router );

// Start the server on port 5002
app.listen(5002, () => {
    console.log(`App is running on port 5002`);
  });