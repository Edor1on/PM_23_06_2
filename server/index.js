const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const dataPath = path.join(__dirname, 'data.json');

// Middleware
app.use(cors()); // Дозволяємо Angular робити запити сюди
app.use(express.json()); // Вчимо сервер розуміти формат JSON при POST-запитах

// GET-запит (Завдання 1: зчитування даних)
app.get('/api/resume', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Помилка читання файлу на сервері' });
        }
        // Відправляємо дані клієнту
        res.json(JSON.parse(data));
    });
});

// POST-запит (Завдання 1: записування даних)
app.post('/api/resume', (req, res) => {
    const newData = req.body; // Те, що прилетить з Angular
    
    // Записуємо оновлені дані назад у файл (форматуємо гарно з відступами '2')
    fs.writeFile(dataPath, JSON.stringify(newData, null, 2), (err) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Помилка запису у файл на сервері' });
        }
        res.json({ message: 'Дані резюме успішно оновлено на сервері!' });
    });
});

// Запускаємо сервер
app.listen(PORT, () => {
    console.log(`Бекенд сервер успішно запущено на http://localhost:${PORT}`);
});