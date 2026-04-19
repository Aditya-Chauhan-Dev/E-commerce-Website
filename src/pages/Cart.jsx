import React from "react";
import { MdCurrencyRupee } from "react-icons/md";
import { useCart } from "../context/CartContext";
import FormatPrice from "../Helper/FormatPrice";

function Cart() {
  const { cart, removeItem } = useCart();

  //  subtotal
  const subtotal = cart.reduce((total, item) => {
    return total + (item.price*94.62) * item.quantity;
  }, 0);

  

  //  shipping (logic)
  const shipping = subtotal === 0 ? 0 : subtotal < 2000 ? 400 : 250;

  //  final total
  const total = subtotal + shipping;

  return (
    <div className="p-5 lg:flex gap-10">

      {/* LEFT SIDE - PRODUCTS */}
      <div className="flex-1">
        <h2 className="text-2xl mb-5 font-semibold">Shopping Cart</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex gap-5 border-b py-4 items-center"
            >
              {/* IMAGE */}
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-24 h-24 object-cover"
              />

              {/* DETAILS */}
              <div className="flex-1">
                <h3 className="font-semibold">{item.title}</h3>

                <p className="text-sm text-gray-500">
                  Qty: {item.quantity}
                </p>

                {/* PRICE */}
                <FormatPrice price={item.price * item.quantity} />
              </div>

              {/* REMOVE BTN */}
              <button
                onClick={() => removeItem(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      {/* RIGHT SIDE - SUMMARY */}
      <div className="w-full lg:w-[300px] border p-5 rounded shadow-md h-fit">

        <h3 className="text-xl font-semibold mb-4">Order Summary</h3>

        <div className="flex justify-between mb-2">
          <p>Subtotal</p>
          <div className="flex items-center">
            <MdCurrencyRupee />
            <p>{subtotal}</p>
          </div>
        </div>

        <div className="flex justify-between mb-2">
          <p>Shipping</p>
          <div className="flex items-center">
            <MdCurrencyRupee />
            <p>{shipping}</p>
          </div>
        </div>

        <hr className="my-3" />

        <div className="flex justify-between font-bold text-lg">
          <p>Total</p>
          <div className="flex items-center">
            <MdCurrencyRupee />
            <p>{total}</p>
          </div>
        </div>

        <button className="w-full mt-5 bg-green-600 text-white py-2 rounded">
          Proceed to Checkout
        </button>
      </div>

    </div>
  );
}

export default Cart;