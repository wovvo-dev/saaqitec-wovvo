'use client';

import React from 'react';

const CheckoutButton = () => {
  const handleCheckout = async () => {
    const res = await fetch('/api/create-checkout-session', {
      method: 'GET',
    });

    const data = await res.json();

    if (data.url) {
      window.location.href = data.url;
    } else {
      alert('Something went wrong!');
    }
  };

  return (
    <button
 
      onClick={handleCheckout}
      className="bg-black text-white py-2 px-4 rounded"
    >
      Checkout
    </button>
  );
};

export default CheckoutButton;
