import React from "react";
import "./OrderForm.css";

const OrderForm = () => {
  const handleAlert = () => {
    alert("Ordered Succesfully");
  };
  return (
    <>
      <div className="main">
        <h1>Place Your Order Here!</h1>
        <form>
          <fieldset>
            <label for="phone">Phone:</label>
            <input type="tel" id="phone" name="user_tel" />
            <label for="address">Address:</label>
            <textarea></textarea>
          </fieldset>
          <fieldset>
            <legend>
              <div className="number">1</div> Extra Fillings:
            </legend>
            <input type="checkbox" id="mushrooms" name="mushrooms" />
            <label>Mushrooms</label>
            <input type="checkbox" id="onions" name="onions" />
            <label>Onions</label>
            <input type="checkbox" id="carrots" name="carrots" />
            <label>Carrots</label>
            <input type="checkbox" id="celery" name="celery" />
            <label>Celery</label>
            <input type="checkbox" id="peas" name="peas" />
            <label>Peas</label>
          </fieldset>
          <fieldset>
            <legend>
              <div className="number">2</div> Any Allergies/Special Requests:
            </legend>
            <textarea></textarea>
          </fieldset>
          <input
            className="button"
            type="submit"
            value="Order My Food"
            onclick={handleAlert}
          />
        </form>
      </div>
      <div className="order">
        <h1>Thanks for your order!</h1>
      </div>
    </>
  );
};

export default OrderForm;
