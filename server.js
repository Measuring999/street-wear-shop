const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors()); // Разрешаем нашему сайту общаться с сервером

// Раздаем статические файлы (картинки, css, js)
app.use(express.static(__dirname));

// При заходе на главную страницу отдаем index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

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
    
	// --- НОВЫЙ КОД: Таблица для товаров из админки ---
    db.run(`CREATE TABLE IF NOT EXISTS custom_products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        category TEXT,
        name TEXT,
        price REAL,
        img TEXT,
        description TEXT
    )`);

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
        delivery TEXT,
        total REAL,
        date TEXT,
        status TEXT DEFAULT 'В обработке'
    )`);

    // --- НОВЫЙ КОД: Автоматическое создание Админа ---
    db.get(`SELECT * FROM users WHERE email = 'admin@ultra.com'`, (err, row) => {
        if (!row) {
            db.run(`INSERT INTO users (name, surname, email, password, country) 
                    VALUES ('Главный', 'Администратор', 'admin@ultra.com', '123456789', 'UA')`);
            console.log('👑 Учетная запись администратора успешно создана!');
        }
    });
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

// Переменная process.env.PORT автоматически возьмет тот порт, который даст Render
const PORT = process.env.PORT || 3000; 

// --- ЗАМЕНИ СТАРЫЙ app.post('/api/orders') НА ЭТОТ ---
app.post('/api/orders', (req, res) => {
    const { user_email, order_details, delivery, total, date } = req.body;
    const sql = `INSERT INTO orders (user_email, order_details, delivery, total, date, status) VALUES (?, ?, ?, ?, ?, 'В обработке')`;
    
    db.run(sql, [user_email, order_details, delivery, total, date], function(err) {
        if (err) return res.status(500).json({ error: "Ошибка при сохранении заказа" });
        res.json({ success: true, orderId: this.lastID });
    });
});

// API для получения всех заказов (SQL SELECT)
app.get('/api/orders', (req, res) => {
    db.all(`SELECT * FROM orders ORDER BY id DESC`, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

// API для получения добавленных товаров
app.get('/api/products', (req, res) => {
    db.all(`SELECT * FROM custom_products`, [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows || []);
    });
});

// API для добавления нового товара из админки
app.post('/api/products', (req, res) => {
    const { category, name, price, img, description } = req.body;
    
    const sql = `INSERT INTO custom_products (category, name, price, img, description) VALUES (?, ?, ?, ?, ?)`;
    db.run(sql, [category, name, price, img, description], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        
        // Возвращаем созданный товар обратно на фронтенд
        res.json({ id: this.lastID, category, name, price, img, description });
    });
});

// API для ОБНОВЛЕНИЯ профиля (SQL UPDATE)
app.post('/api/update-profile', (req, res) => {
    // Получаем новые данные с фронтенда
    const { email, name, surname, country, dob } = req.body;
    
    // SQL запрос на обновление (UPDATE) строки, где email совпадает
    const sql = `UPDATE users SET name = ?, surname = ?, country = ?, dob = ? WHERE email = ?`;
    
    db.run(sql, [name, surname, country, dob, email], function(err) {
        if (err) {
            return res.status(500).json({ error: "Ошибка при обновлении профиля" });
        }
        res.json({ success: true, message: "Профиль обновлен!" });
    });
});

// --- ДОБАВЬ НОВЫЕ ЭНДПОИНТЫ (ПЕРЕД app.listen) ---

// 1. Получение заказов КОНКРЕТНОГО пользователя (для Личного кабинета)
app.get('/api/orders/:email', (req, res) => {
    db.all(`SELECT * FROM orders WHERE user_email = ? ORDER BY id DESC`, [req.params.email], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// 2. Изменение статуса заказа (Для админа)
app.post('/api/orders/:id/status', (req, res) => {
    const { status } = req.body;
    db.run(`UPDATE orders SET status = ? WHERE id = ?`, [status, req.params.id], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ success: true });
    });
});

// 3. Удаление товара из базы
app.delete('/api/products/:id', (req, res) => {
    db.run(`DELETE FROM custom_products WHERE id = ?`, [req.params.id], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ success: true });
    });
});

// 4. Обновление цены товара
app.put('/api/products/:id', (req, res) => {
    const { price } = req.body;
    db.run(`UPDATE custom_products SET price = ? WHERE id = ?`, [price, req.params.id], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ success: true });
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Сервер успешно запущен на порту ${PORT}`);
});