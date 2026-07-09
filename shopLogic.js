function calculateOrder(cartItems, status, wheelDiscountPercent = 0, promoDiscountPercent = 0) {
    let subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    let discountPercent = 0;

    if (status === 'VIP') {
        discountPercent = 15;
    } else if (subtotal > 2000) {
        discountPercent = 5;
    }

    let statusDiscount = Math.round(subtotal * (discountPercent / 100));
    let wheelDiscount = Math.round((subtotal - statusDiscount) * (wheelDiscountPercent / 100));
    
    // Считаем промокод (применяется после статусных скидок)
    let currentTotal = subtotal - statusDiscount - wheelDiscount;
    let promoDiscount = Math.round(currentTotal * (promoDiscountPercent / 100));
    
    let total = currentTotal - promoDiscount;
    let bonusEarned = Math.round(total * 0.1);

    return { subtotal, statusDiscount, wheelDiscount, promoDiscount, total, bonusEarned };
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { calculateOrder };
}