import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";

const AddExpenseForm = (props) => {
  const { dispatch } = useContext(AppContext);

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    const expense = {
      id: uuidv4(),
      name,
      cost: parseInt(cost),
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });

    setName("");
    setCost("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div class="row">
        <div class="col-lg-12">
          <label for="name">Name</label>
          <input
            required="required"
            type="text"
            class="form-control"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-lg-12">
          <label for="cost">Cost</label>
          <input
            required="required"
            type="number"
            class="form-control"
            id="cost"
            value={cost}
            onChange={(event) => {
              const value = event.target.value;
              if (value >= 0) {
                setCost(value);
              } else {
                window.alert('Cost cannot be negative');
              }
            }}
          />
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-lg">
          <button type="submit" class="btn btn-primary">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
