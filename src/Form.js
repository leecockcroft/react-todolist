import React from "react";

const Form = props => {
  return (
    <form onSubmit={props.submit}>
      <div className="input-group col-lg-6 mx-auto">
        <input
          type="text"
          className="form-control"
          value={props.myValue}
          onChange={props.eventHandler}
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary"> Submit</button>
        </div>
      </div>
    </form>
  );
};

export default Form;
