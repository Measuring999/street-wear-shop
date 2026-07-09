const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors()); // Разрешаем нашему сайту общаться с сервером

// 1. Создаем и подключаемся к базе данных SQLite
const db = new sqlite3.Database('./shop_database.db', (err) => {
    if (err) {
        console.error("Ошибка подключения к базе:", err.message);
    } else {
        console.log('✅ Успешно подключились к базе данных SQLite.');
    }
});

// 2. Пишем SQL-запросы для создания таблиц (если их еще нет)
db.serialize(() => {
    // Таблица ПОЛЬЗОВАТЕЛЕЙ
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        surname TEXT,
        email TEXT UNIQUE,
        password TEXT,
        country TEXT,
        dob TEXT
    )`);

    // Таблица ЗАКАЗОВ
    db.run(`CREATE TABLE IF NOT EXISTS orders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_email TEXT,
        order_details TEXT,
        total REAL,
        date TEXT
    )`);
});

// 3. API для РЕГИСТРАЦИИ (SQL INSERT)
app.post('/api/register', (req, res) => {
    const { name, surname, email, password } = req.body;
    
    // SQL запрос на добавление
    const sql = `INSERT INTO users (name, surname, email, password) VALUES (?, ?, ?, ?)`;
    
    db.run(sql, [name, surname, email, password], function(err) {
        if (err) {
            return res.status(400).json({ error: "Пользователь с таким email уже существует!" });
        }
        res.json({ success: true, message: "Успешная регистрация!" });
    });
});

// 4. API для ВХОДА (SQL SELECT)
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    
    // SQL запрос на поиск пользователя
    const sql = `SELECT * FROM users WHERE email = ? AND password = ?`;
    
    db.get(sql, [email, password], (err, row) => {
        if (err || !row) {
            return res.status(401).json({ error: "Неверная почта или пароль!" });
        }
        res.json({ success: true, user: row });
    });
});

// Секретная ссылка для просмотра всех пользователей (только для админа!)
app.get('/api/users', (req, res) => {
    db.all(`SELECT * FROM users`, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        // Возвращаем всех найденных пользователей на экран
        res.json(rows);
    });
});

// Запускаем сервер на порту 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Сервер запущен! API доступно по адресу http://localhost:${PORT}`);
});