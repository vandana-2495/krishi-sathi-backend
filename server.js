const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

console.log('✅ Krishi Sathi Backend Starting...');

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'healthy', message: 'Krishi Sathi Backend is running!' });
});

// Login
app.post('/api/auth/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'farmer' && password === 'farmer123') {
        const token = jwt.sign({ username: 'farmer', name: 'Rajesh Kumar' }, 'secret_key', { expiresIn: '7d' });
        res.json({
            success: true,
            token: token,
            user: { id: 1, name: 'Rajesh Kumar', username: 'farmer', email: 'farmer@krishisathi.com' }
        });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});

// Weather
app.get('/api/weather/current', (req, res) => {
    res.json({
        success: true,
        data: { temp: 28, wind: 12, soilMoisture: 25, soilTemp: 24, timestamp: new Date().toLocaleString() }
    });
});

// Market prices
app.get('/api/market/prices', (req, res) => {
    res.json({
        success: true,
        data: [
            { commodity: 'Wheat', price: 2250, market: 'Ludhiana Mandi' },
            { commodity: 'Rice', price: 2350, market: 'Ludhiana Mandi' },
            { commodity: 'Maize', price: 2100, market: 'Ludhiana Mandi' }
        ]
    });
});

// Disease detection
app.post('/api/disease/detect', (req, res) => {
    res.json({ success: true, data: '✅ Plant appears healthy! Call Kisan Helpline: 1800-180-1551' });
});

// Soil analysis
app.get('/api/soil/analysis', (req, res) => {
    res.json({ success: true, data: { ph: 6.5, nitrogen: 150, carbon: 1.2, recommendation: 'Soil is healthy.' } });
});

// Crop recommendation
app.post('/api/crop/recommend', (req, res) => {
    res.json({ success: true, crops: ['🌾 Rice', '🌽 Maize', '🪡 Cotton'] });
});

// Chat
app.post('/api/chat/message', (req, res) => {
    res.json({ success: true, data: '🌾 Namaste! Call Kisan Helpline: 1800-180-1551 for expert advice.' });
});

// Schemes
app.get('/api/data/schemes', (req, res) => {
    res.json({
        success: true,
        data: [
            { name: 'PM-KISAN', description: '💰 ₹6000/year to farmers' },
            { name: 'Soil Health Card', description: '🌱 Free soil testing' },
            { name: 'PM Fasal Bima Yojana', description: '🛡️ Crop insurance' }
        ]
    });
});

app.listen(PORT, () => {
    console.log(✅ Server running on port );
    console.log(🌐 API: http://localhost:/api);
});
