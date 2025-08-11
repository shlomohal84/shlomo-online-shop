import { useContext, useState } from "react";
import GlobalContext from "../helpers/context/app.context";
import ProductCard from "./ProductCard";
import { Button } from "react-bootstrap";
import ToastMessage from "./ToastMessage";
export default function Checkout() {
  const { cart, subtotal, handlePurchase } = useContext(GlobalContext);
  const [inputs, setInputs] = useState({ creditNumber: "", month: "Month", year: "Month", cvv: "", holderId: "" });
  const [showCreditErrorMsg, setShowCreditErrorMsg] = useState(true);
  const [showCvvErrorMsg, setShowCvvErrorMsg] = useState(true);
  const [showIdHolderErrorMsg, setShowIdHolderErrorMsg] = useState(true);
  const [showExpiryErrorMsg, setShowExpiryErrorMsg] = useState(true);
  const { creditNumber, month, year, cvv, holderId } = inputs;

  const assignYearSelect = () => {
    const arr = ["Year"];
    for (let i = 2026; i <= 2035; i++) {
      arr.push(i);
    }
    return arr;
  };
  const assignMonthSelect = () => {
    const arr = ["Month"];
    for (let i = 1; i <= 12; i++) {
      arr.push(i);
    }
    return arr;
  };

  const handleCreditCardInput = (evt) => {
    const numericValue = evt.target.value.replace(/[^0-9]/g, "");
    setInputs((prevState) => ({ ...prevState, creditNumber: numericValue }));
  };

  const handleHolderIdInput = (evt) => {
    const numericValue = evt.target.value.replace(/[^0-9]/g, "");
    setInputs((prevState) => ({ ...prevState, holderId: numericValue }));
  };

  const handleCvvInput = (evt) => {
    const numericValue = evt.target.value.replace(/[^0-9]/g, "");
    setInputs((prevState) => ({ ...prevState, cvv: numericValue }));
  };

  const handleExpiryYear = (evt) => {
    setInputs((prevState) => ({ ...prevState, year: Number(evt.target.value) }));
  };
  const handleExpiryMonthSelect = (evt) => {
    setInputs((prevState) => ({ ...prevState, month: Number(evt.target.value) }));
  };

  const handleCreditCardValidation = () => {
    if (creditNumber.length < 16) setShowCreditErrorMsg(true);
    else setShowCreditErrorMsg(false);
  };

  const handleHolderIdValidation = () => {
    if (holderId.length < 9) setShowIdHolderErrorMsg(true);
    else setShowIdHolderErrorMsg(false);
  };

  const handleCvvValidation = () => {
    if (cvv.length < 3) setShowCvvErrorMsg(true);
    else setShowCvvErrorMsg(false);
  };

  const handleExpiryValidation = () => {
    if (month !== Number(month) || year !== Number(year)) setShowExpiryErrorMsg(true);
    else setShowExpiryErrorMsg(false);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handlePurchase();
    alert("Purchase Completed!");
  };
  return (
    <>
      <h3 className="category-header">
        <span>Checkout</span>
      </h3>

      <form onSubmit={handleSubmit} className="login-form">
        {showCreditErrorMsg && <ToastMessage errorBody="Must be at least 16 digits" />}
        <div className="transaction-input-group">
          <label htmlFor="credit-number">Credit card: </label>
          <input
            placeholder="Credit card number"
            type="text"
            name="credit-number"
            autoComplete="on"
            id="credit-number"
            onChange={handleCreditCardInput}
            maxLength={16}
            value={creditNumber}
            onBlur={handleCreditCardValidation}
          />
        </div>
        {showExpiryErrorMsg && <ToastMessage errorBody="Please choose expiry credentials" />}

        <div className="transaction-input-group">
          <label htmlFor="expiry-month">Expiry date: </label>
          <div className="select-wrapper">
            <select
              id="expiry-month"
              name="expiry-month"
              value={month}
              onChange={handleExpiryMonthSelect}
              onBlur={handleExpiryValidation}
            >
              {assignMonthSelect().map((elm, i) => (
                <option key={i} value={elm}>
                  {elm}
                </option>
              ))}
            </select>
            <select
              id="expiry-year"
              name="expiry-year"
              value={year}
              onChange={handleExpiryYear}
              onBlur={handleExpiryValidation}
            >
              {assignYearSelect().map((elm, i) => (
                <option key={i} value={elm}>
                  {elm}
                </option>
              ))}
            </select>
          </div>
        </div>
        {showCvvErrorMsg && <ToastMessage errorBody="Must be at least 3 digits" />}
        <div className="transaction-input-group">
          <label htmlFor="cvv">CVV: </label>
          <input
            placeholder="CVV"
            type="text"
            name="cvv"
            autoComplete="on"
            id="cvv"
            maxLength={3}
            onBlur={handleCvvValidation}
            value={cvv}
            onChange={handleCvvInput}
          />
        </div>
        {showIdHolderErrorMsg && <ToastMessage errorBody="Must be at least 9 digits" />}

        <div className="transaction-input-group">
          <label htmlFor="holder-id">Holder ID: </label>
          <input
            placeholder="Holder ID"
            type="text"
            name="holder-id"
            autoComplete="on"
            id="holder-id"
            maxLength={9}
            onBlur={handleHolderIdValidation}
            value={holderId}
            onChange={handleHolderIdInput}
          />
        </div>
        <button disabled={showCreditErrorMsg || showCvvErrorMsg || showExpiryErrorMsg || showIdHolderErrorMsg}>
          Purchase
        </button>
      </form>
      <h3>Subtotal: {subtotal + "$"}</h3>
      <div className="category">
        {cart.products && cart.products.map((product, i) => <ProductCard key={i} product={product} />)}
      </div>
    </>
  );
}
