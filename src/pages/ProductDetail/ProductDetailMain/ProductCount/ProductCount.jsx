import React, { useState } from "react";
import { BiPlus, BiMinus, BiWon } from "react-icons/bi";
import "./ProductCount.scss";

function ProductCount({ price }) {
  const [count, setCount] = useState(1);
  const [productPrice, setProductPrice] = useState(price);
  const cal = price;

  const plus = () => {
    if (count < 10) {
      setCount(count + 1);
      setProductPrice((count + 1) * price);
    } else {
      setCount(10);
      alert("최대 10개까지 구매 가능합니다.");
    }
  };

  const minus = () => {
    if (count > 1) {
      setCount(count - 1);
      setProductPrice(productPrice - price);
    } else {
      setCount(1);
      alert("최소 1개 이상 구매 가능합니다.");
    }
    // setCount(count - 1);
    // setProductPrice(count * price);
    // count <= 0 && alert("최소 1개 이상 구매가능합니다.");
    // count <= 0 && setCount(1);
  };

  return (
    <div className="total-container">
      <div className="count-container">
        <span className="count">수량</span>
        <span>{count}</span>
        <BiMinus className="count-minus" onClick={minus} />
        <BiPlus className="count-plus" onClick={plus} />
      </div>
      <div className="product-price">
        <BiWon className="won" />
        <span>{productPrice}</span>
      </div>
    </div>
  );
}

export default ProductCount;
