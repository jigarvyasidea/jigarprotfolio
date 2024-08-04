const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors({
    // origin: 'http://localhost:3000',
    
    origin: '*',
    credentials:true,
}));

require('dotenv').config();
app.use(express.json());

const port = process.env.PORT || 5000;

const emailRoute = require('./routes/emailRoute')
app.use('/api/v1',emailRoute);

app.listen(port, () => console.log(`Server running on port ${port}`));