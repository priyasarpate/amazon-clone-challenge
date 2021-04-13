import React from 'react';
import './Styles/Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';


function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/gift-certificates/consumer/2020/amazoncash/holi/Holi_Cash_EN_v1_1500x200_20201015.jpg"
                    alt=""
                />
                <div>
                    <h3>Hello, </h3>
                    <h2 className="checkout__title">Your shopping Basket</h2>

                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className='checkout__right'>
                <Subtotal />
            </div>
        </div>
    )
}
export default Checkout;