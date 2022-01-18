import express from 'express';
import path from 'path';
import morgan from 'morgan';
import cors from 'cors';
import router from './routes/app';
// db connection
import pool from './settings/db';

const app = express();
const port = 5000;
const corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200,
};

// Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

// Public
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api', cors(corsOptions), router);

// Init Server
app.set('port', process.env.PORT || port);
app.listen(app.get('port'), () => {
  console.log('SERVER on port: ', app.get('port'));
});
