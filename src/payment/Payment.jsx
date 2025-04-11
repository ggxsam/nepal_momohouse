import React from "react";
import { v4 as uuidv4 } from "uuid";
import CryptoJS from "crypto-js";
import { NavLink, useLocation } from "react-router-dom";

const Payment = () => {
  let transaction_uuid = uuidv4();
  const location = useLocation();
  let total_amount = location?.state.totalPrice || 0;
  let Message = `total_amount=${total_amount},transaction_uuid=${transaction_uuid},product_code=EPAYTEST`;
  var hash = CryptoJS.HmacSHA256(Message, "8gBm/:&EnhH.1/q");
  var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);
  return (
    <div className="pt-20">
      <div>
        <form
          className="text-center shadow-2xl m-auto shadow-gray-700 w-96 flex space-y-5 flex-col justify-center items-center bg-white p-10 rounded-2xl"
          action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
          method="POST"
        >
          <input
            type="hidden"
            id="amount"
            name="amount"
            value={total_amount}
            required
          />
          <input
            type="hidden"
            id="tax_amount"
            name="tax_amount"
            value="0"
            required
          />
          <input
            type="hidden"
            id="total_amount"
            name="total_amount"
            value={total_amount}
            required
          />
          <input
            type="hidden"
            id="transaction_uuid"
            name="transaction_uuid"
            value={transaction_uuid}
            required
          />
          <input
            type="hidden"
            id="product_code"
            name="product_code"
            value="EPAYTEST"
            required
          />
          <input
            type="hidden"
            id="product_service_charge"
            name="product_service_charge"
            value="0"
            required
          />
          <input
            type="hidden"
            id="product_delivery_charge"
            name="product_delivery_charge"
            value="0"
            required
          />
          <input
            type="hidden"
            id="success_url"
            name="success_url"
            value="https://nepalmomohouse-bve3.vercel.app/success"
            required
          />
          <input
            type="hidden"
            id="failure_url"
            name="failure_url"
            value="https://nepalmomohouse-bve3.vercel.app/failure"
            required
          />
          <input
            type="hidden"
            id="signed_field_names"
            name="signed_field_names"
            value="total_amount,transaction_uuid,product_code"
            required
          />
          <input
            type="hidden"
            id="signature"
            name="signature"
            value={hashInBase64}
            required
          />

          <p className="text-2xl">Total Price:{total_amount}</p>
          <input
            className="bg-green-950 ml-2 text-white p-2  py-3 w-48"
            value="Submit"
            type="submit"
          />
          <NavLink
            to="/menu"
            className="bg-red-800 ml-2 text-white text-center py-3 p-2 w-48"
          >
            Cancel
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default Payment;
