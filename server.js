const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

console.log('Krishi Sathi Backend Starting...');

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'healthy', message: 'Krishi Sathi Backend is running!' });
});

// Login endpoint
app.post('/api/auth/login', (req, res) => {
    const { username, password } = req.body;
    
    if (username === 'farmer' && password === 'farmer123') {
        res.json({ 
            success: true, 
            token: 'dummy_token_123', 
            user: { id: 1, name: 'Rajesh Kumar', username: 'farmer' } 
        });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});

// Weather endpoint
app.get('/api/weather/current', (req, res) => {
    res.json({ 
        success: true, 
        data: { 
            temp: 28, 
            wind: 12, 
            soilMoisture: 25, 
            timestamp: new Date().toISOString() 
        } 
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
    res.json({ 
        success: true, 
        data: 'Plant appears healthy! For expert advice, call Kisan Helpline: 1800-180-1551' 
    });
});

// Soil analysis
app.get('/api/soil/analysis', (req, res) => {
    res.json({ 
        success: true, 
        data: { 
            ph: 6.5, 
            nitrogen: 150, 
            carbon: 1.2, 
            recommendation: 'Soil is healthy. Add organic manure for better yield.' 
        } 
    });
});

// Crop recommendation
app.post('/api/crop/recommend', (req, res) => {
    res.json({ 
        success: true, 
        crops: ['Rice', 'Maize', 'Cotton'] 
    });
});

// AI Chat
app.post('/api/chat/message', (req, res) => {
    const { message, userName } = req.body;
    res.json({ 
        success: true, 
        data: 'Namaste! For farming advice, call Kisan Helpline: 1800-180-1551 (24/7 Free)' 
    });
});

// Government schemes
app.get('/api/data/schemes', (req, res) => {
    res.json({ 
        success: true, 
        data: [
            { name: 'PM-KISAN', description: '6000/year to small farmers' },
            { name: 'Soil Health Card', description: 'Free soil testing every 2 years' },
            { name: 'PM Fasal Bima Yojana', description: 'Crop insurance at 1.5-2% premium' }
        ] 
    });
});

app.listen(PORT, () => {
    console.log('Server running on port ' + PORT);
});
