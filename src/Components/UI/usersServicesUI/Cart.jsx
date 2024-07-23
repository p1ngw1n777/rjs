import React, { useState, useEffect } from 'react';
import './CartPage.css';
import { orderService } from '../../../api/services/order.services';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [loginUser, setUser] = useState([])

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('listProducts')) || [];
    setCartItems(storedItems);
    calculateTotal(storedItems);
  }, []);

  const calculateTotal = (items) => {
    const totalSum = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(totalSum);
  };

  const updateQuantity = (index, qty) => {
    const updatedItems = [...cartItems];
    updatedItems[index].quantity = qty > 0 ? qty : 1;
    setCartItems(updatedItems);
    calculateTotal(updatedItems);
    localStorage.setItem('listProducts', JSON.stringify(updatedItems));
  };

  const removeItem = (index) => {
    const updatedItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedItems);
    calculateTotal(updatedItems);
    localStorage.setItem('listProducts', JSON.stringify(updatedItems));
  };

  const goToOrder = async () => {
    let loginUser = JSON.parse(localStorage.getItem('user')) || [];
    console.log(JSON.stringify({ cartItems, total, loginUser }))
    const response = await orderService.postCreateOrder(JSON.stringify({cartItems, total, loginUser}))

    if (response.status = true) {
    //   const result = await response.json();
    //   // Обработка успешного запроса (например, перенаправление на страницу подтверждения)
        alert('Покупка оформлена!');
    } else {
       // Обработка ошибок
       console.error('Ошибка при оформлении покупки');
     }
  };

  return (
    <div className="cart-page">
      <h1>Корзина</h1>
      <a href="/catalog">Вернуться в каталог</a>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Товары в корзине</th>
            <th>Количество</th>
            <th>Цена</th>
            <th>Удалить</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={index}>
              <td>
                <img src={item.image_Url} alt={item.productName} className="cart-image" />
                <div className="cart-product-details">
                  <p>{item.productName}</p>
                </div>
              </td>
              <td>
                <button onClick={() => updateQuantity(index, item.quantity - 1)}>-</button>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(index, parseInt(e.target.value))}
                  min="1"
                />
                <button onClick={() => updateQuantity(index, item.quantity + 1)}>+</button>
              </td>
              <td>{item.price * item.quantity} ₽</td>
              <td>
                <button onClick={() => removeItem(index)}>✖</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cart-summary">
        <h2>Итого: {total} ₽</h2>
        <button className="checkout-button" onClick={goToOrder}>Перейти к оформлению</button>
      </div>
    </div>
  );
};

export default Cart;