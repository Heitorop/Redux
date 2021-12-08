/** @format */

import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { fetchCustomers } from "./asyncActions/customers";
import { minusCash, plusCash } from "./store/cashReducer";
import {
  addCustomerAction,
  removeCustomerAction,
} from "./store/customerReducer";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const addCash = (amount) => {
    dispatch(plusCash(amount));
  };
  const getCash = (amount) => {
    dispatch(minusCash(amount));
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  };

  return (
    <div className='App'>
      <div>{cash}</div>
      <div>
        <button onClick={() => addCash(Number(prompt()))}>Add cash</button>
        <button onClick={() => getCash(Number(prompt()))}>Get cash</button>
        <button onClick={() => addCustomer(prompt())}>Add customer</button>
        <button onClick={() => dispatch(fetchCustomers())}>
          Get customers from DB
        </button>
      </div>
      {customers.length > 0 ? (
        <div>
          {customers.map((customer) => (
            <div key={customer.id} onClick={() => removeCustomer(customer)}>
              {customer.name}
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h1>There are no customers</h1>
        </div>
      )}
    </div>
  );
}

export default App;
