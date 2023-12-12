// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

// const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
//   return (
//     <div className="cart-btn ">
//       <div className="amount-toggle flex gap-4">
//         <button onClick={() => setDecrease()}>
//           <FontAwesomeIcon
//             icon={faMinus}
//             className="minus"
//             style={{ cursor: "pointer" }}
//           />
//         </button>
//         <div className="amount-style">{amount}</div>
//         <button onClick={() => setIncrease()}>
//           <FontAwesomeIcon
//             icon={faPlus}
//             className="add"
//             style={{ cursor: "pointer" }}
//           />
//         </button>
//       </div>
//     </div>
//   );
// };
// export default CartAmountToggle;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const CartAmountToggle = ({ itemId, amount, setDecrease, setIncrease }) => {
  return (
    <div className="cart-btn ">
      <div className="amount-toggle flex gap-4">
        <button onClick={() => setDecrease(itemId)}>
          <FontAwesomeIcon
            icon={faMinus}
            className="minus"
            style={{ cursor: "pointer" }}
          />
        </button>
        <div className="amount-style">{amount}</div>
        <button onClick={() => setIncrease(itemId)}>
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
