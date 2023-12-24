import React, { useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const CartAmountToggle = ({ id, amount, setDecrease, setIncrease }) => {
  const localStorageKey = `cartItem_${id}`;

  useEffect(() => {
    
    localStorage.setItem(localStorageKey, amount);
  }, [amount, localStorageKey]);

  return (
    <div className="cart-btn">
      <div className="amount-toggle flex gap-4">
        <button onClick={() => setDecrease(id)}>
          <FontAwesomeIcon
            icon={faMinus}
            className="minus"
            style={{ cursor: "pointer" }}
          />
        </button>
        <div className="amount-style">{amount}</div>
        <button onClick={() => setIncrease(id)}>
          <FontAwesomeIcon
            icon={faPlus}
            className="add"
            style={{ cursor: "pointer" }}
          />
        </button>
      </div>
    </div>
  );
};

export default CartAmountToggle;
