const categories = [
    { id: "mens", name: "Мужская одежда" },
    { id: "womens", name: "Женская одежда" },
    { id: "kids", name: "Детская одежда" },
    { id: "sports", name: "Спортивная одежда" },
    { id: "sneakers", name: "Кроссовки и кеды" },
    { id: "summer", name: "Летняя коллекция" },
    { id: "winter", name: "Зимняя коллекция" },
    { id: "midseason", name: "Межсезонная одежда" }
];

const products = [
    // МУЖСКАЯ
    { id: 1, category: "mens", name: "Худи Оверсайз", price: 1200, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrppCoENJpuPHmVxydgNC-ZSIUiYWKQ9dBDhV224fx0w&s=10", description: "Идеальное оверсайз худи из плотного хлопка. Объемный капюшон и карман-кенгуру. Мастхэв для уличного стиля." },
    { id: 2, category: "mens", name: "Джинсы Карго", price: 1800, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLrx4LbyXz_EsK6BRd4GUYlMXldEXr02DCGTWCibQbwQ&s=10", description: "Стильные джинсы карго с продуманной посадкой и вместительными накладными карманами. Отличный выбор для активных будней." },
    { id: 3, category: "mens", name: "Футболка Стритвир", price: 550, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuaxSkrgmpvbzICO-E7Av4QSdIQfk3IMfoyMYMBiwCgw&s=10", description: "Свободная стритвир-футболка прямого кроя. Дышащая ткань и качественный принт, который не сотрется после стирок." },
    { id: 19, category: "mens", name: "Джинсы Classic Wide", price: 1450, img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT-bnMUJo6i6IzjTWHj-0dJRLjq9JTqT-Qz6gRPdtbWBW14Wr-PUDjg9E63ueuM4qOxEbhm_0ifmk1ecVAqSOX4pOEpqG9d2865S29-rjS1pKLstOI3LMxXlA&usqp=CAc", description: "Широкие джинсы в классическом исполнении. Винтажный силуэт, который идеально сочетается с массивными кроссовками." },
    { id: 20, category: "mens", name: "Зип-худи", price: 1300, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvAPwVWPMAITSNbqnocA99-q-Cm7zDyY2h9h6t9YbbOA&s", description: "Удобное базовое зип-худи на молнии. Отличный вариант для многослойных образов и прохладной погоды." },
    
    // ЖЕНСКАЯ
    { id: 4, category: "womens", name: "Широкие Джинсы", price: 2700, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHfjmiH9EPn8PP-3t6ou6JzjkdCuqS2Q2wEJ1GPnc_oQ&s=10", description: "Трендовые широкие джинсы из плотного денима. Идеальная посадка, визуально удлиняющая ноги." },
    { id: 5, category: "womens", name: "Топ", price: 750, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS84CG0wiFlT9GFo35vvFlRqNfaQpAPx7SUNj9eTgYiew&s=10", description: "Стильный облегающий топ. Эластичный материал подчеркивает фигуру и обеспечивает комфорт на весь день." },
    { id: 6, category: "womens", name: "Худи", price: 1600, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYMJEdLAd1simazw0q9uIU4ERJLghVoytLkpKNU7KQqw&s=10", description: "Мягкое женское худи приятного оттенка. Слегка укороченный крой, отлично смотрится с джинсами высокой посадки." },
    { id: 24, category: "womens", name: "Широкие брюки", price: 1100, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-SKPaO2kzz_A3N3_htSKex34IK58YRIn3XGdPcTQMRg&s=10", description: "Элегантные и свободные брюки-палаццо. Струящаяся ткань для безупречного баланса между комфортом и стилем." },
    
    // ДЕТСКАЯ
    { id: 7, category: "kids", name: "Спортивный Костюм", price: 1600, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNtyjwB4b92BalHAOz3q3A-XxIin3i80kuHKyExeXQwg&s=10", description: "Практичный детский спортивный костюм из плотного трикотажа. Износостойкий и удобный для самых активных игр." },
    { id: 8, category: "kids", name: "Детская Футболка", price: 599, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCT2TXEwBCJJ3P99WSV_2xTMEnm1HL2KMD_rDvrfA74A&s=10", description: "Яркая и дышащая детская футболка из 100% хлопка. Мягкая к телу и очень комфортная." },
    { id: 32, category: "kids", name: "Лонгслив", price: 699, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi3oMyA2r2UMMORh3FxCMPWvmhmRiLKHwMQikk_sSsmQ&s=10", description: "Базовый детский лонгслив. Идеален для детского сада, школы или прогулок в прохладную погоду." },
    { id: 33, category: "kids", name: "Легинсы", price: 799, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkym9l4aOY-R7UmzT2rnpFy2ftXrpS_EG64RopYB8XtA&s=10", description: "Эластичные легинсы для девочек. Мягкий пояс не давит на живот, отлично подходят для спорта и дома." },
    
    // СПОРТ
    { id: 25, category: "sports", name: "Футболка Cristiano Ronaldo", price: 100000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKkfzGZQT4Ft1CyY0LZo9VubO-7DlngDR-epF90r5FlETuKka8AyCZPAq3&s=10", description: "Эксклюзивная джерси с фамилией легендарного Криштиану Роналду. Настоящий эксклюзив для фанатов футбола." },
    { id: 26, category: "sports", name: "Футболка Lionel Messi", price: 100000, img: "https://www.vseprosport.kz/images/lenta-news/5804388dbf6d0801f7961edd848bb995678126adc695b.webp?v=1651584221", description: "Культовая футболка Лионеля Месси. Идеальный подарок и гордость для любой спортивной коллекции." },
    { id: 11, category: "sports", name: "Спортивная Сумка", price: 1200, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNbDhnWxN6MI2VDSRl79Ld66KikYVbfHwDm_zGFb8k-Q&s=10", description: "Вместительная спортивная сумка с надежной фурнитурой. Отлично подойдет для спортзала и коротких путешествий." },
    { id: 10, category: "sports", name: "Кроссовки Run Ultra", price: 2800, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpVQmtjbIfWuNys62vJQ4fdu2xJ4RvZ01iVnob_R0hYg&s", description: "Технологичные беговые кроссовки с амортизирующей подошвой. Легкий сетчатый верх для максимальной вентиляции." },

    // КРОССОВКИ И ОБУВЬ
    { id: 37, category: "sneakers", name: "Nike Zoom Vomero 5", price: 3800, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTER2sAdRo09dA2b0ZJp1_ucLsvUBmu3LJJFFqojgGSsg&s=10", description: "Стильная модель с двойной амортизацией. Многослойный верх Nike Zoom Vomero 5 хорошо пропускает воздух и выглядит очень современно." },
    { id: 34, category: "sneakers", name: "Nike Air Zoom Pegasus", price: 3200, img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTWCJNK7fiKQ2EozknQqucWjEEcgH7xHQEnBjfi9BHHkHqBlJxTC9a3HT9Yo54wE1eziogGwH7AOMz9_kdO2zqOvfmMwPtAhfZA1ZfH84TBAjdcJPVFmD2VMxbNZTNiARGCF2gu5W68Xw&usqp=CAc", description: "Это отличные кроссовки для бега и ходьбы. У них очень легкий дышащий верх и мягкая подошва Nike Air Zoom Pegasus." },
    { id: 35, category: "sneakers", name: "New Balance 1906", price: 4700, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3YQ5VB2EPClTpK8JclsnsqaAyFsayzs6VYtRrxqhqzA&s=10", description: "Очень популярная модель. Ее верх полностью сделан из прочной вентилируемой сетки. В них вам будет комфортно в самый жаркий день." },
    { id: 36, category: "sneakers", name: "Salomon XT-6", price: 3600, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTewzF1QUE5LvcHfXbqJLTPNHynH7WwCatd4BqXCbv92g&s=10", description: "Изначально это кроссовки для бега по горам. Они стали хитом в городе благодаря прочности, удобной системе шнуровки и отличной вентиляции Salomon XT-6." },

    // ЛЕТО
    { id: 12, category: "summer", name: "Шорты Летние Легкие", price: 650, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQzDGj8T3LW-8Tg2qtQf9mNzc1nCZNMd_c88bt6cmqmQ&s=10", description: "Легкие шорты для жарких дней. Свободная посадка и регулируемый шнурок на поясе для максимального комфорта." },
    { id: 13, category: "summer", name: "Панама Летняя", price: 350, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnMsPxhWBjAAIaLbNyNdsr9w70t1xpSB6tLDFS1jE7RA&s", description: "Стильная летняя панама. Надежно защитит от палящего солнца и круто дополнит твой стритвир-образ." },
    { id: 27, category: "summer", name: "Гавайская Рубашка", price: 850, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSp_lLqaGsbe00ofW2TWhvcilvRgxPqlJcxuV_h0bzfw&s=10", description: "Яркая гавайская рубашка свободного кроя. Легкая дышащая ткань — то, что нужно для летних вечеринок!" },
    { id: 28, category: "summer", name: "Очки Солнцезащитные", price: 500, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgn3iiHyDWT_5G5pROEXa-g55DBYgOdj2y_x_W3_SBLQ&s=10", description: "Модные солнцезащитные очки с UV-защитой. Универсальная оправа, подходящая к любой форме лица." },

    // ЗИМА
    { id: 14, category: "winter", name: "Зимняя Куртка-Пуховик", price: 4500, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQnv_nSltWfhlDRenY-IESw8PPdMKnuyldLkqCpPq1Tw&s=10", description: "Объемный и легкий зимний пуховик. Непродуваемая ткань и надежный утеплитель согреют в самые сильные морозы." },
    { id: 15, category: "winter", name: "Термобелье Комплект", price: 1200, img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT8bC4HK6ZLmJd72YQcUa4bRweah2udZuN2sP1_27r8EHlelhNchfn6zXUDMhzioj1VbnBtLRBKHlMJS5gOBE8g5VlziloFO2_ax-6WQyCvUn8f49sU_CyKr_p2t5yBxjAfPDopG-cDbWA&usqp=CAc", description: "Комплект технологичного термобелья. Отлично сохраняет тепло и отводит влагу, идеальный базовый слой зимой." },
    { id: 29, category: "winter", name: "Шапка Теплая", price: 1200, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN0QO4juOKm2Ogt51tcLovi0HtinYoWZBIyZTsQ3choQ&s=10", description: "Вязаная шапка бини двойной вязки. Не колет лоб и надежно защищает от холодного зимнего ветра." },
    { id: 30, category: "winter", name: "Зимние Ботинки", price: 3500, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1fR52-W1L-bjJwAfRJywfVxccR-fPKwzym0Rq1iHnig&s=10", description: "Зимние ботинки с мощным протектором. Водонепроницаемый верх и теплая подкладка для максимального комфорта." },

    // МЕЖСЕЗОННАЯ
    { id: 16, category: "midseason", name: "Куртка Демисезонная", price: 2100, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVefJwNZ5YrUsNALb6vIJ_iOpyw7gpK1Ywtf4Y3apDMA&s=10", description: "Универсальная демисезонная куртка. Защитит от ветра и легкого дождя, отлично вписывается в городской стиль." },
    { id: 17, category: "midseason", name: "Бомбер Классический", price: 1750, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJPlchsbhn0NGu995Zd967ISjolNksZ0d-LBKLt_mahQ&s=10", description: "Классический бомбер с эластичными манжетами и фирменным карманом на рукаве. Стильная классика стритвира." },
    { id: 18, category: "midseason", name: "Легкий Тренч", price: 2400, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT1QJEvdkx47lEbIsT_4L2fHBaLaOKu_LXbqgotqa9yQ&s=10", description: "Элегантный тренч свободного кроя. Незаменимая вещь для создания многослойных осенних и весенних аутфитов." },
    { id: 31, category: "midseason", name: "Худи на флисе", price: 1399, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrppCoENJpuPHmVxydgNC-ZSIUiYWKQ9dBDhV224fx0w&s=10", description: "Теплое и уютное худи на плотном флисе. Настоящее спасение от осенней хандры — мягкое, как плед." }
];

const wheelSectors = [
    { id: 0, val: 5, minD: 0, maxD: 45, weight: 25 },
    { id: 1, val: 10, minD: 45, maxD: 90, weight: 25 },
    { id: 2, val: 5, minD: 90, maxD: 135, weight: 20 },
    { id: 3, val: 15, minD: 135, maxD: 180, weight: 14 },
    { id: 4, val: 5, minD: 180, maxD: 225, weight: 10 },
    { id: 5, val: 10, minD: 225, maxD: 270, weight: 4 },
    { id: 6, val: 50, minD: 270, maxD: 315, weight: 1 }, 
    { id: 7, val: 15, minD: 315, maxD: 360, weight: 1 }
];

let cart = [];
let currentWheelDiscount = 0;
let isWheelSpun = false;

// Переменные для фильтров
let currentSearch = "";
let currentSort = "default";

// --- ТУТ ДАЛЬШЕ ИДЕТ ТВОЯ ФУНКЦИЯ renderCatalog() ---

function renderCatalog() {
    const container = document.getElementById('categories-container');
    
    // 1. Фильтруем по поиску
    let filteredProducts = products.filter(p => p.name.toLowerCase().includes(currentSearch));
    // 2. Сортируем
    if (currentSort === "cheap") filteredProducts.sort((a, b) => a.price - b.price);
    else if (currentSort === "expensive") filteredProducts.sort((a, b) => b.price - a.price);

    container.innerHTML = categories.map(cat => {
        const catProducts = filteredProducts.filter(p => p.category === cat.id);
        if (catProducts.length === 0) return '';
        
        const productsHTML = catProducts.map(p => `
            <div class="product-card">
                <div class="product-img-container" onclick="openProductModal(${p.id})">
                    <img src="${p.img}" alt="${p.name}" class="product-img-web">
                </div>
                <h3 onclick="openProductModal(${p.id})">${p.name}</h3>
                <p>${p.price} грн</p>
                <button onclick="openProductModal(${p.id})">В корзину</button>
            </div>
        `).join('');

        return `<section class="category-section" id="category-${cat.id}"><h3 class="category-title">${cat.name}</h3><div class="products-grid">${productsHTML}</div></section>`;
    }).join('');
}

window.addToCart = function(id, sizeOrBtn, btnElement) {
    let size = 'M'; // Размер по умолчанию
    let btn = btnElement;
    
    // Определяем, откуда вызвали (из каталога или из карточки товара)
    if (typeof sizeOrBtn === 'string') size = sizeOrBtn; 
    else btn = sizeOrBtn;

    const product = products.find(p => p.id === id);
    // Теперь вещи одного типа, но разного размера - это разные позиции в корзине
    const existing = cart.find(item => item.id === id && item.size === size);
    
    if (existing) existing.quantity += 1;
    else cart.push({ ...product, quantity: 1, size: size });
    
    updateCartUI();

    if (btn) {
        const card = btn.closest('.product-card') || btn.closest('.product-modal-content');
        const img = card ? (card.querySelector('.product-img-web') || card.querySelector('#modal-img')) : null;
        const cartIcon = document.getElementById('cart-btn');

        if (img && cartIcon) {
            const flyingImg = img.cloneNode();
            flyingImg.classList.add('flying-item');
            const imgRect = img.getBoundingClientRect();
            flyingImg.style.left = imgRect.left + 'px';
            flyingImg.style.top = imgRect.top + 'px';
            document.body.appendChild(flyingImg);

            const cartRect = cartIcon.getBoundingClientRect();
            setTimeout(() => {
                flyingImg.style.left = (cartRect.left + (cartRect.width / 2) - 10) + 'px';
                flyingImg.style.top = cartRect.top + 'px';
                flyingImg.style.width = '20px';
                flyingImg.style.height = '20px';
                flyingImg.style.opacity = '0.3';
            }, 10);

            setTimeout(() => {
                flyingImg.remove();
                cartIcon.style.transform = 'scale(1.15)';
                setTimeout(() => cartIcon.style.transform = 'scale(1)', 200);
            }, 700);
        }
    }
}

window.removeFromCart = function(id, size) {
    // Удаляем товар с учетом его размера
    cart = cart.filter(item => !(item.id === id && item.size === size));
    updateCartUI();
}

function updateCartUI() {
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = cartCount;

    const cartItemsContainer = document.getElementById('cart-items-modal');
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Корзина пуста</p>';
    } else {
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div><strong>${item.name} (Размер: ${item.size})</strong><br><span>${item.quantity} шт. x ${item.price} грн</span></div>
                <button class="remove-btn" onclick="removeFromCart(${item.id}, '${item.size}')">Удалить</button>
            </div>
        `).join('');
    }

    const status = document.getElementById('user-status').value;
    const promoDiscountToUse = (typeof appliedPromoDiscount !== 'undefined') ? appliedPromoDiscount : 0;
    const totals = calculateOrder(cart, status, currentWheelDiscount, promoDiscountToUse);
    
    document.getElementById('subtotal').textContent = totals.subtotal;
    document.getElementById('status-discount').textContent = totals.statusDiscount;
    document.getElementById('wheel-percent-display').textContent = currentWheelDiscount;
    document.getElementById('wheel-discount-val').textContent = totals.wheelDiscount;
    
    const promoVal = document.getElementById('promo-discount-val');
    if(promoVal) promoVal.textContent = totals.promoDiscount || 0;

    document.getElementById('total').textContent = totals.total;
    document.getElementById('bonus-earned').textContent = totals.bonusEarned;

    const shippingText = document.getElementById('shipping-text');
    const shippingProgress = document.getElementById('shipping-progress');
    const target = 2500;
    
    if (totals.total === 0) {
        shippingText.textContent = "Добавьте товаров на 2500 грн для бесплатной доставки";
        shippingProgress.style.width = "0%";
    } else if (totals.total < target) {
        shippingText.textContent = `До бесплатной доставки осталось ${target - totals.total} грн`;
        shippingProgress.style.width = `${(totals.total / target) * 100}%`;
        shippingProgress.style.backgroundColor = "#ffc107";
    } else {
        shippingText.textContent = "🎉 У вас бесплатная доставка заказа!";
        shippingProgress.style.width = "100%";
        shippingProgress.style.backgroundColor = "#28a745";
    }
}

function checkSavedUser() {
    // Проверяем наличие email'а как главный признак авторизации
    const savedEmail = localStorage.getItem('shop_useremail'); 
    const savedName = localStorage.getItem('shop_username');
    
    if (savedEmail || savedName) {
        document.getElementById('auth-btn').classList.add('hidden');
        document.getElementById('user-badge').classList.remove('hidden');
        // Если имя пустое, пишем "Пользователь"
        document.getElementById('user-name-display').textContent = savedName || 'Пользователь';
        updateProfileUI(); 
    }
}

function updateProfileUI() {
    const name = localStorage.getItem('shop_username') || '';
    const surname = localStorage.getItem('shop_usersurname') || '';
    
    document.getElementById('prof-fullname').textContent = (name || surname) ? `${name} ${surname}`.trim() : '—';
    document.getElementById('prof-email').textContent = localStorage.getItem('shop_useremail') || '—';
    document.getElementById('prof-country').textContent = localStorage.getItem('shop_usercountry') || '—';
    document.getElementById('prof-dob').textContent = localStorage.getItem('shop_userdob') || '—';
    
    const historyContainer = document.getElementById('profile-orders-history');
    const savedHistory = localStorage.getItem('shop_order_history');
    if (savedHistory) {
        const orders = JSON.parse(savedHistory);
        historyContainer.innerHTML = orders.map(order => `
            <div class="order-history-item" style="border-bottom: 1px dashed #ccc; padding: 10px 0; font-size: 14px;">
                <p style="margin:4px 0;"><strong>Заказ #${order.id}</strong> от ${order.date}</p>
                <p style="margin:4px 0; color:#555;">${order.items.join(', ')}</p>
                <p style="margin:4px 0;">Сумма: <strong>${order.total} грн</strong></p>
            </div>
        `).join('');
    }
}

/* Модалки и оформление */
document.getElementById('auth-btn').addEventListener('click', () => document.getElementById('auth-modal').classList.remove('hidden'));
document.getElementById('close-auth').addEventListener('click', () => document.getElementById('auth-modal').classList.add('hidden'));
document.getElementById('profile-open-btn').addEventListener('click', () => { updateProfileUI(); document.getElementById('profile-modal').classList.remove('hidden'); });
document.getElementById('close-profile').addEventListener('click', () => document.getElementById('profile-modal').classList.add('hidden'));
document.getElementById('cart-btn').addEventListener('click', () => document.getElementById('cart-modal').classList.remove('hidden'));
document.getElementById('close-cart').addEventListener('click', () => document.getElementById('cart-modal').classList.add('hidden'));
document.getElementById('user-status').addEventListener('change', updateCartUI);

/* --- ЛОГИКА РЕДАКТИРОВАНИЯ ПРОФИЛЯ --- */
const viewMode = document.getElementById('profile-view-mode');
const editMode = document.getElementById('profile-edit-mode');

// Кнопка "Изменить данные" — переключаемся на форму и заполняем её текущими значениями
document.getElementById('profile-edit-btn').addEventListener('click', () => {
    viewMode.classList.add('hidden');
    editMode.classList.remove('hidden');

    // Подставляем данные из localStorage в инпуты, чтобы пользователю не вводить всё заново
    document.getElementById('edit-name').value = localStorage.getItem('shop_username') || '';
    document.getElementById('edit-surname').value = localStorage.getItem('shop_usersurname') || '';
    document.getElementById('edit-country').value = localStorage.getItem('shop_usercountry') || '';
    document.getElementById('edit-dob').value = localStorage.getItem('shop_userdob') || '';
});

// Кнопка "Отмена" — просто возвращаемся к просмотру данных без сохранения
document.getElementById('profile-cancel-btn').addEventListener('click', () => {
    editMode.classList.add('hidden');
    viewMode.classList.remove('hidden');
});

// Кнопка "Сохранить" — записываем новые данные и обновляем интерфейс
document.getElementById('profile-save-btn').addEventListener('click', () => {
    const newName = document.getElementById('edit-name').value.trim();
    const newSurname = document.getElementById('edit-surname').value.trim();
    const newCountry = document.getElementById('edit-country').value.trim();
    const newDob = document.getElementById('edit-dob').value;

    // Сохраняем обновленные значения в память браузера
    localStorage.setItem('shop_username', newName);
    localStorage.setItem('shop_usersurname', newSurname);
    localStorage.setItem('shop_usercountry', newCountry);
    localStorage.setItem('shop_userdob', newDob);

    // Сразу же обновляем имя в шапке сайта (Привет, Имя!)
    document.getElementById('user-name-display').textContent = newName || 'Пользователь';

    // Перерисовываем текстовые поля в Личном Кабинете
    updateProfileUI();

    // Показываем наше красивое всплывающее уведомление (которое делали в первом шаге)
    if (typeof showNotification === 'function') {
        showNotification('Данные профиля успешно изменены!', 'success');
    }

    // Возвращаем модалку в режим просмотра данных
    editMode.classList.add('hidden');
    viewMode.classList.remove('hidden');
});

/* --- НОВАЯ ЛОГИКА АВТОРИЗАЦИИ (EMAIL + ПАРОЛЬ) --- */
const authModal = document.getElementById('auth-modal');
const authChoiceStep = document.getElementById('auth-choice-step');
const authForm = document.getElementById('register-form');
const regFields = document.getElementById('reg-fields');
const loginFields = document.getElementById('login-fields');
const authFormTitle = document.getElementById('auth-form-title');
const authSubmitBtn = document.getElementById('auth-submit-btn');

let authMode = 'REG';

// Открытие окна авторизации с выбором действий
document.getElementById('auth-btn').addEventListener('click', () => {
    authModal.classList.remove('hidden');
    authChoiceStep.classList.remove('hidden');
    authForm.classList.add('hidden');
});

// Кнопка закрытия окна
document.getElementById('close-auth').addEventListener('click', () => {
    authModal.classList.add('hidden');
});

// Переключение на Вход
document.getElementById('choice-login-btn').addEventListener('click', () => {
    authMode = 'LOGIN';
    authFormTitle.textContent = 'Вход в аккаунт';
    authSubmitBtn.textContent = 'Войти';
    
    authChoiceStep.classList.add('hidden');
    authForm.classList.remove('hidden');
    regFields.classList.add('hidden');
    loginFields.classList.remove('hidden');
    
    // Смена обязательных полей
    ['reg-name', 'reg-surname', 'reg-email', 'reg-password'].forEach(id => document.getElementById(id).removeAttribute('required'));
    ['login-email', 'login-password'].forEach(id => document.getElementById(id).setAttribute('required', 'true'));
});

// Переключение на Регистрацию
document.getElementById('choice-reg-btn').addEventListener('click', () => {
    authMode = 'REG';
    authFormTitle.textContent = 'Регистрация';
    authSubmitBtn.textContent = 'Создать аккаунт';
    
    authChoiceStep.classList.add('hidden');
    authForm.classList.remove('hidden');
    regFields.classList.remove('hidden');
    loginFields.classList.add('hidden');
    
    // Смена обязательных полей
    ['reg-name', 'reg-surname', 'reg-email', 'reg-password'].forEach(id => document.getElementById(id).setAttribute('required', 'true'));
    ['login-email', 'login-password'].forEach(id => document.getElementById(id).removeAttribute('required'));
});

// Кнопка "Назад"
document.getElementById('back-to-choice').addEventListener('click', () => {
    authForm.classList.add('hidden');
    authChoiceStep.classList.remove('hidden');
});

// Обработка отправки формы (ТЕПЕРЬ РАБОТАЕТ ЧЕРЕЗ БАЗУ ДАННЫХ SQL)
authForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Блокируем кнопку на время загрузки, чтобы не накликали дважды
    authSubmitBtn.disabled = true;
    authSubmitBtn.textContent = 'Загрузка...';

    if (authMode === 'REG') {
        const name = document.getElementById('reg-name').value.trim();
        const surname = document.getElementById('reg-surname').value.trim();
        const email = document.getElementById('reg-email').value.trim().toLowerCase();
        const password = document.getElementById('reg-password').value;
        
        try {
            // Делаем HTTP-запрос к нашему серверу (INSERT)
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, surname, email, password })
            });
            
            const data = await response.json();
            
            if (!response.ok) {
                // Если email уже есть в базе, сервер вернет ошибку
                showNotification(data.error || 'Ошибка регистрации', 'error');
            } else {
                showNotification('Регистрация успешна! Теперь вы можете войти.', 'success');
                // Автоматически переключаем пользователя на окно входа
                document.getElementById('choice-login-btn').click();
            }
        } catch (err) {
            showNotification('Ошибка соединения с сервером! Убедитесь, что сервер запущен.', 'error');
        }
        
    } else {
        // ЛОГИКА ВХОДА (SELECT)
        const email = document.getElementById('login-email').value.trim().toLowerCase();
        const password = document.getElementById('login-password').value;
        
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            
            const data = await response.json();
            
            if (!response.ok) {
                showNotification(data.error || 'Неверная почта или пароль!', 'error');
            } else {
                // Успешный вход! Сервер вернул данные юзера из базы
                // Сохраняем их локально для текущей сессии
                localStorage.setItem('shop_username', data.user.name);
                localStorage.setItem('shop_usersurname', data.user.surname || '');
                localStorage.setItem('shop_useremail', data.user.email);
                localStorage.setItem('shop_usercountry', data.user.country || '');
                localStorage.setItem('shop_userdob', data.user.dob || '');
                
                showNotification('Вы успешно вошли!', 'success');
                
                // Обновляем интерфейс сайта
                document.getElementById('auth-btn').classList.add('hidden');
                document.getElementById('user-badge').classList.remove('hidden');
                document.getElementById('user-name-display').textContent = data.user.name || 'Пользователь';
                
                authModal.classList.add('hidden');
                authForm.reset();
                if (typeof updateProfileUI === 'function') updateProfileUI();
            }
        } catch (err) {
            showNotification('Ошибка соединения с сервером!', 'error');
        }
    }
    
    // Возвращаем кнопку в нормальное состояние
    authSubmitBtn.disabled = false;
    authSubmitBtn.textContent = authMode === 'REG' ? 'Создать аккаунт' : 'Войти';
});

document.querySelector('.style-checkout-btn').addEventListener('click', () => {
    // Заменяем alert на красивую ошибку
    if (cart.length === 0) {
        if (typeof showNotification === 'function') {
            showNotification('Ваша корзина пуста!', 'error');
        } else {
            alert('Ваша корзина пуста!');
        }
        return;
    }
    
    // Проверка авторизации
    if (!localStorage.getItem('shop_useremail') && !localStorage.getItem('shop_username')) {
        if (typeof showNotification === 'function') {
            showNotification('Пожалуйста, войдите в профиль!', 'error');
        } else {
            alert('Пожалуйста, войдите в профиль!');
        }
        document.getElementById('cart-modal').classList.add('hidden');
        return document.getElementById('auth-modal').classList.remove('hidden');
    }
    
    // Логика создания заказа
    const history = JSON.parse(localStorage.getItem('shop_order_history') || '[]');
    const orderId = Math.floor(100000 + Math.random() * 900000);
    const totals = calculateOrder(cart, document.getElementById('user-status').value, currentWheelDiscount);
    
    history.push({ 
        id: orderId, 
        date: new Date().toLocaleDateString('ru-RU'), 
        items: cart.map(i => `${i.name} x${i.quantity}`), 
        total: totals.total 
    });
    localStorage.setItem('shop_order_history', JSON.stringify(history));
    
    cart = [];
    currentWheelDiscount = 0; 
    updateCartUI();
    document.getElementById('cart-modal').classList.add('hidden');
    
    // КРАСИВОЕ УВЕДОМЛЕНИЕ ОБ УСПЕШНОМ ЗАКАЗЕ
    if (typeof showNotification === 'function') {
        showNotification(`Заказ #${orderId} успешно создан!`, 'success');
    } else {
        alert(`Заказ #${orderId} успешно создан!`);
    }
});

/* Колесо Фортуны */
const wheelModal = document.getElementById('wheel-modal');
const wheelElement = document.getElementById('wheel');
const wheelResult = document.getElementById('wheel-result');

document.getElementById('wheel-open-btn').addEventListener('click', () => wheelModal.classList.remove('hidden'));
document.getElementById('close-wheel').addEventListener('click', () => wheelModal.classList.add('hidden'));

document.getElementById('spin-btn').addEventListener('click', () => {
    if (isWheelSpun) return alert('Вы уже использовали свою скидку в этой сессии!');
    isWheelSpun = true;

    wheelResult.textContent = 'Крутим... 🍀';
    document.getElementById('spin-btn').style.opacity = '0.5';
    
    let pool = [];
    wheelSectors.forEach(s => { for (let i = 0; i < s.weight; i++) pool.push(s); });
    const targetSector = pool[Math.floor(Math.random() * pool.length)];
    const sectorCenter = targetSector.minD + 22.5;
    const finalRotation = (360 * 5) + (360 - sectorCenter);

    wheelElement.style.transition = 'transform 4s cubic-bezier(0.15, 0.65, 0.1, 1)';
    wheelElement.style.transform = `rotate(${finalRotation}deg)`;

    setTimeout(() => {
        currentWheelDiscount = targetSector.val;
        wheelResult.innerHTML = `🎉 Вы выиграли дополнительную скидку: <strong>${targetSector.val}%</strong>!`;
        updateCartUI();
    }, 4000);
});

/* --- ЛОГИКА ИИ ЧАТА --- */
const chatWindow = document.getElementById('ai-chat-window');
const supportBtn = document.getElementById('support-btn');
const closeChatBtn = document.getElementById('close-chat');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const sendChatBtn = document.getElementById('send-chat-btn');

supportBtn.addEventListener('click', () => chatWindow.classList.remove('hidden'));
closeChatBtn.addEventListener('click', () => chatWindow.classList.add('hidden'));

function sendMessage() {
    const text = chatInput.value.trim();
    if (!text) return;
    
    chatMessages.innerHTML += `<div class="message user-message">${text}</div>`;
    chatInput.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;

    setTimeout(() => {
        let aiResponse = "Извините, не совсем понял вопрос. Попробуйте написать иначе, например, спросить про 'доставку' или конкретный товар (куртки, джинсы).";
        const lowerText = text.toLowerCase();
        
        const isJeans = /джин|штан|брюк|карго/i.test(lowerText);
        const isJacket = /куртк|бомбер|пуховик|анорак|ветровк/i.test(lowerText);
        const isTshirt = /футбол|майк|топ/i.test(lowerText);
        const isHoodie = /худи|кофт|свитшот|толстовк/i.test(lowerText);
        const isShoes = /кроссов|кед|обув/i.test(lowerText);

        if (/размер|фит|сяд/i.test(lowerText)) {
            aiResponse = "У нас вещи идут в основном свободного кроя. Если любите оверсайз — берите свой обычный размер. Джинсы и худи идут размер в размер.";
        } else if (/доставк|почт|отправ/i.test(lowerText)) {
            aiResponse = "Мы отправляем заказы Новой Почтой по всей Украине! Доставка полностью бесплатная при заказе от 2500 грн.";
        } else if (/скидк|акци|колес/i.test(lowerText)) {
            aiResponse = "Сверху есть «Колесо скидок», там можно выбить до 50% к заказу! А если станете VIP клиентом, у вас всегда будет скидка 15%.";
        } else if (isJeans) {
            aiResponse = "Джинсы — отличный выбор! У нас есть классные карго и широкие классические модели. Загляните в мужскую и женскую категории.";
        } else if (isJacket) {
            aiResponse = "Бомберы и куртки сейчас очень популярны! В межсезонной коллекции есть отличные кэжуал бомберы, а в зимней — теплые пуховики.";
        } else if (isTshirt) {
            aiResponse = "Футболки — база гардероба! Есть базовые топы и оверсайз модели со стритвир принтами, а в спортивном разделе есть даже легендарные джерси Роналду и Месси!";
        } else if (isHoodie) {
            aiResponse = "Худи — наша фишка. Плотный хлопок, крутые расцветки. Есть как оверсайз, так и укороченные кроп-худи для девушек.";
        } else if (isShoes) {
            aiResponse = "Обувь тоже в наличии! Обратите внимание на стильные ретро-кроссовки и спортивные модели для бега.";
        } else if (/привет|здравствуй|хай/i.test(lowerText)) {
            aiResponse = "Привет! Чем могу помочь сегодня? Подскажу по ассортименту или условиям заказа.";
        } else if (/товар|что есть/i.test(lowerText)) {
            aiResponse = "В каталоге много уличной одежды: худи, бомберы, джинсы, футболки и кроссовки. Какой элемент гардероба вы ищете?";
        }

        chatMessages.innerHTML += `<div class="message ai-message">${aiResponse}</div>`;
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 800); 
}

sendChatBtn.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

/* --- ЛОГИКА ТЕМНОЙ ТЕМЫ --- */
const themeBtn = document.getElementById('theme-btn');

if (localStorage.getItem('shop_theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeBtn.textContent = '☀️ Светлая тема';
}

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('shop_theme', 'dark');
        themeBtn.textContent = '☀️ Светлая тема';
    } else {
        localStorage.setItem('shop_theme', 'light');
        themeBtn.textContent = '🌙 Темная тема';
    }
});

/* Логика выхода из аккаунта */
document.getElementById('logout-btn').addEventListener('click', () => {
    // Удаляем все ключи авторизации
    localStorage.removeItem('shop_username');
    localStorage.removeItem('shop_useremail');
    localStorage.removeItem('shop_password');
    
    // Удаляем остальные данные профиля
    localStorage.removeItem('shop_usersurname');
    localStorage.removeItem('shop_usercountry');
    localStorage.removeItem('shop_userdob');
    localStorage.removeItem('shop_order_history');

    // Прячем профиль, показываем кнопку входа
    document.getElementById('user-badge').classList.add('hidden');
    document.getElementById('auth-btn').classList.remove('hidden');
    document.getElementById('profile-modal').classList.add('hidden');

    // Перезагружаем страницу для обновления интерфейса
    location.reload();
});

/* --- ФУНКЦИЯ ДЛЯ КРАСИВЫХ УВЕДОМЛЕНИЙ --- */
function showNotification(message, type = 'success') {
    // Ищем контейнер или создаем его, если его еще нет
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }

    // Создаем саму плашку уведомления
    const toast = document.createElement('div');
    toast.className = `custom-toast ${type}`;
    
    // Подбираем иконку в зависимости от типа (успех или ошибка)
    const icon = type === 'success' ? '🎉' : '❌';
    toast.innerHTML = `<span>${icon}</span> ${message}`;

    container.appendChild(toast);

    // Плавное исчезновение через 3 секунды
    setTimeout(() => {
        toast.classList.add('hide');
        setTimeout(() => toast.remove(), 300); // Ждем окончания анимации перед удалением из DOM
    }, 3000);
}

checkSavedUser();
renderCatalog();

/* --- ЛОГИКА НОВЫХ ФИЧ: ПОИСК, ПРОМОКОД И ОКНО ТОВАРА --- */

// 1. Поиск и фильтры
document.getElementById('search-input')?.addEventListener('input', (e) => {
    currentSearch = e.target.value.toLowerCase().trim();
    renderCatalog();
});

document.getElementById('sort-select')?.addEventListener('change', (e) => {
    currentSort = e.target.value;
    renderCatalog();
});

// 2. Промокод (Секретный код: practika2026)
let appliedPromoDiscount = 0; // % скидки
document.getElementById('apply-promo-btn')?.addEventListener('click', () => {
    const promo = document.getElementById('promo-input').value.trim().toLowerCase();
    if (promo === 'practika2026') {
        appliedPromoDiscount = 15; // Даем 15% скидки
        if (typeof showNotification === 'function') showNotification('Промокод успешно применен! Скидка 15%', 'success');
        updateCartUI();
    } else {
        if (typeof showNotification === 'function') showNotification('Неверный промокод', 'error');
    }
});

// 3. Логика окна карточки товара
let activeProduct = null;
let selectedSize = 'M';
const productModal = document.getElementById('product-modal');

document.getElementById('close-product')?.addEventListener('click', () => productModal.classList.add('hidden'));

// Эта функция вызывается при клике на картинку, название или кнопку "В корзину" в каталоге
window.openProductModal = function(id) {
    activeProduct = products.find(p => p.id === id);
    if (!activeProduct) return;
    
    document.getElementById('modal-img').src = activeProduct.img;
    document.getElementById('modal-title').textContent = activeProduct.name;
    document.getElementById('modal-price').textContent = activeProduct.price + ' грн';
    
    // ВСТАВЛЯЕМ ОПИСАНИЕ ИЗ МАССИВА ТОВАРОВ
    document.getElementById('modal-desc').textContent = activeProduct.description;
    
    // Сброс размера на 'M' при открытии
    selectedSize = 'M';
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent === 'M') btn.classList.add('active');
    });
    
    productModal.classList.remove('hidden');
}

// Переключение размеров (кнопки S, M, L, XL)
document.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        selectedSize = e.target.textContent;
    });
});

// Добавление в корзину из модалки
document.getElementById('modal-add-to-cart')?.addEventListener('click', (e) => {
    if (activeProduct) {
        addToCart(activeProduct.id, selectedSize, e.target);
        productModal.classList.add('hidden');
        if (typeof showNotification === 'function') showNotification(`Добавлено: ${activeProduct.name} (Размер: ${selectedSize})`, 'success');
    }
});
