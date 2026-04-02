const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const dataPath = path.join(__dirname, 'data.json');

// Middleware
app.use(cors()); 
app.use(express.json()); 

// GET-запит (Завдання 1: зчитування даних)
app.get('/api/resume', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Помилка читання файлу на сервері' });
        }
        res.json(JSON.parse(data));
    });
});

// POST-запит (Завдання 1: записування даних)
app.post('/api/resume', (req, res) => {
    const newData = req.body; 
    
    fs.writeFile(dataPath, JSON.stringify(newData, null, 2), (err) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Помилка запису у файл на сервері' });
        }
        res.json({ message: 'Дані резюме успішно оновлено на сервері!' });
    });
});

// ==========================================
// НОВИЙ POST-ЗАПИТ ДЛЯ ЛОГІНУ (Авторизація)
// ==========================================
app.post('/api/login', (req, res) => {
    const { username, password } = req.body; 

    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Помилка сервера' });
        }

        const parsedData = JSON.parse(data);
        const users = parsedData.users || [];

        // Перевіряємо логін і пароль
        const userExists = users.find(u => u.username === username && u.password === password);

        if (userExists) {
            res.json({ success: true, message: 'Успішний вхід' });
        } else {
            res.status(401).json({ success: false, message: 'Невірний логін або пароль' });
        }
    });
});

// Запускаємо сервер
app.listen(PORT, () => {
    console.log(`Бекенд сервер успішно запущено на http://localhost:${PORT}`);
});