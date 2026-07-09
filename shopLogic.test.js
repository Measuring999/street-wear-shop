const { calculateOrder } = require('./shopLogic');

test('NEW status + 20% Wheel Discount', () => {
    const cart = [{ price: 1000, quantity: 1 }];
    const result = calculateOrder(cart, 'NEW', 20);

    expect(result.subtotal).toBe(1000);
    expect(result.statusDiscount).toBe(0);
    expect(result.wheelDiscount).toBe(200);
    expect(result.total).toBe(800);
});

test('VIP status + 50% Wheel Discount combo', () => {
    const cart = [{ price: 2000, quantity: 1 }];
    const result = calculateOrder(cart, 'VIP', 50);

    expect(result.statusDiscount).toBe(300); 
    expect(result.wheelDiscount).toBe(850); 
    expect(result.total).toBe(850);
});